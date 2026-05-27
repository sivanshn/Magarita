/* ==========================================================================
   Cozy Lofi / K-Pop Aesthetic Design System — v8 (Mobile Fix)
   ========================================================================== */

:root {
    --bg-dark: #0a0612;
    --bg-gradient-start: #0e0817;
    --bg-gradient-end: #170d27;
    --pink-glow: #ff75a0;
    --pink-light: #ffd3e2;
    --purple-glow: #b56bfa;
    --text-primary: #ffffff;
    --text-secondary: #d6c8e3;
    --card-bg: rgba(25, 15, 38, 0.45);
    --card-border: rgba(255, 117, 160, 0.12);
    --card-shadow: 0 16px 40px rgba(0,0,0,0.4), 0 0 40px rgba(181,107,250,0.1);
    --font-headers: 'Quicksand', sans-serif;
    --font-body: 'Nunito', sans-serif;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: var(--bg-dark);
    font-family: var(--font-body);
    color: var(--text-primary);
    -webkit-tap-highlight-color: transparent;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, var(--bg-gradient-start), var(--bg-gradient-end));
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
    position: relative;
}

@keyframes gradientShift {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

#petals-canvas {
    position: absolute; top: 0; left: 0;
    width: 100%; height: 100%;
    z-index: 1; pointer-events: none;
}

.glow-bg-orb {
    position: absolute; border-radius: 50%;
    filter: blur(100px); opacity: 0.15; z-index: 0; pointer-events: none;
    animation: floatOrb 20s infinite alternate ease-in-out;
}
.orb-1 { width: 300px; height: 300px; background-color: var(--pink-glow); top: 15%; left: 10%; }
.orb-2 { width: 400px; height: 400px; background-color: var(--purple-glow); bottom: 10%; right: 5%; animation-delay: -5s; }
.orb-3 { width: 250px; height: 250px; background-color: var(--pink-light); top: 60%; left: 50%; animation-delay: -10s; }

@keyframes floatOrb {
    0%   { transform: translate(0,0) scale(1); }
    100% { transform: translate(40px,40px) scale(1.15); }
}

.bg-final-image {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background-image: url('assets/bg_lofi.png');
    background-size: cover; background-position: center;
    z-index: 2; opacity: 0; pointer-events: none;
    transition: opacity 2s cubic-bezier(0.25, 1, 0.5, 1);
}
.bg-final-image::after {
    content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(to top, rgba(10,6,18,0.85) 20%, rgba(10,6,18,0.35) 100%);
}

/* ==========================================================================
   Music Controller & Expanded K-Pop Player
   ========================================================================== */

.music-controller {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 12px;
}

.music-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.12);
    padding: 10px 14px;
    border-radius: 50px;
    color: var(--text-primary);
    cursor: pointer;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}
.music-btn:hover {
    background: rgba(255,255,255,0.15);
    border-color: var(--pink-glow);
    box-shadow: 0 0 15px rgba(255,117,160,0.3);
}
.music-icon-container { display: flex; justify-content: center; align-items: center; }
.music-svg { transition: transform 0.5s ease; }
.music-btn.playing .music-svg { animation: rotateVinyl 4s linear infinite; color: var(--pink-glow); }
@keyframes rotateVinyl { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

.music-wave { display: flex; align-items: flex-end; gap: 2.5px; height: 14px; width: 16px; }
.wave-bar { width: 2px; height: 3px; background-color: var(--text-secondary); border-radius: 2px; transition: height 0.3s ease, background-color 0.3s ease; }
.playing .wave-bar { background-color: var(--pink-glow); animation: waveBounce 1.2s ease infinite alternate; }
.playing .wave-bar:nth-child(1) { animation-delay: 0.1s; }
.playing .wave-bar:nth-child(2) { animation-delay: 0.4s; height: 14px; }
.playing .wave-bar:nth-child(3) { animation-delay: 0.2s; }
.playing .wave-bar:nth-child(4) { animation-delay: 0.5s; }
@keyframes waveBounce { 0% { height: 3px; } 100% { height: 14px; } }

.kpop-player-panel {
    width: 280px;
    padding: 20px 18px;
    border-radius: 22px;
    background: rgba(18, 10, 28, 0.88);
    border: 1px solid rgba(255, 117, 160, 0.2);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.55), 0 0 30px rgba(255, 117, 160, 0.15);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    transition: opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1), transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), visibility 0.4s;
    transform-origin: top right;
    pointer-events: auto;
}

