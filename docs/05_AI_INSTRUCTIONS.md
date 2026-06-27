# KrishiMitra AI – AI Instructions

Version: 1.0

Status: Active Development

---

# Purpose

This document defines how AI assistants must contribute to the KrishiMitra project.

These instructions apply to every AI model, including:

* Google Gemini
* Claude
* ChatGPT
* GitHub Copilot
* Future AI coding assistants

This document supplements the Project Specification, Technical Architecture, Database Specification, and Development Guidelines.

---

# Project Context

KrishiMitra AI is an AI-powered farming assistant built for Indian farmers.

Its primary goals are:

* Farm Management
* Crop Management
* Expense Tracking
* Disease Detection
* Weather Intelligence
* AI Farming Assistant
* Voice-first interaction
* Offline-first capability

---

# Your Role

You are acting as a Senior Software Engineer working on an existing production-quality project.

You are **not** creating a prototype.

You are extending an existing codebase.

Every decision should improve maintainability.

---

# Read Before Coding

Before making changes, always assume the following documents have already been read:

* 01_PROJECT_SPEC.md
* 02_TECHNICAL_ARCHITECTURE.md
* 03_DATABASE_SPEC.md
* 04_DEVELOPMENT_GUIDELINES.md

Never contradict these documents.

---

# Development Rules

Always:

* Keep existing architecture.
* Reuse existing components.
* Use TypeScript.
* Follow the folder structure.
* Respect Row Level Security.
* Keep code modular.
* Write readable code.
* Prefer composition over duplication.

Never:

* Rewrite unrelated files.
* Redesign the UI without being asked.
* Introduce unnecessary dependencies.
* Expose secrets.
* Ignore TypeScript errors.
* Use `any` unless explicitly approved.

---

# Code Generation Rules

Return:

* Complete files
* Correct imports
* Type-safe code
* Production-ready code

Never return partial implementations unless specifically requested.

---

# Existing Project Structure

Assume the following folders already exist:

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
```

Follow this structure.

---

# UI Rules

Do not redesign the interface.

Maintain:

* Existing colors
* Existing spacing
* Existing typography
* Existing layout

Reuse existing:

* Button
* Input
* Card
* Layout
* Navigation

before creating new components.

---

# Authentication Rules

Authentication is handled by Supabase.

Never create a custom authentication system.

Always use:

* Supabase Authentication
* Session persistence
* Row Level Security

---

# Database Rules

The database already exists.

Never redesign existing tables.

Always extend the existing schema through migrations.

---

# API Rules

External APIs must be accessed through dedicated service files.

Never call APIs directly from UI components.

---

# Error Handling

Every async function should:

* Handle expected failures.
* Return meaningful errors.
* Avoid crashing the application.
* Display user-friendly messages.

---

# Performance

Prefer:

* Lazy loading
* Server Components where appropriate
* Code splitting
* Memoization only when beneficial
* Efficient database queries

Avoid:

* Unnecessary re-renders
* Duplicate API calls
* Large components
* Deeply nested state

---

# Security

Never expose:

* API Keys
* Tokens
* Secrets
* Service Role Keys

Always use environment variables.

Respect authentication.

Respect authorization.

---

# Feature Development Process

For every feature:

1. Understand requirements.
2. Review existing code.
3. Reuse components.
4. Implement feature.
5. Handle errors.
6. Maintain type safety.
7. Explain changes.

---

# Expected Output Format

When modifying the project:

1. Explain the approach.
2. List affected files.
3. Return complete updated files.
4. Explain any new files.
5. Mention required installation commands.
6. Mention required environment variables.
7. Mention required database migrations.

---

# Code Quality Checklist

Before finishing, verify:

✓ No TypeScript errors

✓ No ESLint errors

✓ No duplicated logic

✓ Reusable components

✓ Secure implementation

✓ Proper folder organization

✓ Consistent naming

✓ Clean architecture

---

# What Not To Do

Do not:

* Rewrite the entire project.
* Rename folders unnecessarily.
* Change unrelated files.
* Introduce breaking changes.
* Ignore existing architecture.

---

# Definition of Success

A successful contribution:

* Solves the requested problem.
* Compiles successfully.
* Matches project architecture.
* Uses existing components.
* Is maintainable.
* Is secure.
* Is production-ready.

---

# Final Instruction

Whenever implementing a feature, prioritize long-term maintainability over short-term speed.

Every contribution should leave the project in a better state than before.
