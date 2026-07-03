:root {
  /* Colour tokens — drawn from the VIP FIVE brochure (navy panel, warm cream, gold accent) */
  --navy: #16283f;
  --navy-deep: #0f1c2e;
  --navy-soft: #24405f;
  --cream: #f7f3e9;
  --cream-deep: #efe8d6;
  --gold: #c6a15b;
  --gold-soft: #e4cfa0;
  --ink: #1c2530;
  --ink-soft: #55606d;
  --white: #ffffff;
  --success: #4c7a54;

  /* Type */
  --font-display: 'Poppins', 'Segoe UI', sans-serif;
  --font-body: 'Inter', 'Segoe UI', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;

  /* Layout */
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 28px;
  --shadow-soft: 0 12px 32px rgba(15, 28, 46, 0.12);
  --shadow-lift: 0 20px 48px rgba(15, 28, 46, 0.18);
  --max-width: 1180px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: var(--font-body);
  background: var(--cream);
  color: var(--ink);
  font-size: 17px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

h1, h2, h3, h4 {
  font-family: var(--font-display);
  color: var(--navy);
  margin: 0 0 0.4em;
  line-height: 1.15;
}

p {
  margin: 0 0 1em;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
  cursor: pointer;
}

img {
  max-width: 100%;
  display: block;
}

:focus-visible {
  outline: 3px solid var(--gold);
  outline-offset: 3px;
}

.page {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
}

.eyebrow {
  font-family: var(--font-mono);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-size: 0.78rem;
  color: var(--gold);
  font-weight: 500;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px 26px;
  border-radius: 999px;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1rem;
  border: none;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: var(--gold);
  color: var(--navy-deep);
  box-shadow: var(--shadow-soft);
}

.btn-primary:hover {
  box-shadow: var(--shadow-lift);
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--navy);
  color: var(--navy);
}

.btn-outline.on-dark {
  border-color: var(--gold-soft);
  color: var(--cream);
}

.card {
  background: var(--white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-soft);
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  font-family: var(--font-mono);
  background: var(--cream-deep);
  color: var(--navy);
}

.badge.done {
  background: #e4efe4;
  color: var(--success);
}

.container-narrow {
  max-width: 760px;
  margin: 0 auto;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 18px;
  text-align: left;
}

.form-field label {
  font-weight: 600;
  font-size: 0.92rem;
  color: var(--navy);
}

.form-field input,
.form-field select {
  padding: 12px 14px;
  border-radius: var(--radius-sm);
  border: 1.5px solid #d9d2bd;
  font-size: 1rem;
  font-family: var(--font-body);
  background: var(--white);
}

.form-field input:focus,
.form-field select:focus {
  border-color: var(--gold);
}

.error-banner {
  background: #fbeaea;
  border: 1.5px solid #e3b3b3;
  color: #7a2b2b;
  padding: 12px 16px;
  border-radius: var(--radius-sm);
  margin-bottom: 16px;
  font-size: 0.95rem;
}

/* --- Signature hero wheel (echoes the brochure's VIP FIVE circular motif) --- */
.wheel {
  position: relative;
  margin: 0 auto;
}

.wheel-hub {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 148px;
  height: 148px;
  border-radius: 50%;
  background: var(--navy);
  color: var(--cream);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 6px;
  padding: 10px;
  box-shadow: var(--shadow-lift);
}

.wheel-hub strong {
  font-family: var(--font-display);
  font-size: 1.05rem;
  line-height: 1.25;
}

.wheel-spoke {
  position: absolute;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 108px;
  text-align: center;
  background: var(--white);
  border-radius: var(--radius-md);
  padding: 14px 10px;
  box-shadow: var(--shadow-soft);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.wheel-spoke:hover,
.wheel-spoke:focus-visible {
  transform: translate(-50%, -50%) translateY(-4px);
  box-shadow: var(--shadow-lift);
}

.wheel-spoke-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--cream-deep);
  display: flex;
  align-items: center;
  justify-content: center;
}

.wheel-spoke-label {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.84rem;
  color: var(--navy);
}

@media (max-width: 760px) {
  .wheel {
    display: none;
  }
}

/* --- Layout helpers --- */
.hero {
  background: linear-gradient(180deg, var(--navy) 0%, var(--navy-deep) 100%);
  color: var(--cream);
  padding: 64px 0 88px;
  position: relative;
  overflow: hidden;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 48px;
  align-items: center;
}

@media (max-width: 760px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }
}

.hero h1 {
  color: var(--white);
  font-size: clamp(2.1rem, 4vw, 3rem);
  font-weight: 700;
}

.hero p.lede {
  color: var(--gold-soft);
  font-size: 1.15rem;
  max-width: 46ch;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin: 32px 0;
}

.category-card {
  padding: 26px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  border-top: 4px solid var(--gold);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.category-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lift);
}

.category-card-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: var(--cream-deep);
  display: flex;
  align-items: center;
  justify-content: center;
}

.category-card-footer {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 22px;
  margin: 28px 0;
}

.video-card {
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.video-thumb {
  aspect-ratio: 16 / 10;
  background: linear-gradient(135deg, var(--navy-soft), var(--navy));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold-soft);
  position: relative;
}

.video-thumb .play-badge {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(247, 243, 233, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--navy);
}

.video-thumb .duration-chip {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(15, 28, 46, 0.75);
  color: var(--cream);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  padding: 3px 9px;
  border-radius: 999px;
}

.video-card-body {
  padding: 18px 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.video-card-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: var(--ink-soft);
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--cream);
  border-bottom: 1px solid var(--cream-deep);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--navy);
  font-size: 1.05rem;
}

.navbar-links {
  display: flex;
  align-items: center;
  gap: 22px;
  font-weight: 600;
  font-size: 0.95rem;
}

.navbar-links a {
  color: var(--ink-soft);
}

.navbar-links a.active,
.navbar-links a:hover {
  color: var(--navy);
}

.footer {
  background: var(--navy-deep);
  color: var(--gold-soft);
  padding: 40px 0;
  margin-top: 60px;
  font-size: 0.92rem;
}

.stat-strip {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
  margin: 28px 0;
}

.stat-card {
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 14px;
}

.auth-shell {
  min-height: calc(100vh - 140px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
}

.auth-card {
  padding: 40px;
  width: 100%;
  max-width: 440px;
}

.trainer-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: var(--navy);
  font-weight: 600;
}