.kpop-player-panel.hidden {
    opacity: 0;
    visibility: hidden;
    transform: scale(0.9) translateY(-10px);
    pointer-events: none;
}

.player-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding-bottom: 8px;
}

.player-header h3 {
    font-family: var(--font-headers);
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--pink-light);
    margin: 0;
}

.btn-close-player {
    background: none;
    border: none;
    color: var(--text-secondary);
    font-size: 1.4rem;
    cursor: pointer;
    line-height: 1;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
}
.btn-close-player:hover { color: var(--pink-glow); }

.player-visual-area {
    position: relative;
    width: 100%;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 12px;
    background: rgba(0, 0, 0, 0.2);
}

.vinyl-container {
    position: relative;
    width: 110px;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.vinyl-glow {
    position: absolute;
    inset: -5px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,117,160,0.3) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.5s ease;
}
.playing .vinyl-glow {
    opacity: 1;
    animation: pulseGlow 2s infinite alternate;
}
@keyframes pulseGlow {
    0% { transform: scale(0.95); opacity: 0.2; }
    100% { transform: scale(1.15); opacity: 0.4; }
}

.vinyl {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: radial-gradient(circle, #333 20%, #111 60%, #000 100%);
    box-shadow: 0 4px 15px rgba(0,0,0,0.5), inset 0 0 1px 1px rgba(255,255,255,0.1);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid #1c1822;
}

.vinyl::before {
    content: '';
    position: absolute;
    inset: 12px;
    border-radius: 50%;
    border: 1px double rgba(255, 255, 255, 0.08);
    pointer-events: none;
}
.vinyl::after {
    content: '';
    position: absolute;
    inset: 24px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.04);
    pointer-events: none;
}

.vinyl-center {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    border: 2px solid #000;
    z-index: 2;
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
    background-image: linear-gradient(135deg, var(--pink-glow), var(--purple-glow));
    transition: background 0.5s ease;
}

.playing .vinyl { animation: rotateVinyl 8s linear infinite; }

.mv-screen-container {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: #000;
    z-index: 10;
    border-radius: 12px;
    border: 2px solid rgba(255,117,160,0.3);
    box-shadow: inset 0 0 20px rgba(0,0,0,0.8), 0 4px 10px rgba(0,0,0,0.5);
    overflow: hidden;
    transition: opacity 0.4s ease, transform 0.4s ease;
}

.mv-screen-container::after {
    content: " ";
    display: block;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    z-index: 12;
    background-size: 100% 3px, 6px 100%;
    pointer-events: none;
}

.song-details { width: 100%; text-align: center; }

.song-details .song-title {
    font-family: var(--font-headers);
    font-size: 1.05rem;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 4px;
}

.song-details .song-artist {
    font-size: 0.85rem;
    color: var(--text-secondary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.player-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
}

.ctrl-btn {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--text-secondary);
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease;
    padding: 0;
}
.ctrl-btn:hover {
    background: rgba(255, 117, 160, 0.15);
    border-color: var(--pink-glow);
    color: #fff;
    transform: scale(1.08);
}
.ctrl-btn:active { transform: scale(0.95); }

.btn-play-pause {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, var(--pink-glow), var(--purple-glow));
    color: #fff;
    border: none;
    box-shadow: 0 4px 10px rgba(255,117,160,0.3);
}
.btn-play-pause:hover { box-shadow: 0 6px 15px rgba(255,117,160,0.5); transform: scale(1.08); }
.btn-play-pause .hidden { display: none; }

.player-options {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    padding-top: 12px;
}

.volume-slider-container {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
}

.vol-icon { font-size: 0.9rem; }

.vol-slider {
    flex: 1;
    -webkit-appearance: none;
    appearance: none;
    height: 4px;
    border-radius: 2px;
    background: rgba(255, 255, 255, 0.15);
    outline: none;
    transition: background 0.3s;
    cursor: pointer;
    touch-action: none;
}
.vol-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--pink-glow);
    cursor: pointer;
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
    transition: transform 0.1s;
}
.vol-slider::-webkit-slider-thumb:hover { transform: scale(1.25); }

.playlist-dropdown { width: 100%; position: relative; }

.playlist-trigger {
    width: 100%;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: var(--text-secondary);
    padding: 8px 12px;
    border-radius: 10px;
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.2s;
}
.playlist-trigger:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.15);
}
.playlist-trigger .arrow { font-size: 0.65rem; transition: transform 0.3s ease; }
.playlist-trigger.open .arrow { transform: rotate(180deg); }

