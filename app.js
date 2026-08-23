const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// System metrics for the live telemetry widget
const startTime = Date.now();

app.get('/api/metrics', (req, res) => {
    const uptimeSec = Math.floor((Date.now() - startTime) / 1000);
    res.json({
        uptime: `${Math.floor(uptimeSec / 60)}m ${uptimeSec % 60}s`,
        status: 'Operational',
        nodeVersion: process.version,
        platform: process.platform
    });
});

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Musaib Shafique Sayyed — Cloud & DevOps Engineer</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
            <style>
                :root {
                    --bg: #090a0f;
                    --card-bg: #12151c;
                    --border: #1e2330;
                    --text-main: #f3f4f6;
                    --text-muted: #9ca3af;
                    --accent: #3b82f6;
                    --accent-glow: rgba(59, 130, 246, 0.15);
                    --green: #10b981;
                }

                * { box-sizing: border-box; margin: 0; padding: 0; }
                body {
                    background-color: var(--bg);
                    color: var(--text-main);
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    line-height: 1.6;
                    padding: 0 20px;
                }

                .container {
                    max-width: 900px;
                    margin: 0 auto;
                    padding: 60px 0;
                }

                /* Nav / Header bar */
                nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 60px;
                    border-bottom: 1px solid var(--border);
                    padding-bottom: 20px;
                }
                .logo {
                    font-family: 'JetBrains Mono', monospace;
                    font-weight: 700;
                    font-size: 1rem;
                    color: var(--text-main);
                }
                .logo span { color: var(--accent); }
                
                .status-pill {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(16, 185, 129, 0.1);
                    border: 1px solid rgba(16, 185, 129, 0.2);
                    padding: 6px 12px;
                    border-radius: 20px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: var(--green);
                }
                .dot { width: 7px; height: 7px; background: var(--green); border-radius: 50%; box-shadow: 0 0 8px var(--green); }

                /* Hero Section */
                .hero {
                    margin-bottom: 60px;
                }
                .hero h1 {
                    font-size: 3rem;
                    font-weight: 800;
                    letter-spacing: -1.5px;
                    margin-bottom: 16px;
                    line-height: 1.1;
                }
                .hero h1 span {
                    background: linear-gradient(to right, #60a5fa, #a78bfa);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .hero p {
                    font-size: 1.15rem;
                    color: var(--text-muted);
                    max-width: 650px;
                    margin-bottom: 30px;
                }

                .cta-group {
                    display: flex;
                    gap: 14px;
                    flex-wrap: wrap;
                }
                .btn {
                    padding: 12px 24px;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 0.9rem;
                    text-decoration: none;
                    transition: all 0.2s ease;
                }
                .btn-primary {
                    background: var(--text-main);
                    color: var(--bg);
                }
                .btn-primary:hover { background: #e5e7eb; }
                .btn-outline {
                    background: var(--card-bg);
                    color: var(--text-main);
                    border: 1px solid var(--border);
                }
                .btn-outline:hover { border-color: var(--accent); background: var(--accent-glow); }

                /* Sections */
                section {
                    margin-bottom: 60px;
                }
                .section-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin-bottom: 24px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .section-title::after {
                    content: "";
                    flex: 1;
                    height: 1px;
                    background: var(--border);
                }

                /* Grid Layouts */
                .skills-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                    gap: 16px;
                }
                .skill-card {
                    background: var(--card-bg);
                    border: 1px solid var(--border);
                    border-radius: 12px;
                    padding: 20px;
                }
                .skill-card h3 {
                    font-size: 0.9rem;
                    color: var(--accent);
                    margin-bottom: 12px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    font-family: 'JetBrains Mono', monospace;
                }
                .tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                }
                .tag {
                    background: rgba(255, 255, 255, 0.04);
                    border: 1px solid var(--border);
                    padding: 4px 10px;
                    border-radius: 6px;
                    font-size: 0.8rem;
                    font-weight: 500;
                }

                /* Projects */
                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 20px;
                }
                .project-card {
                    background: var(--card-bg);
                    border: 1px solid var(--border);
                    border-radius: 12px;
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    transition: transform 0.2s, border-color 0.2s;
                }
                .project-card:hover {
                    transform: translateY(-3px);
                    border-color: var(--accent);
                }
                .project-card h3 { font-size: 1.1rem; margin-bottom: 8px; font-weight: 700; }
                .project-card p { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 20px; }
                .project-links { display: flex; gap: 14px; font-size: 0.85rem; font-weight: 600; }
                .project-links a { color: var(--accent); text-decoration: none; }
                .project-links a:hover { text-decoration: underline; }

                /* Live Telemetry Footer Bar */
                .telemetry-footer {
                    background: var(--card-bg);
                    border: 1px solid var(--border);
                    border-radius: 10px;
                    padding: 16px 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 0.75rem;
                    color: var(--text-muted);
                    margin-top: 80px;
                }
                .telemetry-item span { color: var(--text-main); font-weight: 600; }

                @media(max-width: 600px) {
                    .hero h1 { font-size: 2.2rem; }
                    .telemetry-footer { flex-direction: column; gap: 10px; text-align: center; }
                }
            </style>
        </head>
        <body>

            <div class="container">
                <!-- Navigation Bar -->
                <nav>
                    <div class="logo">musaib<span>.dev</span></div>
                    <div class="status-pill">
                        <div class="dot"></div>
                        Available for Hire
                    </div>
                </nav>

                <!-- Hero Section -->
                <section class="hero">
                    <h1>Hi, I'm Musaib Sayyed <span>Cloud & DevOps Engineer</span></h1>
                    <p>I build scalable cloud architectures, containerized microservices, and automated CI/CD pipelines that bridge development and seamless production deployment.</p>
                    <div class="cta-group">
                        <a href="https://github.com" target="_blank" class="btn btn-primary">Explore GitHub</a>
                        <a href="https://linkedin.com" target="_blank" class="btn btn-outline">Let's Connect</a>
                    </div>
                </section>

                <!-- Technical Skills -->
                <section>
                    <div class="section-title">Technical Expertise</div>
                    <div class="skills-grid">
                        <div class="skill-card">
                            <h3>Container & Cloud</h3>
                            <div class="tags">
                                <span class="tag">Docker</span>
                                <span class="tag">Kubernetes</span>
                                <span class="tag">AWS</span>
                                <span class="tag">Linux</span>
                            </div>
                        </div>
                        <div class="skill-card">
                            <h3>CI/CD & Automation</h3>
                            <div class="tags">
                                <span class="tag">GitHub Actions</span>
                                <span class="tag">Jenkins</span>
                                <span class="tag">Git</span>
                                <span class="tag">Bash Scripting</span>
                            </div>
                        </div>
                        <div class="skill-card">
                            <h3>Backend & Languages</h3>
                            <div class="tags">
                                <span class="tag">Node.js</span>
                                <span class="tag">Express.js</span>
                                <span class="tag">JavaScript</span>
                                <span class="tag">Python</span>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Featured Projects -->
                <section>
                    <div class="section-title">Featured Projects</div>
                    <div class="projects-grid">
                        <div class="project-card">
                            <div>
                                <h3>Automated CI/CD Pipeline</h3>
                                <p>End-to-end containerized Node.js deployment pipeline built with Docker, automated tests, and cloud delivery.</p>
                            </div>
                            <div class="project-links">
                                <a href="#" target="_blank">View Source →</a>
                            </div>
                        </div>
                        <div class="project-card">
                            <div>
                                <h3>Cloud SRE Uptime Monitor</h3>
                                <p>Real-time endpoint monitoring service featuring background health checking, live latency tracking, and alerts.</p>
                            </div>
                            <div class="project-links">
                                <a href="#" target="_blank">View Source →</a>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Live System Telemetry Footer Component -->
                <div class="telemetry-footer">
                    <div class="telemetry-item">CONTAINER: <span id="sysStatus">ONLINE</span></div>
                    <div class="telemetry-item">UPTIME: <span id="sysUptime">Loading...</span></div>
                    <div class="telemetry-item">PLATFORM: <span id="sysPlatform">Docker Engine</span></div>
                </div>
            </div>

            <script>
                async function fetchMetrics() {
                    try {
                        const res = await fetch('/api/metrics');
                        const data = await res.json();
                        document.getElementById('sysUptime').innerText = data.uptime;
                        document.getElementById('sysPlatform').innerText = data.platform.toUpperCase();
                    } catch (e) {
                        console.error('Telemetry fetch failed');
                    }
                }
                fetchMetrics();
                setInterval(fetchMetrics, 5000);
            </script>

        </body>
        </html>
    `);
});

app.listen(PORT, () => console.log(`Professional Portfolio running on port ${PORT}`));