// background.js

// --- 1. CONFIGURATION ---
const SUPABASE_URL = "https://lmhzefnyphegrsuroemx.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_VH4TvHYY742LmOdTWaBz7w_KqaVrR9I";

// --- 2. HELPER: Send Toggle Message ---
function toggleDock(tab) {
    if (!tab || !tab.id) return;

    // Check if we can talk to the tab
    if (tab.url.startsWith("chrome://") || tab.url.startsWith("edge://") || tab.url.startsWith("about:")) {
        return; // Cannot inject into browser settings pages
    }

    chrome.tabs.sendMessage(tab.id, { action: "toggle" })
        .catch((err) => {
            console.log("Injection failed or content script not ready. Reload the page.", err);
        });
}

// --- 3. EVENT LISTENERS ---

// A. Handle Extension Icon Click (Manual Open)
chrome.action.onClicked.addListener((tab) => {
    toggleDock(tab);
});

// B. Handle Keyboard Shortcuts (Command)
chrome.commands.onCommand.addListener((command) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (command === "toggle-dock") {
            toggleDock(tabs[0]);
        }
        else if (command === "quick-save") {
            if (tabs[0]) chrome.tabs.sendMessage(tabs[0].id, { action: "quick_save" });
        }
    });
});

// --- 4. GOOGLE AUTH & API PROXY ---
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    // Google Auth Logic
    if (request.action === "GOOGLE_AUTH") {
        const redirectUrl = `https://${chrome.runtime.id}.chromiumapp.org/`;
        const authUrl = `${SUPABASE_URL}/auth/v1/authorize?provider=google&redirect_to=${redirectUrl}`;

        chrome.identity.launchWebAuthFlow({
            url: authUrl,
            interactive: true
        }, async (responseUrl) => {
            if (chrome.runtime.lastError || !responseUrl) {
                sendResponse({ error: chrome.runtime.lastError ? chrome.runtime.lastError.message : "Login failed" });
                return;
            }

            try {
                const url = new URL(responseUrl);
                const params = new URLSearchParams(url.hash.substring(1));
                const access_token = params.get("access_token");
                const refresh_token = params.get("refresh_token");

                if (access_token) {
                    const userReq = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
                        headers: {
                            "Authorization": `Bearer ${access_token}`,
                            "apikey": SUPABASE_ANON_KEY
                        }
                    });
                    const user = await userReq.json();
                    sendResponse({ success: true, data: { access_token, refresh_token, user } });
                } else {
                    sendResponse({ error: "No access token found." });
                }
            } catch (err) {
                sendResponse({ error: err.message });
            }
        });
        return true;
    }

    // --- NEW: Token Refresh Handler ---
    if (request.action === "REFRESH_SESSION") {
        const { refresh_token } = request;
        const refreshUrl = `${SUPABASE_URL}/auth/v1/token?grant_type=refresh_token`;

        fetch(refreshUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "apikey": SUPABASE_ANON_KEY
            },
            body: JSON.stringify({ refresh_token })
        })
            .then(async (res) => {
                const data = await res.json();
                if (res.ok) sendResponse({ success: true, data });
                else sendResponse({ success: false, error: data.error_description || "Refresh failed" });
            })
            .catch(err => sendResponse({ success: false, error: err.message }));

        return true;
    }

    // Supabase Request Proxy (UPDATED for Theme Sync Headers)
    if (request.action === "SUPABASE_REQ") {
        // We now extract 'headers' from the payload to support Upserting
        const { endpoint, method, body, token, headers: customHeaders } = request.payload;

        // Merge default headers with any custom headers passed from content.js
        const headers = {
            "Content-Type": "application/json",
            "apikey": SUPABASE_ANON_KEY,
            ...customHeaders
        };

        if (token) headers["Authorization"] = `Bearer ${token}`;

        fetch(`${SUPABASE_URL}${endpoint}`, {
            method: method,
            headers: headers,
            body: body ? JSON.stringify(body) : null
        })
            .then(async (res) => {
                if (res.status === 204) {
                    sendResponse({ success: true, data: null });
                    return;
                }
                const text = await res.text();
                try {
                    const data = text ? JSON.parse(text) : null;
                    if (res.ok) sendResponse({ success: true, data });
                    else sendResponse({ success: false, error: data ? (data.message || data.error || data) : "API Error" });
                } catch (e) {
                    sendResponse({ success: false, error: "JSON Parse Error" });
                }
            })
            .catch((err) => sendResponse({ success: false, error: err.message }));

        return true;
    }
});