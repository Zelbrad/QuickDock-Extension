// --- content.js ---

// --- 1. THE UI HTML (Unchanged) ---
const UI_HTML = `
<div id="dock-container">
    <div id="dock-icons"></div>
    <div class="dock-separator"></div>
    
    <div id="settings-icon" class="dock-item">
        <svg class="settings-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 5.389c-.42.18-.813.411-1.18.682l-1.302-.64a1.875 1.875 0 00-2.273.72l-1.102 1.91a1.875 1.875 0 00.32 2.362l1.047 1.032a7.556 7.556 0 000 1.088l-1.046 1.032a1.875 1.875 0 00-.321 2.362l1.102 1.91c.49.85 1.56 1.143 2.273.72l1.302-.64c.367.27.76.501 1.18.682l.178 1.572A1.875 1.875 0 0011.078 21.75h1.844c.917 0 1.699-.663 1.85-1.567l.178-1.572c.42-.18.813-.411 1.18-.682l1.302.64a1.875 1.875 0 002.273-.72l1.102-1.91a1.875 1.875 0 00-.32-2.362l-1.047-1.032c.033-.358.05-.724.05-1.088 0-.364-.017-.73-.05-1.088l1.046-1.032a1.875 1.875 0 00.321-2.362l-1.102-1.91a1.875 1.875 0 00-2.273-.72l-1.302.64c-.367-.27-.76-.501-1.18-.682l-.178-1.572A1.875 1.875 0 0013.922 2.25h-1.844zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" clip-rule="evenodd" />
        </svg>
    </div>

    <div id="dock-menu">
        <div id="auth-section">
            <h3 id="auth-title">Sign In</h3>
            
            <button id="google-btn">
                <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                    <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                    <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                    <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                    <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.274 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                    <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
                    </g>
                </svg>
                Continue with Google
            </button>

            <div class="auth-divider">
                <span>OR</span>
            </div>

            <input type="email" id="email" placeholder="Email address">
            <input type="password" id="password" placeholder="Password">
            <button id="auth-btn">Sign In</button>
            <div id="toggle-auth-btn">Need an account? Sign Up</div>
            <p id="error-msg"></p>
        </div>
        <div id="user-section" style="display:none;">
            <div class="user-row">
                <div id="user-email"></div>
                <label class="theme-switch" title="Toggle Theme">
                    <input type="checkbox" id="theme-toggle">
                    <span class="slider">
                        <svg class="icon-sun" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" /></svg>
                        <svg class="icon-moon" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" /></svg>
                    </span>
                </label>
            </div>
            <button id="logout-btn">Log Out</button>
        </div>
        </div>
    </div>
</div>

<div id="tutorial-popup">
    <div class="tut-content-wrapper">
        <h2 id="tut-title">Welcome to QuickDock! 🚀</h2>
        <p id="tut-desc">A quick tutorial to get you started</p>
        
        <!-- Step 1 Content -->
        <div class="tut-step-content active" data-step="1">
            <ul>
                <li><b>Alt + Q</b> or click icon to toggle.</li>
                <li><b>Alt + R</b> to quick save a link.</li>
            </ul>
        </div>
        <!-- Step 2 Content -->
        <div class="tut-step-content" data-step="2">
             <ul>
                <li>Drag & Drop icons to reorganize.</li>
                <li>Sign In to sync across devices.</li>
            </ul>
        </div>
        <!-- Step 3 Content -->
        <div class="tut-step-content" data-step="3">
            <p style="text-align:center;">You can also change the theme to match your style.</p>
        </div>
    </div>

    <!-- Progress Indicator -->
    <div class="tut-progress-container">
        <div class="tut-track-dots">
            <div class="tut-dot" data-index="1"></div>
            <div class="tut-dot" data-index="2"></div>
            <div class="tut-dot" data-index="3"></div>
        </div>
        <div class="tut-active-pill"></div>
    </div>

    <!-- Buttons -->
    <div class="tut-buttons">
        <button id="tut-back-btn">Back</button>
        <button id="tut-next-btn">
            <span id="tut-btn-text">Continue</span>
            <div id="tut-check-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9 12l2 2 4-4"></path>
                </svg>
            </div>
        </button>
    </div>
</div>
<div id="ctx-menu"><div id="btn-delete">Delete</div></div>

<div id="toast">
    <div class="checkmark-wrapper">
        <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
            <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
        </svg>
    </div>
    <span style="padding-top: 2px;">Saved!</span>
</div>
`;

// --- 2. CSS (RESPONSIVE) ---
const UI_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

:host { 
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; 
    /* Default size for large screens */
    --icon-size: 50px; 
    --glass-border: rgba(255, 255, 255, 0.4);
    --glass-bg: linear-gradient(135deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.1) 100%);
    --accent-color: #007AFF;
    --success-green: #4bb71b;
}

/* RESPONSIVE SCALING */
@media (max-width: 1200px) {
    :host { --icon-size: 46px; }
}
@media (max-width: 900px) {
    :host { --icon-size: 42px; }
}
@media (max-width: 600px) {
    :host { --icon-size: 38px; }
}

#dock-container {
    position: fixed; bottom: 43%; left: 50%;
    transform: translateX(-50%) translateY(-45%) scale(0.9);
    opacity: 0; pointer-events: none; display: flex; align-items: center; 
    padding: 12px 20px; /* Base padding */
    background: var(--glass-bg); backdrop-filter: blur(24px) saturate(140%);
    border: 1px solid var(--glass-border);
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.6);
    border-radius: 28px; z-index: 2147483647;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Adjust padding on smaller screens */
@media (max-width: 900px) {
    #dock-container { padding: 10px 16px; }
}
@media (max-width: 600px) {
    #dock-container { padding: 8px 14px; }
}

