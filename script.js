/* ==========================================================================
   Cozy Lofi Reconnection Website — script.js v6
   ========================================================================== */

// =============================================================================
// PASSWORT-GATE
// ► Das Passwort hier ändern:
const SITE_PASSWORD = "SKY";      // ← DEIN PASSWORT
// =============================================================================

(function initPasswordGate() {
    const overlay   = document.getElementById("pw-overlay");
    const input     = document.getElementById("pw-input");
    const errorEl   = document.getElementById("pw-error");
    const form      = document.getElementById("pw-form");

    // Zuverlässige Prüfung über Form-Submit (unterstützt Button-Klick, Enter und mobile Go-Tasten)
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        checkPassword();
    });

    function checkPassword() {
        const entered = input.value.trim().toLowerCase();

        if (entered === SITE_PASSWORD.toLowerCase()) {
            // Richtig → Overlay sanft ausblenden
            overlay.classList.add("hidden");
            errorEl.classList.remove("visible");
            // Starte Musik automatisch mit einem zufälligen K-Pop Track
            playRandomTrack();
        } else {
            // Falsch → Shake + Fehlermeldung
            input.classList.remove("shake");
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    input.classList.add("shake");
                });
            });
            errorEl.classList.add("visible");
            input.value = "";
            input.focus();
            setTimeout(() => input.classList.remove("shake"), 500);
        }
    }

    // Fokus direkt auf das Eingabefeld
    setTimeout(() => input.focus(), 300);
})();

// ─── DATA STORE ───────────────────────────────────────────────────────────────

const answers = { vermisst: null, kontakt: null };

// ─── EMAILJS CONFIG ───────────────────────────────────────────────────────────
// ANLEITUNG: Ersetze diese Werte mit deinen echten EmailJS-Daten.
// Registriere dich kostenlos auf https://www.emailjs.com/
const EMAILJS_CONFIG = {
    publicKey:  "YOUR_PUBLIC_KEY",    // ← Deinen Public Key hier eintragen
    serviceId:  "YOUR_SERVICE_ID",    // ← Deine Service ID hier eintragen
    templateId: "YOUR_TEMPLATE_ID",   // ← Deine Template ID hier eintragen
    toEmail:    "saifanshino@gmail.com"
};

// =============================================================================
// FLOATING CHERRY BLOSSOM PETALS — Canvas Engine
// =============================================================================

const canvas = document.getElementById("petals-canvas");
const ctx    = canvas.getContext("2d");
let petals   = [];

function resizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class Petal {
    constructor(isBurst = false, originX = 0, originY = 0) {
        this.isBurst = isBurst;
        this.w = Math.random() * 8 + 6;
        this.h = this.w * (Math.random() * 0.4 + 0.8);

        if (isBurst) {
            this.x = originX;
            this.y = originY;
            const angle = Math.random() * Math.PI * 2;
            const force = Math.random() * 6 + 4;
            this.speedX = Math.cos(angle) * force;
            this.speedY = Math.sin(angle) * force;
        } else {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * -canvas.height - 20;
            this.speedX = Math.random() * 1.5 - 0.5;
            this.speedY = Math.random() * 1.2 + 0.8;
        }

        this.rotation      = Math.random() * 360;
        this.rotationSpeed = Math.random() * 2 - 1;
        this.swaySpeed     = Math.random() * 0.02 + 0.005;
        this.swayTime      = Math.random() * 100;
        this.opacity       = Math.random() * 0.5 + 0.4;
        this.hue           = Math.random() * 20 + 340;
    }

    update() {
        if (this.isBurst) {
            this.x += this.speedX;
            this.y += this.speedY;
            this.speedX *= 0.94;
            this.speedY *= 0.94;
            this.speedY += 0.05;
            this.opacity -= 0.012;
            this.rotation += this.rotationSpeed * 5;
        } else {
            this.y += this.speedY;
            this.swayTime += this.swaySpeed;
            this.x += this.speedX + Math.sin(this.swayTime) * 0.4;
            this.rotation += this.rotationSpeed;
        }
    }

    draw() {
        if (this.opacity <= 0) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.beginPath();
        ctx.ellipse(0, 0, this.w / 2, this.h / 2, 0, 0, Math.PI * 2);
        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, this.w);
        grad.addColorStop(0, `hsla(${this.hue}, 100%, 88%, ${this.opacity})`);
        grad.addColorStop(1, `hsla(${this.hue}, 95%, 75%, ${this.opacity * 0.6})`);
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.strokeStyle = `rgba(255,117,160,${this.opacity * 0.2})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
        ctx.restore();
    }
}

for (let i = 0; i < 45; i++) petals.push(new Petal());

function triggerFlowerBurst() {
    const ox = canvas.width / 2, oy = canvas.height / 2;
    for (let i = 0; i < 60; i++) petals.push(new Petal(true, ox, oy));
}

(function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = petals.length - 1; i >= 0; i--) {
        petals[i].update();
        petals[i].draw();
        if (petals[i].isBurst && petals[i].opacity <= 0) { petals.splice(i, 1); continue; }
        if (!petals[i].isBurst && (petals[i].y > canvas.height + 20 || petals[i].x < -20 || petals[i].x > canvas.width + 20)) {
            petals[i] = new Petal();
        }
    }
    requestAnimationFrame(animate);
})();

// =============================================================================
// K-POP MUSIC PLAYER (NATIVE HTML5 AUDIO PLAYER FOR LOCAL PLAYLIST)
// =============================================================================

// Famous K-Pop playlist with local files and visual styling colors
const KPOP_PLAYLIST = [
    { title: "Chk Chk Boom", artist: "Stray Kids", src: "assets/Chk Chk Boom.m4a", grad: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)" },
    { title: "Dynamite", artist: "BTS", src: "assets/Dynamite.m4a", grad: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)" },
    { title: "How You Like That", artist: "BLACKPINK", src: "assets/BLACKPINK.m4a", grad: "linear-gradient(135deg, #f43f5e 0%, #1e1b4b 100%)" },
    { title: "Left and Right", artist: "Charlie Puth & Jung Kook", src: "assets/Charlie Puth.m4a", grad: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)" },
    { title: "Lose My Breath", artist: "Stray Kids & Charlie Puth", src: "assets/Lose My Breath.m4a", grad: "linear-gradient(135deg, #fecfef 0%, #ff75a0 100%)" },
    { title: "K-Pop Megahit", artist: "BTS", src: "assets/BTS.m4a", grad: "linear-gradient(135deg, #a1c4fd 0%, #fda085 100%)" },
    { title: "Special Hit", artist: "EXO", src: "assets/EXO.m4a", grad: "linear-gradient(135deg, #ec4899 0%, #fbcfe8 100%)" }
];

let currentTrackIndex = 0;
let lastVolume = 50;
let isSeeking = false;

// DOM Elements
const musicController   = document.getElementById("music-controller");
const musicBtn          = document.getElementById("music-toggle-btn");
const playerPanel       = document.getElementById("kpop-player-panel");
const btnClosePlayer    = document.getElementById("btn-close-player");
const playerVinyl       = document.getElementById("player-vinyl");
const songTitleEl       = document.getElementById("player-song-title");
const songArtistEl      = document.getElementById("player-song-artist");
const ctrlPlay          = document.getElementById("ctrl-play");
const ctrlPrev          = document.getElementById("ctrl-prev");
const ctrlNext          = document.getElementById("ctrl-next");
const ctrlSkipBack      = document.getElementById("ctrl-skip-back");
const ctrlSkipForward   = document.getElementById("ctrl-skip-forward");
const trackSlider       = document.getElementById("track-slider");
const timeCurrentEl     = document.getElementById("time-current");
const timeTotalEl       = document.getElementById("time-total");
const volSlider         = document.getElementById("vol-slider");
const playlistTrigger   = document.getElementById("playlist-trigger");
const playlistMenu      = document.getElementById("playlist-menu");
const badge             = document.getElementById("player-status-badge");

// Initialize Native HTML5 Audio Object
const audioPlayer = new Audio();
audioPlayer.volume = lastVolume / 100;

// Set default source to first track in playlist
audioPlayer.src = KPOP_PLAYLIST[currentTrackIndex].src;

// Helper to format seconds to M:SS
function formatTime(secs) {
    if (isNaN(secs) || secs === Infinity) return "0:00";
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Sync Audio Player state events to UI
audioPlayer.addEventListener("play", () => {
    musicController.classList.add("playing");
    musicBtn.classList.add("playing");
    ctrlPlay.querySelector(".play-icon").classList.add("hidden");
    ctrlPlay.querySelector(".pause-icon").classList.remove("hidden");
    if (badge) badge.innerText = "K-Pop läuft... 💿";
});

audioPlayer.addEventListener("pause", () => {
    musicController.classList.remove("playing");
    musicBtn.classList.remove("playing");
    ctrlPlay.querySelector(".play-icon").classList.remove("hidden");
    ctrlPlay.querySelector(".pause-icon").classList.add("hidden");
    if (badge) badge.innerText = "Pausiert ⏸️";
});

audioPlayer.addEventListener("ended", () => {
    playNextTrack();
});

audioPlayer.addEventListener("error", (e) => {
    console.error("Local audio failed to load:", e);
    if (badge) badge.innerText = "Ladefehler 🍂";
});

// Update progress bar and time code display as music plays
audioPlayer.addEventListener("timeupdate", () => {
    if (!isSeeking) {
        const current = audioPlayer.currentTime;
        const duration = audioPlayer.duration || 0;
        if (duration > 0) {
            trackSlider.value = (current / duration) * 100;
        } else {
            trackSlider.value = 0;
        }
        timeCurrentEl.innerText = formatTime(current);
    }
});

// Sync duration when metadata/duration changes
audioPlayer.addEventListener("loadedmetadata", () => {
    timeTotalEl.innerText = formatTime(audioPlayer.duration || 0);
});
audioPlayer.addEventListener("durationchange", () => {
    timeTotalEl.innerText = formatTime(audioPlayer.duration || 0);
});

// Initialize UI layout on load
window.addEventListener("load", () => {
    buildPlaylistMenu();
    volSlider.value = lastVolume;
    if (badge) badge.innerText = "K-Pop bereit! 🌸";
});

// unified playback functions
function playMusic() {
    audioPlayer.play().then(() => {
        if (badge) badge.innerText = "K-Pop läuft... 💿";
    }).catch((err) => {
        console.warn("Autoplay blocked by browser. Awaiting user interaction.", err);
        if (badge) badge.innerText = "Klick Play zum Starten 👆";
    });
}

// 5 Seconds Skip backward / forward
ctrlSkipBack.addEventListener("click", () => {
    audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - 5);
    if (!isSeeking) {
        const duration = audioPlayer.duration || 0;
        if (duration > 0) {
            trackSlider.value = (audioPlayer.currentTime / duration) * 100;
        }
        timeCurrentEl.innerText = formatTime(audioPlayer.currentTime);
    }
});

ctrlSkipForward.addEventListener("click", () => {
    audioPlayer.currentTime = Math.min(audioPlayer.duration || 0, audioPlayer.currentTime + 5);
    if (!isSeeking) {
        const duration = audioPlayer.duration || 0;
        if (duration > 0) {
            trackSlider.value = (audioPlayer.currentTime / duration) * 100;
        }
        timeCurrentEl.innerText = formatTime(audioPlayer.currentTime);
    }
});

function pauseMusic() {
    audioPlayer.pause();
}

function togglePlay() {
    if (audioPlayer.paused) {
        playMusic();
    } else {
        pauseMusic();
    }
}

function playTrack(index) {
    if (index < 0 || index >= KPOP_PLAYLIST.length) return;
    currentTrackIndex = index;
    const track = KPOP_PLAYLIST[index];

    // Reset scrubber interface
    isSeeking = false;
    trackSlider.value = 0;
    timeCurrentEl.innerText = "0:00";
    timeTotalEl.innerText = "0:00";

    // Update Player Details
    songTitleEl.innerText = track.title;
    songArtistEl.innerText = track.artist;

    // Shift vinyl center cover gradient if vinyl exists
    if (playerVinyl) {
        const vinylCenter = playerVinyl.querySelector(".vinyl-center");
        if (vinylCenter) {
            vinylCenter.style.backgroundImage = track.grad;
        }
    }

    // Refresh playlist active state in dropdown
    const items = playlistMenu.querySelectorAll(".playlist-item");
    items.forEach((item, idx) => {
        if (idx === index) item.classList.add("active");
        else item.classList.remove("active");
    });

    // Load and play track
    audioPlayer.src = track.src;
    playMusic();
}

function playNextTrack() {
    let nextIdx = currentTrackIndex + 1;
    if (nextIdx >= KPOP_PLAYLIST.length) nextIdx = 0;
    playTrack(nextIdx);
}

function playPrevTrack() {
    let prevIdx = currentTrackIndex - 1;
    if (prevIdx < 0) prevIdx = KPOP_PLAYLIST.length - 1;
    playTrack(prevIdx);
}

function playRandomTrack() {
    const randomIdx = Math.floor(Math.random() * KPOP_PLAYLIST.length);
    playTrack(randomIdx);
}

// Event Listeners for UI
musicBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    playerPanel.classList.toggle("hidden");
    
    // Auto play if not already playing when opening the panel
    if (audioPlayer.paused) {
        playMusic();
    }
});

btnClosePlayer.addEventListener("click", (e) => {
    e.stopPropagation();
    playerPanel.classList.add("hidden");
});

// Prevent panel clicks from closing it or propagating to the body
playerPanel.addEventListener("click", (e) => {
    e.stopPropagation();
});

ctrlPlay.addEventListener("click", togglePlay);
ctrlPrev.addEventListener("click", playPrevTrack);
ctrlNext.addEventListener("click", playNextTrack);

// Volume Scrubbing
volSlider.addEventListener("input", (e) => {
    const vol = parseInt(e.target.value);
    lastVolume = vol;
    audioPlayer.volume = vol / 100;
});

// Track Progress Scrubber / Seekbar dragging
trackSlider.addEventListener("input", (e) => {
    isSeeking = true;
    const pct = parseFloat(e.target.value) / 100;
    const duration = audioPlayer.duration || 0;
    timeCurrentEl.innerText = formatTime(pct * duration);
});

trackSlider.addEventListener("change", (e) => {
    const pct = parseFloat(e.target.value) / 100;
    const duration = audioPlayer.duration || 0;
    audioPlayer.currentTime = pct * duration;
    isSeeking = false;
});

playlistTrigger.addEventListener("click", () => {
    playlistTrigger.classList.toggle("open");
    playlistMenu.classList.toggle("hidden");
});

function buildPlaylistMenu() {
    playlistMenu.innerHTML = "";
    KPOP_PLAYLIST.forEach((track, index) => {
        const li = document.createElement("li");
        li.className = `playlist-item ${index === currentTrackIndex ? 'active' : ''}`;
        li.innerHTML = `
            <span class="song-name">${track.title}</span>
            <span class="song-artist">${track.artist}</span>
        `;
        li.addEventListener("click", () => {
            playTrack(index);
            playlistMenu.classList.add("hidden");
            playlistTrigger.classList.remove("open");
        });
        playlistMenu.appendChild(li);
    });
}

// Global user interaction tracker for browser autoplay policy
document.body.addEventListener("click", () => {
    if (audioPlayer.paused) {
        playMusic();
    }
}, { once: true });

// =============================================================================
// PAGE TRANSITIONS
// =============================================================================

function goToPage(fromId, toId) {
    const from = document.getElementById(fromId);
    const to   = document.getElementById(toId);
    if (!from || !to) return;

    from.classList.add("fade-out");
    setTimeout(() => {
        from.classList.remove("active", "fade-out");
        to.classList.add("active");
        if (toId === "page-4") {
            document.getElementById("bg-final").style.opacity = "1";
        }
    }, 600);
}

// =============================================================================
// EVADING BUTTONS — Nein & Vielleicht
//
// Strategie:
//   1. "Ja" ist AUSSERHALB der button-area → wird nie angetastet
//   2. button-area hat overflow:hidden → physische Grenze
//   3. Positionen werden NUR mit area.clientWidth/clientHeight berechnet
// =============================================================================

const buttonArea  = document.getElementById("page-1-button-area");
const evadingBtns = document.querySelectorAll(".btn-evade"); // nur Nein + Vielleicht

window.addEventListener("load", () => {
    // Hole Größe der Area
    const areaW = buttonArea.clientWidth;   // z.B. 420
    const areaH = buttonArea.clientHeight;  // z.B. 100

    evadingBtns.forEach((btn, index) => {
        // Fixiere Größe bevor wir auf absolute umschalten
        const w = btn.offsetWidth;
        const h = btn.offsetHeight;
        btn.style.width    = w + "px";
        btn.style.height   = h + "px";
        btn.style.position = "absolute";
        btn.style.margin   = "0";
        btn.style.zIndex   = "5";
        btn.style.transition = "left 0.22s cubic-bezier(0.25, 0.8, 0.25, 1), top 0.22s cubic-bezier(0.25, 0.8, 0.25, 1)";

        // Startpositionen: Nein links, Vielleicht rechts — unten in der Box
        // So überlappen sie sich NIE beim Start
        const startY = areaH - h - 8;
        if (index === 0) {
            // Nein → linke Seite
            btn.style.left = "8px";
            btn.style.top  = startY + "px";
        } else {
            // Vielleicht → rechte Seite
            btn.style.left = (areaW - w - 8) + "px";
            btn.style.top  = startY + "px";
        }
    });
});

// Ausweichfunktion — berechnet NUR innerhalb der button-area
function moveButtonAway(btn) {
    const areaW = buttonArea.clientWidth;
    const areaH = buttonArea.clientHeight;
    const btnW  = btn.offsetWidth;
    const btnH  = btn.offsetHeight;

    // maxX/maxY garantieren: Button bleibt vollständig innerhalb
    const maxX = Math.max(0, areaW - btnW);
    const maxY = Math.max(0, areaH - btnH);

    btn.style.left = (Math.random() * maxX) + "px";
    btn.style.top  = (Math.random() * maxY) + "px";
}

// Event Listener für Desktop (hover) und Mobile (touch)
evadingBtns.forEach(btn => {
    btn.addEventListener("mouseenter", () => moveButtonAway(btn));
    btn.addEventListener("mousemove",  () => moveButtonAway(btn));
    btn.addEventListener("touchstart", (e) => {
        if (e.cancelable) {
            e.preventDefault();
        }
        moveButtonAway(btn);
    }, { passive: false });
});

// =============================================================================
// BUTTON CLICK ROUTING
// =============================================================================

// Page 1 — Ja
document.getElementById("btn-yes-1").addEventListener("click", () => {
    answers.vermisst = "Ja";
    playMusic();
    goToPage("page-1", "page-2");
});

// Page 2 — Weiter
document.getElementById("btn-next-2").addEventListener("click", () => {
    goToPage("page-2", "page-3");
});

// Page 3 — Okay
document.getElementById("btn-next-3").addEventListener("click", () => {
    goToPage("page-3", "page-4");
});

// Page 4 — Ja / Nein
document.getElementById("btn-yes-4").addEventListener("click", () => {
    answers.kontakt = "Ja";
    showPage4Response("Ja");
});
document.getElementById("btn-no-4").addEventListener("click", () => {
    answers.kontakt = "Nein";
    showPage4Response("Nein");
});

function showPage4Response(choice) {
    document.getElementById("decision-buttons").style.display = "none";
    const panel = document.getElementById("response-panel");
    panel.style.display = "flex";

    if (choice === "Ja") {
        document.getElementById("response-content-yes").style.display = "flex";
        triggerFlowerBurst();
    } else {
        document.getElementById("response-content-no").style.display = "flex";
    }
    sendResponses();
}

// =============================================================================
// EMAILJS — Antworten senden
// =============================================================================

function sendResponses() {
    const indicator = document.getElementById("status-indicator");

    // Noch nicht konfiguriert → Demo-Modus
    if (
        EMAILJS_CONFIG.publicKey  === "YOUR_PUBLIC_KEY"  ||
        EMAILJS_CONFIG.serviceId  === "YOUR_SERVICE_ID"  ||
        EMAILJS_CONFIG.templateId === "YOUR_TEMPLATE_ID"
    ) {
        console.warn("⚠️ EmailJS noch nicht konfiguriert. Demo-Modus.\nAntworten:", answers);
        setTimeout(() => {
            indicator.classList.add("success");
            indicator.querySelector(".status-text").innerText =
                "Antworten gespeichert! 🌸 (EmailJS bereit zum Einrichten)";
        }, 1500);
        return;
    }

    emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
    emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, {
        to_email:         EMAILJS_CONFIG.toEmail,
        vermisst_antwort: answers.vermisst,
        kontakt_antwort:  answers.kontakt,
        timestamp:        new Date().toLocaleString("de-DE")
    }).then(() => {
        indicator.classList.add("success");
        indicator.querySelector(".status-text").innerText = "Nachricht gesendet! 🌸";
    }).catch((err) => {
        console.error("EmailJS Fehler:", err);
        indicator.classList.add("error");
        indicator.querySelector(".status-text").innerText = "Senden fehlgeschlagen.";
    });
}