.playlist-menu {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 0;
    width: 100%;
    max-height: 180px;
    overflow-y: auto;
    background: rgba(15, 8, 25, 0.95);
    border: 1px solid rgba(255, 117, 160, 0.2);
    border-radius: 12px;
    box-shadow: 0 -8px 24px rgba(0,0,0,0.6);
    list-style: none;
    padding: 6px;
    z-index: 120;
    backdrop-filter: blur(10px);
}
.playlist-menu.hidden { display: none; }

.playlist-item {
    padding: 8px 10px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    flex-direction: column;
    gap: 2px;
    border-bottom: 1px solid rgba(255,255,255,0.03);
    text-align: left;
}
.playlist-item:last-child { border-bottom: none; }
.playlist-item:hover { background: rgba(255, 117, 160, 0.1); }
.playlist-item.active {
    background: rgba(255, 117, 160, 0.18);
    border: 1px solid rgba(255, 117, 160, 0.3);
}
.playlist-item .song-name { font-size: 0.8rem; font-weight: 700; color: #fff; }
.playlist-item.active .song-name { color: var(--pink-glow); }
.playlist-item .song-artist { font-size: 0.7rem; color: var(--text-secondary); }

.playlist-menu::-webkit-scrollbar { width: 4px; }
.playlist-menu::-webkit-scrollbar-track { background: transparent; }
.playlist-menu::-webkit-scrollbar-thumb { background: rgba(255, 117, 160, 0.3); border-radius: 2px; }
.playlist-menu::-webkit-scrollbar-thumb:hover { background: rgba(255, 117, 160, 0.5); }

/* ==========================================================================
   App Container & Pages
   ========================================================================== */

.app-container {
    width: 100%; height: 100%;
    display: flex; justify-content: center; align-items: center;
    position: relative; z-index: 10;
}

.card-section {
    position: absolute;
    width: 90%; max-width: 500px;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(30px) scale(0.95);
    transition: opacity 0.8s cubic-bezier(0.25,1,0.5,1), transform 0.8s cubic-bezier(0.25,1,0.5,1), visibility 0.8s;
    z-index: 5;
}
.card-section.active {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateY(0) scale(1);
    z-index: 10;
}
.card-section.fade-out {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(-30px) scale(0.95);
}

.glass-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    backdrop-filter: blur(25px) saturate(120%);
    -webkit-backdrop-filter: blur(25px) saturate(120%);
    border-radius: 28px;
    padding: 40px 30px;
    box-shadow: var(--card-shadow);
    display: flex; flex-direction: column; align-items: center; text-align: center;
    position: relative; overflow: visible;
}
.glass-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    border-radius: 28px; padding: 1px;
    background: linear-gradient(135deg, rgba(255,117,160,0.25), rgba(181,107,250,0.05), rgba(255,117,160,0.05), rgba(181,107,250,0.25));
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor; mask-composite: exclude;
    pointer-events: none; z-index: -1;
}

/* ==========================================================================
   Images & Typography
   ========================================================================== */

.image-wrapper {
    width: 210px; height: 210px; border-radius: 22px; overflow: hidden;
    margin-bottom: 22px;
    border: 2px solid rgba(255,117,160,0.2);
    box-shadow: 0 8px 30px rgba(0,0,0,0.3), 0 0 20px rgba(255,117,160,0.15);
    background-color: rgba(25,15,38,0.3);
}
.card-image { width: 100%; height: 100%; object-fit: cover; }

.card-title {
    font-family: var(--font-headers); font-size: 1.75rem; font-weight: 700;
    line-height: 1.35; margin-bottom: 28px; color: var(--text-primary);
}
.text-glow { text-shadow: 0 0 12px rgba(255,117,160,0.4), 0 0 24px rgba(181,107,250,0.2); }
.mb-large { margin-bottom: 35px; }
.justify-center { justify-content: center !important; }

.cherry-blossom-decoration {
    font-size: 2.2rem; margin-bottom: 15px;
    filter: drop-shadow(0 0 8px rgba(255,117,160,0.5));
}
.floating-flower { animation: floatItem 3s ease-in-out infinite alternate; }

/* ==========================================================================
   Button Base Styles
   ========================================================================== */

.button-container {
    width: 100%; display: flex; flex-wrap: wrap;
    gap: 15px; align-items: center; justify-content: space-between;
    position: relative;
}