#dock-container.active { opacity: 1; pointer-events: auto; transform: translateX(-50%) translateY(0) scale(1); }
#dock-icons { 
    display: flex; align-items: center; gap: 14px; 
    max-width: 640px; /* ~10 icons */
    overflow-x: auto;
    overflow-y: hidden;
    padding: 20px 10px 4px 10px; /* Top padding expanded for hover space */
    margin-top: -16px; /* Negative margin pulls it back so dock size doesn't change */
    scroll-behavior: smooth;
    /* Hide Scrollbar */
    scrollbar-width: none;
    -ms-overflow-style: none;
    /* Fade Edges Mask */
    mask-image: linear-gradient(to right, transparent, black 15px, black calc(100% - 15px), transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 15px, black calc(100% - 15px), transparent);
}
#dock-icons::-webkit-scrollbar { display: none; } /* Chrome/Safari */

.dock-item {
    width: var(--icon-size); height: var(--icon-size); border-radius: 16px; cursor: pointer;
    transition: transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
    display: flex; align-items: center; justify-content: center; user-select: none;
    position: relative; overflow: hidden; 
    flex-shrink: 0; /* Prevent icons from shrinking */
    touch-action: none; /* Prevent scrolling while dragging on touch */
    z-index: 1;
}

/* Force grabbing cursor when active/dragging */
:host(.grabbing-cursor), .grabbing-cursor {
    cursor: grabbing !important;
}
/* Ensure children also respect grabbing */
:host(.grabbing-cursor) *, .grabbing-cursor * {
    cursor: grabbing !important;
}
.dock-item img { width: 100%; height: 100%; object-fit: cover; pointer-events: none; border-radius: 16px; }

.dock-item:hover { transform: translateY(-4px) scale(1.05); z-index: 200; }
#settings-icon:hover { transform: translateY(0) scale(1.05); }
.dock-item:active { cursor: grabbing; transform: scale(0.95); }

/* DRAGGING STATES */
.dock-item.dragging-placeholder {
    opacity: 0;
    pointer-events: none;
    transform: scale(0.95);
}

.dock-item.dragging-clone {
    position: fixed;
    pointer-events: none;
    z-index: 2147483650; /* Above everything */
    transform: scale(1.1);
    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
    opacity: 0.9;
    will-change: left, top;
    transition: none; /* No transition for immediate cursor following */
}

/* FLIP animation class */
.dock-item.flip-animate {
    transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

.settings-svg {
    width: 30px; height: 30px; color: rgba(255, 255, 255, 0.9);
    transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
}
#settings-icon:hover .settings-svg { transform: rotate(90deg); }

.dock-separator { width: 1px; height: 32px; background: rgba(0,0,0,0.1); border-right: 1px solid rgba(255,255,255,0.3); margin: 0 16px; }

/* --- COMPACT MENU STYLES --- */
#dock-menu {
    position: absolute; bottom: 100%; right: 0; margin-bottom: 12px; width: 260px;
    background: rgba(30, 30, 35, 0.90); backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1); box-shadow: 0 15px 50px rgba(0,0,0,0.5);
    border-radius: 18px; padding: 16px;
    color: white; display: none; text-align: left;
    transform-origin: bottom right; animation: menuPop 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
@keyframes menuPop { from { opacity: 0; transform: scale(0.9) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }
#dock-menu h3 { margin: 0 0 12px 0; font-size: 16px; font-weight: 600; color: white; letter-spacing: -0.02em; }

/* GOOGLE BUTTON STYLES */
#google-btn {
    width: 100%; padding: 8px; margin-bottom: 8px;
    background: white; color: #3c4043; border: none;
    border-radius: 12px; cursor: pointer; font-weight: 500; font-size: 13px;
    display: flex; align-items: center; justify-content: center; gap: 8px;
    transition: transform 0.1s, background 0.2s;
}
#google-btn:hover { background: #f1f3f4; }
#google-btn:active { transform: scale(0.98); }

/* DIVIDER STYLES */
.auth-divider {
    display: flex; align-items: center; text-align: center; color: rgba(255,255,255,0.4); 
    font-size: 10px; margin: 8px 0; font-weight: 600;
}
.auth-divider::before, .auth-divider::after {
    content: ''; flex: 1; border-bottom: 1px solid rgba(255,255,255,0.1);
}
.auth-divider span { padding: 0 10px; }

#dock-menu input { 
    width: 100%; padding: 10px 12px; margin-bottom: 8px; border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.3); color: white; 
    font-size: 13px; outline: none; transition: border-color 0.2s, background 0.2s; box-sizing: border-box; 
}
#dock-menu input:focus { border-color: rgba(255,255,255,0.3); background: rgba(0,0,0,0.5); }
#dock-menu button#auth-btn { 
    width: 100%; padding: 10px; margin-top: 4px; background: var(--accent-color);
    color: white; border: none; border-radius: 10px; cursor: pointer; font-weight: 600; font-size: 13px;
    transition: transform 0.1s, opacity 0.2s;
}
#dock-menu button:hover { opacity: 0.9; }
#dock-menu button:active { transform: scale(0.98); }
#toggle-auth-btn { font-size: 12px; color: rgba(255,255,255,0.6); text-align: center; margin-top: 10px; cursor: pointer; }
#toggle-auth-btn:hover { color: white; text-decoration: underline; }
#error-msg { color: #ff5b5b; font-size: 12px; margin-top: 8px; text-align: center; line-height: 1.4; }
#user-section { display: flex; flex-direction: column; gap: 10px; align-items: center; text-align: center; }
#user-email { font-size: 13px; color: rgba(255,255,255,0.8); background: rgba(255,255,255,0.1); padding: 6px 12px; border-radius: 20px; }
#logout-btn { 
    width: 100%; padding: 10px; margin-top: 4px; background: rgba(255,255,255,0.1); 
    color: white; border: none; border-radius: 10px; cursor: pointer; font-weight: 600; font-size: 13px;
}
#logout-btn:hover { background: rgba(255,255,255,0.2); }

