# 🌐 Cloud & DevOps Engineer Portfolio — Containerized Microservice

An enterprise-ready, containerized developer portfolio engineered with modern web standards, automated CI/CD deployment pipelines, and hosted on a dedicated AWS EC2 Linux instance fronted by Nginx with automated SSL/TLS encryption.

* **Live Demo:** https://musaib-portfolio.duckdns.org

---

## 🌟 Overview

This project serves as both a central technical showcase and a live proof-of-concept for modern Cloud & DevOps engineering practices. 

Instead of relying on conventional static hosting platforms, this application is fully containerized using Docker, validated through automated GitHub Actions workflows, and deployed onto an AWS production environment with hardened reverse proxy security and automated certificate lifecycle management.
<img width="1833" height="891" alt="image" src="https://github.com/user-attachments/assets/434969b0-2593-460e-b8db-3615ec82a4a5" />
<img width="1833" height="891" alt="image" src="https://github.com/user-attachments/assets/f86a9469-c9ee-4e85-8913-2243e273c46e" />

---

## 🚀 Key Technical Highlights

* **Dockerized Architecture:** Built with optimized Dockerfiles utilizing multi-stage build patterns to minimize attack surfaces, reduce image footprints, and guarantee runtime parity across environments.
* **Automated CI/CD Workflows:** Integrated GitHub Actions pipeline that triggers on code pushes to test, build, and ensure delivery pipeline reliability.
* **Production AWS Infrastructure:** Hosted on an AWS EC2 (Ubuntu Linux) instance engineered for maximum uptime, resource efficiency, and low-latency delivery.
* **Reverse Proxy & Traffic Management:** Configured a high-performance Nginx reverse proxy layer handling upstream internal routing (`127.0.0.1:3000`), connection upgrades, and HTTP-to-HTTPS automatic enforcement.
* **Transport Layer Security (SSL/TLS):** Enforced end-to-end HTTPS encryption utilizing Let's Encrypt certificates orchestrated by Certbot with background renewal automation.
* **Modern UI/UX Experience:** Clean, cyber-aesthetic developer interface featuring interactive project cards, live status telemetry, and responsive layout across desktop and mobile devices.

---

## 🛠️ Technology Stack

* **Frontend & Application Runtime:** HTML5, Modern CSS3, JavaScript (ES6+), Node.js Runtime Engine
* **Containerization:** Docker, Dockerfile Automation, Docker Engine
* **CI/CD & DevOps:** GitHub Actions, Linux Bash CLI, SFTP Workflows
* **Cloud & Infrastructure:** Amazon Web Services (AWS EC2, VPC, Security Groups, Elastic IPs)
* **Web Server & Security:** Nginx Reverse Proxy, Let's Encrypt SSL/TLS, Certbot Daemon, SSH
* **Networking & DNS:** DuckDNS Routing, TCP/IP, Port Mapping (80, 443, 3000)

---

## ⚙️ Cloud Deployment & Delivery Pipeline Flow

1. **Local Development:** Code updates, asset optimizations, and styling changes are tested locally.
2. **Version Control & CI Pipeline:** Changes are pushed to GitHub, triggering continuous integration workflows to validate configuration integrity.
3. **Container Build & Registry:** The application is packaged into an immutable Docker image containing all dependencies and static runtime assets.
4. **AWS Infrastructure Delivery:** The Docker container runs isolated on the AWS EC2 instance, exposing internal application ports.
5. **Nginx Reverse Proxy & SSL Handshake:** External client requests arriving via HTTPS (Port 443) hit Nginx, terminate TLS certificates, and proxy traffic securely into the containerized app.

---

## 📁 Repository Structure

* `.github/workflows/deploy.yml` — Automated CI/CD pipeline definition
* `Dockerfile` — Blueprint for building the lightweight application container
* `app.js` — Node.js application server and static asset router
* `package.json` — Application dependencies, scripts, and build metadata
* `config.json` — Environment variables and runtime configuration settings
* `public/` — Static frontend assets, media resources, stylesheets, and icons
* `README.md` — Project technical documentation and deployment guide

---

## 🛡️ Production & Infrastructure Specifications

* **Cloud Provider:** Amazon Web Services (AWS)
* **Compute Instance:** EC2 Ubuntu Server LTS
* **Container Runtime:** Docker Engine (Auto-restart daemon enabled)
* **Web Gateway:** Nginx Reverse Proxy (Port 80 to 443 redirect)
* **Security Protocol:** SSL/TLS A+ Grade Encryption via Let's Encrypt
* **Networking:** Restrictive AWS Security Groups with custom inbound/outbound firewall rules

---

## 👨‍💻 Author

**Musaib Sayyed** Cloud & DevOps Enthusiast | Computer Science Student  
* **Portfolio:** https://musaib-portfolio.duckdns.org  
* **GitHub:** https://github.com/sayyedmusaib91-code  
* **LinkedIn:** https://www.linkedin.com/in/musaib-sayyed
*