.btn {
    font-family: var(--font-headers); font-size: 1rem; font-weight: 600;
    padding: 13px 26px; border-radius: 50px; cursor: pointer;
    border: none; display: inline-flex; align-items: center; justify-content: center;
    user-select: none; white-space: nowrap;
}

.btn-primary {
    background: linear-gradient(135deg, var(--pink-glow), var(--purple-glow));
    color: #fff;
    box-shadow: 0 6px 20px rgba(255,117,160,0.35);
    transition: transform 0.2s cubic-bezier(0.175,0.885,0.32,1.275), box-shadow 0.3s ease;
}
.btn-primary:hover { transform: translateY(-2px) scale(1.04); box-shadow: 0 8px 25px rgba(255,117,160,0.5), 0 0 15px rgba(181,107,250,0.3); }
.btn-primary:active { transform: translateY(1px) scale(0.98); }

.btn-glow { animation: buttonPulse 2s infinite; }
@keyframes buttonPulse {
    0%   { box-shadow: 0 6px 20px rgba(255,117,160,0.35); }
    50%  { box-shadow: 0 6px 25px rgba(255,117,160,0.65), 0 0 15px rgba(181,107,250,0.4); }
    100% { box-shadow: 0 6px 20px rgba(255,117,160,0.35); }
}

.btn-secondary {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    color: var(--text-secondary);
    transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease;
}
.btn-secondary:hover { background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.25); color: var(--text-primary); }

/* "Ja" Zeile — statisch, nie bewegt */
.yes-row {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    width: 100%;
}

/* ==========================================================================
   PAGE 1 — Button Area (Fluchtzone für Nein + Vielleicht)
   ========================================================================== */

.button-area {
    position: relative;
    width: 420px;
    height: 100px;
    overflow: hidden;
    border-radius: 14px;
    margin-bottom: 4px;
}

/* ==========================================================================
   Page 3: Emotional Message
   ========================================================================== */

.message-card { max-width: 520px; padding: 50px 40px; }

.emotional-message-content {
    display: flex; flex-direction: column; gap: 22px;
    margin-bottom: 35px; text-align: center;
}

.msg-para { font-size: 1.12rem; line-height: 1.7; color: var(--text-secondary); font-weight: 400; }
.msg-highlight {
    font-family: var(--font-headers); font-size: 1.3rem; font-weight: 700;
    color: #fff; padding: 5px 0;
    text-shadow: 0 0 10px rgba(255,117,160,0.5);
}

/* ==========================================================================
   Page 4: Response Panel
   ========================================================================== */

.response-panel {
    display: none; width: 100%; flex-direction: column; align-items: center; margin-top: 15px;
}
.response-content { display: none; flex-direction: column; align-items: center; }
.response-icon { font-size: 2.8rem; margin-bottom: 15px; animation: heartBeat 1.2s infinite; }
.response-message {
    font-family: var(--font-headers); font-size: 1.25rem; line-height: 1.5; font-weight: 600;
    color: #fff; margin-bottom: 25px; text-shadow: 0 0 8px rgba(255,117,160,0.3);
}

.status-indicator {
    display: flex; align-items: center; gap: 12px;
    background: rgba(255,255,255,0.04); padding: 10px 20px;
    border-radius: 30px; border: 1px solid rgba(255,255,255,0.08); margin-top: 10px;
}
.status-spinner {
    width: 16px; height: 16px;
    border: 2px solid rgba(255,255,255,0.2); border-top: 2px solid var(--pink-glow);
    border-radius: 50%; animation: rotateSpinner 0.8s linear infinite;
}
.status-text { font-size: 0.9rem; color: var(--text-secondary); font-weight: 500; }