#ctx-menu {
    position: absolute; z-index: 2147483648; background: rgba(40, 40, 45, 0.95); backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.15); border-radius: 12px; padding: 6px; 
    display: none; box-shadow: 0 10px 30px rgba(0,0,0,0.4); pointer-events: auto; min-width: 120px;
}
#btn-delete { 
    padding: 10px 12px; color: #ff5b5b; cursor: pointer; border-radius: 8px; font-size: 14px; font-weight: 500; 
    display: flex; align-items: center; gap: 8px; transition: background 0.2s;
}
#btn-delete:hover { background: rgba(255, 60, 60, 0.15); }

/* --- ANIMATED TOAST --- */
#toast {
    position: fixed; top: 120px; left: 50%; transform: translateX(-50%) translateY(20px);
    background: rgba(30, 30, 35, 0.95); color: white; padding: 16px 28px; border-radius: 50px; 
    font-weight: 600; font-size: 16px; box-shadow: 0 15px 40px rgba(0,0,0,0.3);
    opacity: 0; pointer-events: none; z-index: 2147483649;
    display: flex; align-items: center; gap: 12px;
    border: 1px solid rgba(255,255,255,0.1);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
#toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }

.checkmark-wrapper { width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; }
.checkmark { width: 28px; height: 28px; border-radius: 50%; display: block; stroke-width: 3; stroke: #fff; stroke-miterlimit: 10; box-shadow: inset 0px 0px 0px var(--success-green); animation: none; }
.checkmark__circle { stroke-dasharray: 166; stroke-dashoffset: 166; stroke-width: 3; stroke-miterlimit: 10; stroke: var(--success-green); fill: none; animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards; }
.checkmark__check { transform-origin: 50% 50%; stroke-dasharray: 48; stroke-dashoffset: 48; animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.4s forwards; }

@keyframes stroke { 100% { stroke-dashoffset: 0; } }

/* --- THEME TOGGLE & DARK MODE --- */
.user-row { display: flex; align-items: center; justify-content: center; gap: 12px; width: 100%; }

.theme-switch { position: relative; display: inline-block; width: 50px; height: 26px; flex-shrink: 0; }
.theme-switch input { opacity: 0; width: 0; height: 0; }


.slider {
    position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0;
    background-color: #e4e4e4; 
    transition: background-color 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); 
    border-radius: 34px;
    display: flex; align-items: center; justify-content: space-between; padding: 6px;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
}

input:checked + .slider { background-color: #333; }

/* Icons inside slider */
.icon-sun, .icon-moon { 
    width: 14px; height: 14px; z-index: 1; 
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); 
}

/* Light Mode (Checked=False) */
.icon-sun { color: #f59e0b; opacity: 1; transform: scale(1.3); }
.icon-moon { color: #9ca3af; opacity: 0.5; transform: scale(0.9); }

/* Dark Mode (Checked=True) */
input:checked + .slider .icon-sun { opacity: 0.5; transform: scale(0.9); color: #9ca3af; }
input:checked + .slider .icon-moon { opacity: 1; transform: scale(1.3); color: white; }




/* Dark Mode Overrides */
.dark-mode {
    --glass-bg: linear-gradient(135deg, rgba(30, 30, 35, 0.65) 0%, rgba(20, 20, 25, 0.75) 100%) !important;
    --glass-border: rgba(255, 255, 255, 0.08) !important;
}
.dark-mode #dock-menu {
    background: rgba(20, 20, 25, 0.95) !important;
    border-color: rgba(255,255,255,0.08) !important;
}
.dark-mode .user-row #user-email {
    background: rgba(255,255,255,0.05); color: #e5e5e5;
}
.dark-mode #dock-menu h3 { color: #f3f4f6; }
.dark-mode #dock-menu input { background: rgba(0, 0, 0, 0.2); border-color: rgba(255,255,255,0.1); color: white; }
.dark-mode #google-btn { background: #2d2d33; color: white; }
.dark-mode #google-btn:hover { background: rgba(47, 44, 44, 0.1); }


/* --- NEW TUTORIAL STYLES --- */
#tutorial-popup {
    position: fixed;
    /* Anchored to the dock (center-bottom) then moved up and right */
    bottom: 50%; left: 50%;
    /* transform: translate(X, Y). 
       X: Move right to clear dock (approx 260px). 
       Y: 60px moves it DOWN from the 50% mark, keeping it closer to the dock at 43% bottom. 
    */
    transform: translate(calc(-50% + 260px), 60px) scale(0.9);
    width: 320px; /* Smaller width */
    
    /* Light Glassmorphism */
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(24px) saturate(180%);
    -webkit-backdrop-filter: blur(24px) saturate(180%);
    
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 20px;
    padding: 20px;
    color: #1a1a1a; /* Dark Text */
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px;
    box-shadow: 0 40px 80px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.9);
    z-index: 2147483650;
    opacity: 0; pointer-events: none;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
#tutorial-popup.active {
    opacity: 1; pointer-events: auto;
    /* Active: 80px is slightly lower/settled look */
    transform: translate(calc(-50% + 260px), 80px) scale(1);
}

/* Content Area */
.tut-content-wrapper { width: 100%; text-align: center; height: 120px; }
#tut-title { margin: 0 0 8px 0; font-size: 20px; font-weight: 700; color: #000; letter-spacing: -0.02em; }
#tut-desc { margin: 0 0 16px 0; font-size: 14px; color: rgba(0,0,0,0.6); line-height: 1.4; }

.tut-step-content { display: none; margin-top: 10px; animation: fadeIn 0.3s ease; }
.tut-step-content.active { display: block; }
.tut-step-content ul { text-align: left; padding-left: 20px; color: rgba(0,0,0,0.8); font-size: 13px; line-height: 1.6; }
.tut-step-content p { font-size: 13px; margin-bottom: 4px; color: rgba(0,0,0,0.8); line-height: 1.5; }
.tut-step-content li { margin-bottom: 6px; }

/* Progress Indicator */
.tut-progress-container {
    position: relative;
    display: inline-flex; /* Shrink to fit content */
    align-items: center; justify-content: center;
    margin-bottom: 16px; /* Increased margin for spacing */
}
.tut-track-dots {
    display: flex; gap: 24px; /* Matches gap-6 */
    position: relative; z-index: 10;
}
.tut-dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: rgba(0, 0, 0, 0.15); /* Darker dots on light bg */
    transition: background 0.3s;
}
.tut-dot.active-dot { background: white; }

