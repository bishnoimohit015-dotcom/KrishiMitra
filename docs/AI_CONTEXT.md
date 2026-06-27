# KrishiMitra AI – AI Context

Version: 1.0

Last Updated: June 2026

---

# Project Summary

KrishiMitra AI is a production-quality AI-powered farming assistant designed primarily for Indian farmers.

The application combines:

* Farm Management
* Crop Management
* Expense Tracking
* Activity Tracking
* Weather Intelligence
* AI Farming Assistant
* Disease Detection
* Voice Interaction
* Offline Support

The project is intended to be a finalist-level hackathon submission while maintaining production-quality engineering standards.

---

# Current Development Status

Completed

✅ Next.js Project

✅ Git Repository

✅ GitHub Repository

✅ Supabase Project

✅ Supabase Authentication

✅ Database Foundation

✅ Row Level Security

✅ Initial Database Schema

✅ Project Documentation

Currently Working On

➡ Authentication Module

Next Modules

Dashboard

Farm Management

Crop Management

Expense Tracking

Weather

Disease Detection

AI Assistant

Voice Assistant

Offline Support

Deployment

---

# Technology Stack

Frontend

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS

Backend

* Supabase
* PostgreSQL
* Row Level Security

AI

* Google Gemini
* Plant.id
* ChatGPT
* Claude (review only)

Deployment

* Vercel

Version Control

* Git
* GitHub

---

# Folder Structure

```text
src/

app/

components/

lib/

services/

hooks/

types/

constants/

styles/

public/
```

Never reorganize folders unless specifically requested.

---

# Existing Database

Tables already created:

* farmer_profiles
* farms
* crops

Future tables:

* activities
* expenses
* disease_scans
* weather_cache
* ai_conversations
* alerts

Never redesign existing tables.

Extend them only through migrations.

---

# Existing Components

Reusable UI components already exist.

Always reuse:

Button

Input

Card

Layout

Navigation

Never recreate them.

---

# Development Rules

Always:

* TypeScript
* Modular code
* Reusable components
* Production-ready implementations
* Proper error handling
* Loading states
* Type safety
* Mobile-first UI

Never:

* Use `any`
* Expose API keys
* Rewrite unrelated files
* Ignore existing architecture
* Duplicate business logic

---

# Authentication Rules

Use Supabase Authentication.

Never implement custom authentication.

Use:

* Session persistence
* JWT
* Row Level Security

---

# Database Rules

Use UUID primary keys.

Every table should contain:

* created_at
* updated_at

Respect Row Level Security.

Never bypass policies.

---

# API Rules

Never call external APIs directly from components.

Use service modules.

Every API should:

* Return typed responses
* Handle failures
* Handle timeouts
* Support future replacement

---

# Coding Standards

Prefer:

Small files

Small components

Explicit types

Reusable functions

Readable code

Avoid:

Large files

Deep nesting

Duplicated logic

Unnecessary abstractions

---

# Feature Workflow

Every feature must follow:

1. Understand requirements.
2. Review existing code.
3. Reuse components.
4. Implement feature.
5. Test locally.
6. Review code.
7. Commit.
8. Push.

---

# Expected AI Behaviour

You are contributing to an existing production-quality project.

Do not redesign the project.

Do not rewrite existing modules unless necessary.

Keep architecture consistent.

Return complete files.

Explain architectural decisions.

Use best practices for:

* Next.js
* TypeScript
* React
* Supabase

---

# Current Objective

Implement the Authentication Module.

Authentication must include:

* Login
* Signup
* Logout
* Session Persistence
* Protected Routes
* Redirect Logic

Do not implement unrelated features.

---

# Definition of Done

Before completing any feature, verify:

✓ Compiles successfully

✓ No TypeScript errors

✓ No ESLint errors

✓ No runtime errors

✓ No console errors

✓ Mobile responsive

✓ Uses existing components

✓ Secure implementation

✓ Matches project architecture

✓ Production ready