.status-indicator.success { border-color: rgba(75,181,67,0.3); background: rgba(75,181,67,0.08); }
.status-indicator.success .status-spinner { display: none; }
.status-indicator.success .status-text { color: #4bb543; }
.status-indicator.error { border-color: rgba(255,75,75,0.3); background: rgba(255,75,75,0.08); }
.status-indicator.error .status-spinner { display: none; }
.status-indicator.error .status-text { color: #ff4b4b; }

@keyframes rotateSpinner { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

/* ==========================================================================
   Animations
   ========================================================================== */

.animate-float { animation: floatItem 4s ease-in-out infinite alternate; }
@keyframes floatItem { 0% { transform: translateY(0); } 100% { transform: translateY(-8px); } }

.animate-scale-up { animation: scaleUp 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards; }
@keyframes scaleUp { 0% { transform: scale(0.85); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }

.animate-fade-up { opacity: 0; transform: translateY(15px); animation: fadeUp 1s cubic-bezier(0.25,1,0.5,1) forwards; }
@keyframes fadeUp { 100% { opacity: 1; transform: translateY(0); } }

/* FIX: opacity: 0 als Startzustand + forwards damit der Button sichtbar bleibt */
.animate-fade-in { opacity: 0; animation: fadeIn 1s cubic-bezier(0.25,1,0.5,1) forwards; }
@keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }

@keyframes heartBeat {
    0%  { transform: scale(1); }
    14% { transform: scale(1.12); }
    28% { transform: scale(1); }
    42% { transform: scale(1.12); }
    70% { transform: scale(1); }
}

/* ==========================================================================
   Responsive — Mobile
   ========================================================================== */

@media (max-width: 480px) {
    .glass-card { padding: 28px 18px; border-radius: 22px; }

    .image-wrapper { width: 160px; height: 160px; margin-bottom: 18px; border-radius: 18px; }

    .card-title { font-size: 1.4rem; margin-bottom: 18px; }

    /* Mobile: Button-Area größer damit Buttons nicht aus der Card fallen */
    .button-area {
        width: 300px;
        height: 140px; /* war 100px — zu wenig Platz auf Mobile! */
    }

    .message-card { padding: 32px 18px; }
    .msg-para { font-size: 0.98rem; }
    .msg-highlight { font-size: 1.1rem; }
    .music-btn { padding: 8px 12px; }

    .btn { font-size: 0.92rem; padding: 11px 20px; }

    .ctrl-btn { width: 42px; height: 42px; }
    .btn-play-pause { width: 52px; height: 52px; }
    .player-controls { gap: 12px; }
    .vol-slider::-webkit-slider-thumb { width: 18px; height: 18px; }
    .vol-slider::-moz-range-thumb { width: 18px; height: 18px; }
}

/* ==========================================================================
   PASSWORD GATE
   ========================================================================== */

.pw-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #0e0817, #170d27);
    transition: opacity 0.7s ease, visibility 0.7s ease;
}

.pw-overlay.hidden {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
}

.pw-card {
    width: 90%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 36px 40px;
    animation: scaleUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

.pw-flower {
    font-size: 3rem;
    margin-bottom: 16px;
    filter: drop-shadow(0 0 12px rgba(255, 117, 160, 0.6));
    animation: floatItem 3s ease-in-out infinite alternate;
}

.pw-title {
    font-family: var(--font-headers);
    font-size: 1.6rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 8px;
    text-align: center;
}

.pw-hint {
    font-size: 0.95rem;
    color: var(--text-secondary);
    margin-bottom: 28px;
    text-align: center;
}

.pw-input-wrap {
    display: flex;
    gap: 10px;
    width: 100%;
    align-items: center;
}

.pw-input {
    flex: 1;
    min-width: 0;
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 117, 160, 0.25);
    border-radius: 50px;
    padding: 13px 20px;
    font-family: var(--font-body);
    font-size: 1rem;
    color: #fff;
    outline: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.pw-input::placeholder { color: rgba(255, 255, 255, 0.3); }

.pw-input:focus {
    border-color: var(--pink-glow);
    box-shadow: 0 0 12px rgba(255, 117, 160, 0.25);
}

.pw-input.shake {
    animation: shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97);
    border-color: #ff4b4b;
    box-shadow: 0 0 12px rgba(255, 75, 75, 0.3);
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%       { transform: translateX(-8px); }
    40%       { transform: translateX(8px); }
    60%       { transform: translateX(-5px); }
    80%       { transform: translateX(5px); }
}

.pw-submit-btn {
    flex-shrink: 0;
    white-space: nowrap;
    padding: 13px 22px;
}

.pw-error {
    margin-top: 14px;
    font-size: 0.9rem;
    color: #ff7070;
    opacity: 0;
    transition: opacity 0.3s ease;
    min-height: 20px;
}
.pw-error.visible { opacity: 1; }

@media (max-width: 480px) {
    .pw-card { padding: 36px 20px 30px; }
    .pw-input-wrap { flex-direction: column; }
    .pw-input, .pw-submit-btn { width: 100%; }
    .pw-title { font-size: 1.35rem; }
}