/* Green Pill Overlay */
.tut-active-pill {
    position: absolute;
    left: -8px; top: 50%; transform: translateY(-50%);
    height: 24px; /* Matches width of step 1 for perfect circle */
    background: #22c55e; /* green-500 */
    border-radius: 999px;
    width: 24px; /* Start Step 1 */
    transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); /* Spring-like */
    z-index: 5;
}

/* Buttons */
.tut-buttons {
    display: flex; align-items: center; justify-content: space-between;
    width: 100%; max-width: 320px; height: 48px; position: relative;
}

#tut-back-btn {
    background: rgba(0,0,0,0.05); color: #333;
    border: none; border-radius: 999px; font-weight: 600; font-size: 14px;
    cursor: pointer; padding: 0 20px; height: 100%;
    position: absolute; left: 0;
    opacity: 0; transform: scale(0.8); pointer-events: none;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    width: 80px;
}
#tut-back-btn:hover { background: rgba(0,0,0,0.1); }
#tut-back-btn.show { opacity: 1; transform: scale(1); pointer-events: auto; }

#tut-next-btn {
    background: #006cff; color: white;
    border: none; border-radius: 999px; font-weight: 600; font-size: 14px;
    cursor: pointer; height: 100%;
    display: flex; align-items: center; justify-content: center; gap: 8px;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    margin-left: auto; width: 100%; /* Initially full width when no back button */
}
#tut-next-btn:active { transform: scale(0.96); }
#tut-next-btn.shrink { width: 220px; } /* Shrink when back button shows */

#tut-check-icon {
    display: none; animation: popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
#tut-check-icon svg { width: 16px; height: 16px; }

@keyframes popIn { from { transform: scale(0); } to { transform: scale(1); } }
@keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }


`;

// --- STATE ---
let dockHost = null;
let userSession = null;
let isSignUpMode = false;
let activeContextMenuId = null;
let draggedItem = null;
let tutStep = 1; /* Tutorial Step State */

// --- LISTENERS ---
chrome.runtime.onMessage.addListener((request) => {
    if (request.action === "toggle") toggleDock();
    if (request.action === "quick_save") quickSaveLink();
});

document.addEventListener('click', (e) => {
    if (dockHost && dockHost.shadowRoot) {
        const shadow = dockHost.shadowRoot;
        const path = e.composedPath();

        // Context Menu Closing Logic
        const ctxMenu = shadow.getElementById('ctx-menu');
        if (ctxMenu && ctxMenu.style.display === 'block' && !path.includes(ctxMenu)) {
            ctxMenu.style.display = 'none';
        }

        const menu = shadow.getElementById('dock-menu');
        const settings = shadow.getElementById('settings-icon');
        if (menu && menu.style.display === 'block' && !path.includes(menu) && !path.includes(settings))
            menu.style.display = 'none';

        const dock = shadow.getElementById('dock-container');
        const tut = shadow.getElementById('tutorial-popup');

        if (dock && dock.classList.contains('active') && !path.includes(dock) && !path.includes(ctxMenu) && !path.includes(tut)) {
            dock.classList.remove('active');
            dockHost.style.pointerEvents = "none";
        }
    }
});

// --- HELPER: JWT DECODER ---
function isTokenExpired(token) {
    if (!token) return true;
    try {
        // Decode the payload of the JWT (the middle part)
        const payload = JSON.parse(atob(token.split('.')[1]));
        const expiry = payload.exp * 1000; // Convert to milliseconds
        const now = Date.now();

        // Return true if it expires in less than 5 minutes (buffer time)
        return now > (expiry - 5 * 60 * 1000);
    } catch (e) {
        return true; // If we can't read it, assume it's expired
    }
}

// --- HELPER: API (Proactive Refresh) ---
async function supabaseCall(endpoint, method, body = null, token = null, customHeaders = {}) {

    // 1. Check if token is expired BEFORE we send the request
    if (userSession && userSession.refresh_token && isTokenExpired(userSession.access_token)) {
        console.log("Token is expiring soon. Refreshing proactively...");

        try {
            const newSession = await new Promise((resolve) => {
                chrome.runtime.sendMessage({
                    action: "REFRESH_SESSION",
                    refresh_token: userSession.refresh_token
                }, (response) => resolve(response && response.success ? response.data : null));
            });

            if (newSession) {
                console.log("Token refreshed!");
                userSession = newSession;
                chrome.storage.local.set({ sb_session: newSession });
                token = newSession.access_token; // Use the new token for this request
            } else {
                console.log("Refresh failed. User must sign in.");
                handleLogout(dockHost.shadowRoot);
                throw new Error("Session expired");
            }
        } catch (e) {
            console.error("Auto-refresh failed:", e);
        }
    }

    // 2. Perform Request (Now using a fresh token if needed)
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({
            action: "SUPABASE_REQ",
            payload: { endpoint, method, body, token: token, headers: customHeaders }
        }, (response) => {
            if (chrome.runtime.lastError) return reject(new Error("Extension error"));
            if (response && response.success) resolve(response.data);
            else reject(new Error(response ? response.error : "Unknown Error"));
        });
    });
}

// --- INIT ---
async function initDock() {
    const existing = document.getElementById("linkflow-dock-host");
    if (existing) { if (!existing.shadowRoot) existing.remove(); else { dockHost = existing; return; } }

    dockHost = document.createElement('div');
    dockHost.id = "linkflow-dock-host";
    dockHost.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:2147483647;";
    document.body.appendChild(dockHost);

    const shadow = dockHost.attachShadow({ mode: 'open' });
    if (window.trustedTypes && window.trustedTypes.createPolicy) {
        try {
            const policy = window.trustedTypes.createPolicy('linkflow-policy', { createHTML: (s) => s });
            shadow.innerHTML = policy.createHTML(`<style>${UI_CSS}</style>${UI_HTML}`);
        } catch (e) { shadow.innerHTML = `<style>${UI_CSS}</style>${UI_HTML}`; }
    } else { shadow.innerHTML = `<style>${UI_CSS}</style>${UI_HTML}`; }

    setupUI(shadow);
    await checkSession(shadow);
    loadTheme(shadow); // Load theme initially
}

function setupUI(shadow) {
    const addListener = (id, event, handler) => {
        const el = shadow.getElementById(id);
        if (el) el.addEventListener(event, handler);
    };

    addListener('settings-icon', 'click', () => {
        const menu = shadow.getElementById('dock-menu');
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    // GOOGLE AUTH LISTENER
    addListener('google-btn', 'click', () => {
        const errorMsg = shadow.getElementById('error-msg');
        errorMsg.innerText = "Connecting to Google...";
        errorMsg.style.color = "white";

        chrome.runtime.sendMessage({ action: "GOOGLE_AUTH" }, (response) => {
            if (response && response.success) {
                userSession = response.data;
                chrome.storage.local.set({ sb_session: response.data });
                updateMenuState(shadow);

                // Fetch theme from cloud after Google login
                fetchThemeFromCloud(shadow);
            } else {
                errorMsg.innerText = response.error || "Google Sign-in failed";
                errorMsg.style.color = "#ff5b5b";
            }
        });
    });

    addListener('toggle-auth-btn', 'click', () => toggleAuthMode(shadow));
    addListener('auth-btn', 'click', () => handleAuth(shadow));
    addListener('logout-btn', 'click', () => handleLogout(shadow));

    // Theme Toggle Listener
    addListener('theme-toggle', 'change', (e) => setTheme(shadow, e.target.checked));

    // --- FIXED DELETE HANDLER ---
    addListener('btn-delete', 'click', async (e) => {
        e.stopPropagation();

        if (activeContextMenuId) {
            const ctxMenu = shadow.getElementById('ctx-menu');
            if (ctxMenu) ctxMenu.style.display = 'none';

            await deleteBookmark(activeContextMenuId);
            loadBookmarks(shadow);
        } else {
            // silenced console.error
        }
    });

    // --- TUTORIAL LISTENERS ---
    addListener('tut-next-btn', 'click', () => nextTutorialStep(shadow));
    addListener('tut-back-btn', 'click', () => prevTutorialStep(shadow));



    // Horizontal Scroll Support
    const dockIcons = shadow.getElementById('dock-icons');
    if (dockIcons) {
        dockIcons.addEventListener('wheel', (e) => {
            // Convert vertical scroll to horizontal scroll
            if (e.deltaY !== 0) {
                e.preventDefault();
                dockIcons.scrollLeft += e.deltaY;
            }
        }, { passive: false });
    }
}

async function toggleDock() {
    await initDock();
    const shadow = dockHost.shadowRoot;
    const dock = shadow.getElementById('dock-container');
    const menu = shadow.getElementById('dock-menu'); // Get the menu element

    if (!dock) return;

    if (dock.classList.contains('active')) {
        // --- CLOSING THE DOCK ---
        dock.classList.remove('active');
        dockHost.style.pointerEvents = "none";

        // FIX: Hide the menu immediately when closing the dock
        if (menu) menu.style.display = 'none';



    } else {
        // --- OPENING THE DOCK ---
        dock.classList.add('active');
        dockHost.style.pointerEvents = "auto";

        // FIX: Ensure menu starts closed when opening (Double safety)
        if (menu) menu.style.display = 'none';

        if (userSession) loadBookmarks(dockHost.shadowRoot);

        // Check for Tutorial
        chrome.storage.local.get(['tutorial_shown'], (res) => {
            if (!res.tutorial_shown) {
                setTimeout(() => {
                    const tut = shadow.getElementById('tutorial-popup');
                    if (tut) {
                        tut.classList.add('active');
                        tutStep = 1;
                        updateTutorialUI(shadow);
                    }
                }, 800);
            }
        });
    }
}

// --- AUTH ---
function toggleAuthMode(shadow) {
    isSignUpMode = !isSignUpMode;
    shadow.getElementById('auth-title').innerText = isSignUpMode ? "Sign Up" : "Sign In";
    shadow.getElementById('auth-btn').innerText = isSignUpMode ? "Sign Up" : "Sign In";
    shadow.getElementById('toggle-auth-btn').innerText = isSignUpMode ? "Have an account? Sign In" : "Need an account? Sign Up";
}

async function handleAuth(shadow) {
    const email = shadow.getElementById('email').value;
    const password = shadow.getElementById('password').value;
    const errorMsg = shadow.getElementById('error-msg');

    errorMsg.innerText = "Loading...";
    errorMsg.style.color = "white";

    try {
        let data;
        if (isSignUpMode) {
            data = await supabaseCall('/auth/v1/signup', 'POST', { email, password });

            if (!data.access_token && data.user) {
                // --- NEW UX MESSAGE STARTS HERE ---
                errorMsg.innerHTML = `
                    Confirmation sent to <b>${email}</b>.<br>
                    <span style="font-size:11px; opacity:0.8; display:block; margin-top:4px;">
                        Check Spam/Promotions.<br>
                        (May take 1-2 mins for new accounts)
                    </span>
                `;
                errorMsg.style.color = "#4bb71b"; // Green
                errorMsg.style.lineHeight = "1.4";

                // We COMMENT OUT this line so they stay on the screen and read the message
                // toggleAuthMode(shadow); 

                return;
                // --- NEW UX MESSAGE ENDS HERE ---
            }
        } else {
            data = await supabaseCall('/auth/v1/token?grant_type=password', 'POST', { email, password });
        }

        if (data.error) throw new Error(data.error_description || "Authentication failed");
        if (!data.access_token) throw new Error("Invalid credentials or email not verified.");

        userSession = data;
        chrome.storage.local.set({ sb_session: data });
        updateMenuState(shadow);

        // Fetch theme from cloud after email/pass login
        fetchThemeFromCloud(shadow);

    } catch (err) {
        errorMsg.innerText = err.message;
        errorMsg.style.color = "#ff5b5b";
    }
}

async function checkSession(shadow) {
    return new Promise((resolve) => {
        chrome.storage.local.get(['sb_session'], (result) => {
            if (result.sb_session?.access_token) {
                userSession = result.sb_session;
                // If we have a session on load, fetch the theme
                fetchThemeFromCloud(shadow);
            }
            updateMenuState(shadow); resolve();
        });
    });
}

function updateMenuState(shadow) {
    if (userSession) {
        shadow.getElementById('auth-section').style.display = 'none';
        shadow.getElementById('user-section').style.display = 'flex';
        shadow.getElementById('user-email').innerText = userSession.user.email;
        loadBookmarks(shadow);
    } else {
        shadow.getElementById('auth-section').style.display = 'block';
        shadow.getElementById('user-section').style.display = 'none';
    }
}

function handleLogout(shadow) {
    userSession = null; chrome.storage.local.remove('sb_session');
    updateMenuState(shadow); shadow.getElementById('dock-icons').innerHTML = '';
    // Reset to default (light) or keep local preference? Usually safe to keep local.
}

// --- THEME SYNC LOGIC ---

// 1. Save to Cloud (Upsert)
async function saveThemeToCloud(isDark) {
    if (!userSession) return;
    try {
        const themeValue = isDark ? 'dark' : 'light';
        // Needs "Prefer: resolution=merge-duplicates" header for Upsert to work on ID conflict
        const headers = { "Prefer": "resolution=merge-duplicates" };

        await supabaseCall('/rest/v1/profiles', 'POST', {
            id: userSession.user.id,
            theme: themeValue
        }, userSession.access_token, headers);

    } catch (err) { }
}

// 2. Fetch from Cloud
async function fetchThemeFromCloud(shadow) {
    if (!userSession) return;
    try {
        const data = await supabaseCall(`/rest/v1/profiles?id=eq.${userSession.user.id}&select=theme`, 'GET', null, userSession.access_token);

        if (data && data.length > 0) {
            const cloudTheme = data[0].theme;
            const isDark = cloudTheme === 'dark';

            // Update UI and Local Storage to match Cloud
            const toggle = shadow.getElementById('theme-toggle');
            if (toggle) toggle.checked = isDark;

            setTheme(shadow, isDark, false); // false = don't save back to cloud (loop prevention)
        }
    } catch (err) { }
}

// 3. Set Theme (UI + Local + Cloud)
function setTheme(shadow, isDark, saveToDb = true) {
    const dock = shadow.getElementById('dock-container');
    if (!dock) return;

    if (isDark) {
        dock.classList.add('dark-mode');
        chrome.storage.local.set({ theme: 'dark' });
    } else {
        dock.classList.remove('dark-mode');
        chrome.storage.local.set({ theme: 'light' });
    }

    // Only save to DB if user manually toggled it (not when fetching from DB)
    if (saveToDb && userSession) {
        saveThemeToCloud(isDark);
    }
}

// 4. Load from Local Storage (Instant load)
function loadTheme(shadow) {
    chrome.storage.local.get(['theme'], (result) => {
        const isDark = result.theme === 'dark';
        const toggle = shadow.getElementById('theme-toggle');
        if (toggle) toggle.checked = isDark;

        // Pass false so we don't spam the DB on every page load
        setTheme(shadow, isDark, false);
    });
}


// --- NEW TUTORIAL FNS ---
function nextTutorialStep(shadow) {
    if (tutStep < 3) {
        tutStep++;
        updateTutorialUI(shadow);
    } else {
        // FINISH
        const tut = shadow.getElementById('tutorial-popup');
        if (tut) tut.classList.remove('active');
        chrome.storage.local.set({ tutorial_shown: true });
    }
}

function prevTutorialStep(shadow) {
    if (tutStep > 1) {
        tutStep--;
        updateTutorialUI(shadow);
    }
}

function updateTutorialUI(shadow) {
    // 1. Progress Pill Width
    const pill = shadow.querySelector('.tut-active-pill');
    if (pill) {
        // Precise widths based on 8px dot, 24px gap, and 8px padding
        if (tutStep === 1) pill.style.width = '24px';
        else if (tutStep === 2) pill.style.width = '56px';
        else if (tutStep === 3) pill.style.width = '88px';
    }

    // 2. Dots Active Class
    const dots = shadow.querySelectorAll('.tut-dot');
    dots.forEach(d => {
        const idx = parseInt(d.dataset.index);
        // In the design, the pill covers active dots, but we set them to white
        // underneath just in case or for z-index layering if needed.
        if (idx <= tutStep) d.classList.add('active-dot');
        else d.classList.remove('active-dot');
    });

    // 3. Content Visibility
    const steps = shadow.querySelectorAll('.tut-step-content');
    steps.forEach(s => {
        if (parseInt(s.dataset.step) === tutStep) s.classList.add('active');
        else s.classList.remove('active');
    });

    // 4. Buttons State
    const backBtn = shadow.getElementById('tut-back-btn');
    const nextBtn = shadow.getElementById('tut-next-btn');
    const btnText = shadow.getElementById('tut-btn-text');
    const checkIcon = shadow.getElementById('tut-check-icon');

    if (tutStep === 1) {
        backBtn.classList.remove('show');
        nextBtn.classList.remove('shrink');
        btnText.innerText = "Continue";
        checkIcon.style.display = 'none';
    } else {
        backBtn.classList.add('show');
        nextBtn.classList.add('shrink');

        if (tutStep === 3) {
            btnText.innerText = "Finish";
            checkIcon.style.display = 'block';
        } else {
            btnText.innerText = "Continue";
            checkIcon.style.display = 'none';
        }
    }
}


// --- DATA ---
async function quickSaveLink() {
    await initDock();
    const shadow = dockHost.shadowRoot;

    if (!userSession) {
        const dock = shadow.getElementById('dock-container');
        const menu = shadow.getElementById('dock-menu');
        const errorMsg = shadow.getElementById('error-msg');
        const emailInput = shadow.getElementById('email');

        if (!dock.classList.contains('active')) {
            dock.classList.add('active');
            dockHost.style.pointerEvents = "auto";
        }
        menu.style.display = 'block';
        errorMsg.innerText = "Sign in to QuickDock to save tabs"; // Updated Name
        errorMsg.style.color = "#ff5b5b";
        if (emailInput) emailInput.focus();
        return;
    }

    const toast = shadow.getElementById('toast');
    const checkmark = toast.querySelector('.checkmark');
    const newCheckmark = checkmark.cloneNode(true);
    checkmark.parentNode.replaceChild(newCheckmark, checkmark);

    toast.classList.add('show');
    try {
        await saveCurrentTab(shadow);
    } finally {
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2500);
    }
}

async function saveCurrentTab(shadow) {
    const title = document.title;
    const url = window.location.href;
    const icon = `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(url)}&size=128`;

    const bookmarks = await supabaseCall('/rest/v1/bookmarks?select=count', 'GET', null, userSession.access_token);
    const newIndex = bookmarks[0] ? bookmarks[0].count : 0;

    await supabaseCall('/rest/v1/bookmarks', 'POST', {
        title, url, icon_url: icon, user_id: userSession.user.id, order_index: newIndex
    }, userSession.access_token);
    loadBookmarks(shadow);
}

async function deleteBookmark(id) {
    if (!userSession) return;
    try {
        await supabaseCall(`/rest/v1/bookmarks?id=eq.${id}`, 'DELETE', null, userSession.access_token);
    } catch (err) {
        // silenced console.error
    }
}

// --- DRAG & DROP ---
async function saveNewOrder(shadow) {
    const container = shadow.getElementById('dock-icons');
    const icons = Array.from(container.children);
    const updates = icons.map((icon, index) => ({ id: icon.dataset.id, order_index: index }));
    try {
        await supabaseCall('/rpc/update_bookmark_order', 'POST', { payload: updates }, userSession.access_token);
    } catch (err) { /* silenced */ }
}

async function loadBookmarks(shadow) {
    if (!userSession) return;
    try {
        const bookmarks = await supabaseCall('/rest/v1/bookmarks?select=*&order=order_index.asc', 'GET', null, userSession.access_token);
        const container = shadow.getElementById('dock-icons');
        const ctxMenu = shadow.getElementById('ctx-menu');
        if (!container) return;
        container.innerHTML = '';

        if (!bookmarks || !Array.isArray(bookmarks)) return;

        bookmarks.forEach(bm => {
            const iconDiv = document.createElement('div');
            iconDiv.className = 'dock-item';
            iconDiv.title = bm.title || "Link";
            iconDiv.draggable = true;
            iconDiv.dataset.id = bm.id;

            const betterIconUrl = `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(bm.url)}&size=128`;
            iconDiv.innerHTML = `<img src="${betterIconUrl}" onerror="this.src='https://www.google.com/s2/favicons?domain=google.com'"/>`;

            // CLICK + DRAG LOGIC
            iconDiv.addEventListener('mousedown', (e) => {
                if (e.button !== 0) return; // Only left click

                // Prevent default drag to avoid conflicts
                e.preventDefault();

                // Initial state
                const startX = e.clientX;
                const startY = e.clientY;
                let hasMoved = false;

                const onMoveInit = (ev) => {
                    const dx = ev.clientX - startX;
                    const dy = ev.clientY - startY;
                    // Threshold of 5px to detect intentional drag
                    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
                        hasMoved = true;
                        cleanupInit();
                        startDrag(shadow, iconDiv, startX, startY);
                    }
                };

                const onUpInit = (ev) => {
                    cleanupInit();
                    // If we haven't moved, treat it as a click
                    if (!hasMoved) {
                        if (ev.button === 0) window.location.href = bm.url;
                    }
                };

                const cleanupInit = () => {
                    window.removeEventListener('mousemove', onMoveInit);
                    window.removeEventListener('mouseup', onUpInit);
                };

                window.addEventListener('mousemove', onMoveInit);
                window.addEventListener('mouseup', onUpInit);
            });

            iconDiv.addEventListener('auxclick', (e) => {
                if (e.button === 1) window.open(bm.url, '_blank');
            });

            /* 
             * Note: removed 'click' listener because we handle it in mouseup 
             * inside mousedown logic to disambiguate from drag.
             */

            iconDiv.addEventListener('contextmenu', (e) => {
                e.preventDefault(); e.stopPropagation();
                activeContextMenuId = bm.id;
                if (ctxMenu) {
                    ctxMenu.style.display = 'block';
                    ctxMenu.style.left = `${e.clientX}px`;
                    ctxMenu.style.top = `${e.clientY}px`;
                }
            });

            // MOUSE DOWN - Start Drag Logic
            iconDiv.addEventListener('mousedown', (e) => {
                if (e.button !== 0) return; // Only left click

                const startX = e.clientX;
                const startY = e.clientY;

                // Delay 150ms to distinguish click from drag
                const dragTimeout = setTimeout(() => {
                    startDrag(shadow, iconDiv, startX, startY);
                }, 150);

                const cancelClick = () => {
                    clearTimeout(dragTimeout);
                    iconDiv.removeEventListener('mouseup', cancelClick);
                    iconDiv.removeEventListener('mouseleave', cancelClick);
                };

                iconDiv.addEventListener('mouseup', cancelClick);
                iconDiv.addEventListener('mouseleave', cancelClick);
            });

            container.appendChild(iconDiv);
        });
    } catch (err) { }
}

// --- NEW DRAG & DROP SYSTEM (Pointer Events) ---
let dragClone = null;
let dragPlaceholder = null;
let dragOffsetX = 0;
let dragOffsetY = 0;
let isDragging = false;

function startDrag(shadow, item, startX, startY) {
    if (isDragging) return;
    isDragging = true;
    dragPlaceholder = item;

    const rect = item.getBoundingClientRect();
    dragOffsetX = startX - rect.left;
    dragOffsetY = startY - rect.top;

    // Create Clone
    dragClone = item.cloneNode(true);
    dragClone.classList.add('dragging-clone');
    dragClone.style.width = `${rect.width}px`;
    dragClone.style.height = `${rect.height}px`;
    dragClone.style.left = `${rect.left}px`;
    dragClone.style.top = `${rect.top}px`;

    // Append clone to dockHost (outside shadow to be safe, or inside shadow root)
    // Appending to shadow root ensures styles are applied correctly
    shadow.appendChild(dragClone);

    // Style placeholder
    item.classList.add('dragging-placeholder');

    // Add global listeners (Use window + capture to ensure we don't miss events)
    window.addEventListener('mousemove', onMouseMove, { capture: true });
    window.addEventListener('mouseup', onMouseUp, { capture: true });

    // Force Grabbing Cursor
    document.body.style.cursor = 'grabbing';
    const dockContainer = shadow.getElementById('dock-container');
    if (dockContainer) dockContainer.classList.add('grabbing-cursor');
    // Also set on shadow host if possible
    shadow.host.classList.add('grabbing-cursor');

    // Attach local references for the event handlers
    dragClone.dataset.originId = item.dataset.id;
}

function onMouseMove(e) {
    if (!isDragging || !dragClone) return;

    // 1. Move Clone (Instant follow)
    // Ensure no transition interferes with dragging
    dragClone.style.transition = 'none';

    // Calculate position relative to viewport (since fixed)
    const x = e.clientX - dragOffsetX;
    const y = e.clientY - dragOffsetY;

    dragClone.style.left = `${x}px`;
    dragClone.style.top = `${y}px`;

    // 2. Detect Swap (FLIP)
    const container = dragPlaceholder.parentElement;
    const siblings = Array.from(container.children).filter(c => c !== dragPlaceholder && c.classList.contains('dock-item'));

    // Find item under cursor (simple proximity check)
    // Since it's a horizontal list, we check X overlap
    const cloneCenter = x + dragClone.offsetWidth / 2;

    // Find strictly where it belongs
    // It belongs after the last item whose center is < cloneCenter
    const itemsBefore = siblings.filter(s => {
        const r = s.getBoundingClientRect();
        return (r.left + r.width / 2) < cloneCenter;
    });

    const lastBefore = itemsBefore[itemsBefore.length - 1];

    // Current position
    const currentPrev = dragPlaceholder.previousElementSibling;

    let shouldMove = false;
    let moveTarget = null;
    let movePos = null; // 'after' or 'before'

    if (lastBefore) {
        // We expect to be after 'lastBefore'
        if (lastBefore !== currentPrev) {
            shouldMove = true;
            moveTarget = lastBefore;
            movePos = 'after';
        }
    } else {
        // We expect to be at the start (before all)
        // If we are not already the first element (checking if prev is null or not a dock-item)
        const firstSibling = siblings[0];
        if (firstSibling && dragPlaceholder.nextElementSibling !== firstSibling) {
            shouldMove = true;
            moveTarget = firstSibling; // Insert before the first one
            movePos = 'before';
        }
    }

    if (shouldMove && moveTarget) {
        // FLIP: FIRST - Record positions BEFORE DOM change
        const allItems = Array.from(container.querySelectorAll('.dock-item'));
        const positions = new Map();
        allItems.forEach(el => positions.set(el, el.getBoundingClientRect()));

        // DOM Update
        if (movePos === 'after') {
            moveTarget.after(dragPlaceholder);
        } else {
            if (moveTarget) container.insertBefore(dragPlaceholder, moveTarget);
        }

        // FLIP: INVERT & PLAY
        allItems.forEach(el => {
            if (el === dragPlaceholder) return; // Don't animate placeholder

            const oldRect = positions.get(el);
            const newRect = el.getBoundingClientRect();

            if (oldRect && newRect) {
                const dx = oldRect.left - newRect.left;

                // Only animate if there moved significantly
                if (Math.abs(dx) > 1) {
                    // INVERT: Move back to old position instantly without animation
                    el.style.transition = 'none';
                    el.style.transform = `translateX(${dx}px)`;
                    el.classList.remove('flip-animate');

                    // Force Reflow
                    el.offsetHeight;

                    // PLAY: Animate to new position
                    requestAnimationFrame(() => {
                        // Restore transition
                        el.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
                        el.style.transform = '';
                    });
                }
            }
        });
    }
}

function onMouseUp(e) {
    if (!isDragging) return;
    isDragging = false;

    // Stop listening
    window.removeEventListener('mousemove', onMouseMove, { capture: true });
    window.removeEventListener('mouseup', onMouseUp, { capture: true });

    // Reset Cursor
    document.body.style.cursor = '';
    // We need to access the shadow root to remove the class
    if (dragPlaceholder) {
        const shadow = dragPlaceholder.getRootNode();
        if (shadow) {
            const dockContainer = shadow.getElementById('dock-container');
            if (dockContainer) dockContainer.classList.remove('grabbing-cursor');
            if (shadow.host) shadow.host.classList.remove('grabbing-cursor');
        }
    }

    // Animate clone into placeholder
    if (dragClone && dragPlaceholder) {
        const destRect = dragPlaceholder.getBoundingClientRect();

        dragClone.style.transition = 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
        dragClone.style.left = `${destRect.left}px`;
        dragClone.style.top = `${destRect.top}px`;
        dragClone.style.transform = 'scale(1)';

        setTimeout(() => {
            if (dragClone) dragClone.remove();
            if (dragPlaceholder) {
                dragPlaceholder.classList.remove('dragging-placeholder');
                // Clean styles
                dragPlaceholder.style.transform = '';
            }
            dragClone = null;
            dragPlaceholder = null;

            // Save state
            if (dockHost && dockHost.shadowRoot) saveNewOrder(dockHost.shadowRoot);
        }, 400);
    } else {
        // Fallback
        if (dragClone) dragClone.remove();
        if (dragPlaceholder) dragPlaceholder.classList.remove('dragging-placeholder');
        dragClone = null;
        dragPlaceholder = null;
    }
}