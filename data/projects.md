# Projects

---

## KNOVERSE

AI-powered team collaboration platform featuring secure RAG pipelines, internal knowledge bases, team-based data isolation, and containerized deployment.

### Highlights

- Enterprise RAG architecture
- Team-isolated vector databases
- AI assistant
- Internal document search
- Docker deployment

### Technologies

- LangChain
- Ollama
- Pinecone
- Docker

---

## THIRD EYE

AI fact-checking platform that verifies online news using ReAct reasoning, web retrieval, and LLM-based evidence analysis.

### Highlights

- ReAct reasoning loop
- Multi-source verification
- AI-assisted credibility analysis
- Internet retrieval

### Technologies

- ReAct Agents
- Web Retrieval
- Large Language Models

---

## Job Description Intelligence (JDI)

Privacy-first AI CLI application that generates tailored resumes and cover letters completely offline using local language models.

### Highlights

- Local AI inference
- Resume generation
- Cover letter generation
- Job description analysis
- Privacy-first design

### Technologies

- Python
- Ollama
- RAG

---

## AnalytixNexa

Open-source analytics platform helping small businesses leverage data-driven insights.

### Highlights

- Dashboard
- Data visualization
- Authentication
- Cloud backend

### Technologies

Frontend:
- React
- Material UI

Backend:
- Flask
- Firebase
- Python

---

## PaletteGen

AI-powered color palette generator that creates intelligent design palettes.

### Technologies

Frontend:
- Next.js
- Deno

Backend:
- Flask
- Google Gemini API

---

## PicTool

Cross-platform Python CLI utility for image processing.

### Features

- Resize images
- Format conversion
- Batch processing

### Technologies

- Python
- Pillow

---

## Mini Shell

Unix shell implementation written in C.

### Features

- Process execution
- Pipes
- Redirection
- Signal handling
- Bash-like behavior

### Technologies

- C
- Unix System Calls

---

## MiniRT

Ray tracing engine implemented in C.

### Features

- Ray tracing
- Lighting
- Reflection
- Rendering

### Technologies

- C
- MiniLibX

---

## Smart Street Lamp IoT Prototype

IoT prototype that automatically controls street lighting using environmental sensors.

### Features

- Motion detection
- Adaptive lighting
- Remote monitoring

### Hardware

- Raspberry Pi
- LDR Sensor
- Motion Sensor
- Ultrasonic Sensor

### Software

- MicroPython
- Azure IoT Central

---

---

## Inception of Things

Infrastructure-focused Kubernetes project demonstrating lightweight cluster deployment, container orchestration, networking, and GitOps-based continuous delivery across virtual machines and Docker.

### Highlights

- Multi-node Kubernetes cluster
- Automated infrastructure provisioning with Vagrant
- Kubernetes server and worker node architecture
- Host-based Ingress routing
- Multi-application deployment
- Local Kubernetes cluster using k3d
- GitOps continuous deployment with Argo CD
- Automated synchronization from GitHub
- Infrastructure as Code using YAML and shell scripts

### Project Parts

#### Part 1 — Multi-Node K3s Cluster

Provisioned two Vagrant virtual machines running K3s in server and agent mode.

- Kubernetes control plane
- Worker node registration
- Private VM networking
- Automated cluster provisioning

#### Part 2 — Kubernetes Ingress

Deployed multiple web applications on a K3s cluster and exposed them through Kubernetes Ingress.

- Kubernetes Deployments
- Services
- Ingress routing
- Host-based traffic forwarding
- Default application fallback

#### Part 3 — GitOps with Argo CD

Built a local Kubernetes environment using k3d and implemented GitOps deployment with Argo CD.

- Docker-based Kubernetes cluster
- Declarative Kubernetes manifests
- GitHub as the source of truth
- Automatic application synchronization
- Rolling application updates through Git commits
- Argo CD web dashboard

### Technologies

- Kubernetes
- K3s
- k3d
- Argo CD
- Docker
- Vagrant
- VirtualBox
- kubectl
- GitHub
- YAML
- Shell Scripting
- GitOps
