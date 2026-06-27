# 🌾 KrishiMitra AI

> AI-powered multilingual farming assistant built for Indian farmers.

KrishiMitra AI is an intelligent farming copilot that helps farmers manage their farms through AI-powered disease detection, weather recommendations, expense tracking, voice interaction, and farm memory.

The project is being developed as a production-quality hackathon project with a focus on scalability, usability, and offline-first support.

---

# Features

## Current

* Next.js 16
* TypeScript
* Tailwind CSS
* Supabase Integration
* Responsive UI
* Project Documentation
* Database Architecture

## Planned

* Farmer Authentication
* Farm Management
* Crop Management
* Expense Tracking
* Activity Tracking
* AI Chat Assistant
* Voice Assistant
* Disease Detection
* Weather Intelligence
* Smart Alerts
* Offline Support
* Dashboard Analytics

---

# Tech Stack

| Layer             | Technology     |
| ----------------- | -------------- |
| Frontend          | Next.js 16     |
| Language          | TypeScript     |
| Styling           | Tailwind CSS   |
| Backend           | Supabase       |
| Database          | PostgreSQL     |
| Authentication    | Supabase Auth  |
| AI                | Google Gemini  |
| Disease Detection | Plant.id API   |
| Weather           | Open-Meteo API |
| Deployment        | Vercel         |

---

# Project Structure

```text
KrishiMitra/
│
├── docs/
├── public/
├── src/
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── types/
│   └── styles/
│
├── .env.local
├── package.json
└── README.md
```

---

# Documentation

Complete project documentation is available inside the **docs/** directory.

* 01_PROJECT_SPEC.md
* 02_TECHNICAL_ARCHITECTURE.md
* 03_DATABASE_SPEC.md
* 04_DEVELOPMENT_GUIDELINES.md
* 05_AI_INSTRUCTIONS.md
* 06_API_INTEGRATIONS.md
* AI_CONTEXT.md
* CHANGELOG.md
* ROADMAP.md
* KNOWN_ISSUES.md
* DECISIONS.md

---

# Installation

Clone the repository

```bash
git clone https://github.com/bishnoimohit015-dotcom/KrishiMitra.git
```

Move into the project

```bash
cd KrishiMitra
```

Install dependencies

```bash
npm install
```

Create an environment file

```text
.env.local
```

Start the development server

```bash
npm run dev
```

Open

```text
http://localhost:3000
```

---

# Environment Variables

Create a `.env.local` file.

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url

NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

GEMINI_API_KEY=your_gemini_api_key
```

---

# Development Status

| Module            | Status |
| ----------------- | ------ |
| Project Setup     | ✅      |
| GitHub            | ✅      |
| Documentation     | ✅      |
| Supabase          | ✅      |
| Authentication    | 🚧     |
| Dashboard         | ⏳      |
| Expenses          | ⏳      |
| Weather           | ⏳      |
| Disease Detection | ⏳      |
| AI Assistant      | ⏳      |
| Voice Assistant   | ⏳      |

---

# Screenshots

Screenshots will be added as development progresses.

---

# Roadmap

* Authentication
* Farmer Onboarding
* Dashboard
* Expense Tracking
* Weather
* Disease Detection
* AI Assistant
* Voice Assistant
* Offline Mode
* Production Deployment

---

# Contributing

This project is currently under active development.

Contributions, feature suggestions, and bug reports are welcome after the first stable release.

---

# License

This project is licensed under the MIT License.

---

# Author

**Mohit Bishnoi**

Computer Science Engineering Student

---

# Acknowledgements

* Next.js
* Supabase
* Google Gemini
* Tailwind CSS
* Plant.id
* Open-Meteo
