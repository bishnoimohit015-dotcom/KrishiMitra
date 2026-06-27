# KrishiMitra AI – Development Guidelines

Version: 1.0

Status: Active Development

---

# 1. Purpose

This document defines the development standards for KrishiMitra AI.

Every contributor, whether human or AI, must follow these guidelines to ensure consistency, maintainability, and code quality.

---

# 2. General Principles

Development should prioritize:

* Readability
* Simplicity
* Maintainability
* Security
* Performance
* Reusability
* Scalability

Never sacrifice long-term quality for short-term convenience.

---

# 3. Technology Standards

Frontend

* Next.js App Router
* React
* TypeScript
* Tailwind CSS

Backend

* Supabase
* PostgreSQL

Deployment

* Vercel

---

# 4. TypeScript Rules

Mandatory:

* Strict TypeScript
* No `any`
* Explicit interfaces
* Explicit return types for exported functions

Prefer:

```ts
interface Farmer {
  id: string;
}
```

Avoid:

```ts
const farmer: any = {};
```

---

# 5. Component Guidelines

Every component must have a single responsibility.

Example:

Good

```text
WeatherCard
ExpenseCard
FarmCard
```

Bad

```text
DashboardEverythingComponent
```

---

# 6. Folder Organization

Never place business logic inside UI components.

Business logic belongs in:

```text
src/lib/

or

src/services/
```

Components should only:

* Display UI
* Handle user interaction
* Receive props

---

# 7. Naming Conventions

Files

```text
WeatherCard.tsx
ExpenseForm.tsx
LoginPage.tsx
```

Variables

```ts
farmName
weatherData
cropDisease
```

Constants

```ts
MAX_IMAGE_SIZE
DEFAULT_LANGUAGE
```

Interfaces

```ts
interface Farm {}

interface Crop {}
```

---

# 8. API Standards

Never call external APIs directly from components.

Correct flow:

```text
Component

↓

Service

↓

API

↓

Response

↓

Component
```

---

# 9. Error Handling

Every async function must:

* Use try/catch where appropriate
* Return meaningful errors
* Never silently fail

Example

```ts
try {

} catch (error) {

}
```

---

# 10. Logging

Development

Use console logs only when debugging.

Production

Remove unnecessary logs.

Never log:

* Passwords
* API Keys
* Tokens
* Personal data

---

# 11. UI Guidelines

Every page should:

* Work on mobile
* Work on desktop
* Support dark mode
* Be accessible

Maintain visual consistency.

---

# 12. Forms

Every form must:

Validate required fields.

Display validation errors.

Prevent duplicate submissions.

Show loading state.

---

# 13. Authentication

Never trust client-side state.

Always verify authentication through Supabase.

Protected pages must reject unauthenticated users.

---

# 14. Database Access

Every database operation should:

* Respect RLS
* Validate inputs
* Handle errors

Never bypass security policies.

---

# 15. Git Workflow

Every feature should follow:

```text
Plan

↓

Implement

↓

Test

↓

Review

↓

Commit

↓

Push
```

Commit messages:

Good

```text
Add expense tracking

Fix weather caching

Implement authentication
```

Bad

```text
Update

Fix

Changes
```

---

# 16. Testing Checklist

Before every commit:

✓ TypeScript passes

✓ ESLint passes

✓ No console errors

✓ No runtime errors

✓ Responsive layout

✓ Authentication tested

✓ Database tested

✓ API tested

---

# 17. Performance

Avoid:

Large components

Repeated API calls

Deep prop drilling

Duplicate state

Prefer:

Memoization when needed

Code splitting

Lazy loading

Caching

---

# 18. Security Checklist

Never expose:

Supabase Service Role Key

Gemini API Key

Plant.id API Key

Secrets belong in:

```text
.env.local
```

Never commit secrets to GitHub.

---

# 19. Code Review Checklist

Every feature should answer:

Does it compile?

Is it readable?

Is it reusable?

Does it follow architecture?

Does it introduce duplication?

Is security maintained?

Does it break existing features?

---

# 20. Documentation Rules

Every significant feature must update:

* Project Spec
* Database Spec (if required)
* API documentation (if required)

Documentation is part of development.

---

# 21. AI Collaboration Rules

When using AI:

* Implement one feature at a time.
* Never ask AI to build the whole project.
* Always review generated code.
* Test before merging.
* Keep prompts specific.
* Provide project documentation for context.

---

# 22. Definition of Quality

Good code is:

Readable

Predictable

Modular

Secure

Testable

Maintainable

Future-proof

Every contribution should improve the project, not merely add functionality.

---

# 23. Conclusion

These guidelines define the engineering standards for KrishiMitra AI.

All development decisions should align with these principles to maintain a professional, scalable, and production-ready codebase.
