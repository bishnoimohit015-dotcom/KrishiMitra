# KrishiMitra AI – API Integrations

Version: 1.0

Status: Active Development

---

# 1. Purpose

This document defines every external API used by KrishiMitra AI.

It specifies:

* Purpose
* Authentication
* Request format
* Response format
* Error handling
* Retry strategy
* Timeout strategy
* Caching strategy
* Future improvements

Every API integration must follow these standards.

---

# 2. API Design Principles

All external APIs must:

* Be isolated inside service files.
* Never be called directly from UI components.
* Handle failures gracefully.
* Return typed responses.
* Support future replacement without affecting the UI.

---

# 3. Supabase

## Purpose

Backend infrastructure.

Provides:

* Authentication
* PostgreSQL Database
* Storage
* Row Level Security

---

## Authentication

Use:

* Email/Password
* JWT Session
* Session Persistence

Never use the Service Role Key on the client.

---

## Database

Current tables:

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

---

## Error Handling

Handle:

* Authentication errors
* Network failures
* Permission failures
* Missing data

Always display meaningful user messages.

---

# 4. Google Gemini API

## Purpose

AI Farming Assistant.

Responsible for:

* Agricultural Q&A
* Crop guidance
* Recommendation generation
* Structured responses

---

## Authentication

API Key stored in:

```text
.env.local
```

Never expose the API key in client-side code.

---

## Expected Request

Prompt

Farm Context

Weather Context (optional)

Crop Context (optional)

Conversation History (optional)

---

## Expected Response

* Answer
* Recommendations
* Warnings
* Suggested next actions

---

## Error Handling

If unavailable:

Display a friendly error.

Do not crash the application.

---

# 5. Plant.id API

## Purpose

Crop disease detection.

---

## Input

Crop image.

---

## Output

* Disease name
* Confidence score
* Description
* Treatment
* Prevention

---

## Validation

Reject:

* Empty uploads
* Unsupported formats
* Oversized images

---

## Error Handling

Display:

Unable to analyze image.

Please try again.

---

# 6. Open-Meteo API

## Purpose

Weather forecasts.

---

## Input

Latitude

Longitude

---

## Output

Current weather

Forecast

Temperature

Humidity

Wind Speed

Rain Probability

---

## Caching

Cache responses for a reasonable duration to reduce repeated requests.

---

## Failure Handling

If unavailable:

Display last cached forecast if available.

Otherwise show an appropriate message.

---

# 7. Future APIs

Possible future integrations:

* Government Scheme API
* Crop Market Price API
* Soil Testing API
* Satellite Imagery
* IoT Sensors
* Drone Imagery

These are outside the MVP.

---

# 8. Retry Strategy

Temporary failures:

Retry with exponential backoff.

Permanent failures:

Display user-friendly errors.

Never retry indefinitely.

---

# 9. Timeout Strategy

Recommended:

Weather

5 seconds

Gemini

10 seconds

Disease Detection

20 seconds

Authentication

5 seconds

---

# 10. Rate Limits

Respect every provider's limits.

Avoid unnecessary requests.

Implement caching whenever practical.

---

# 11. API Security

Never expose:

API Keys

Secrets

Tokens

Service Role Keys

Use environment variables only.

---

# 12. Logging

Development:

Detailed API logs.

Production:

Errors only.

Never log:

Passwords

Tokens

Personal information

API Keys

---

# 13. Service Layer

Every API must have its own service.

Example:

```text
src/services/

auth.service.ts

weather.service.ts

gemini.service.ts

disease.service.ts

expense.service.ts
```

Components communicate only with services.

---

# 14. Response Standards

Every service should return a consistent structure.

Success:

```ts
{
  success: true,
  data: ...
}
```

Failure:

```ts
{
  success: false,
  error: "message"
}
```

---

# 15. Testing

Every API integration should be tested for:

* Successful responses
* Network failures
* Invalid credentials
* Invalid input
* Timeout handling
* Empty responses

---

# 16. Future Improvements

Potential enhancements:

* Background synchronization
* Offline request queue
* API monitoring
* Analytics
* Circuit breaker pattern
* Intelligent caching

---

# 17. Conclusion

All API integrations should remain modular, secure, resilient, and replaceable.

Business logic belongs in service modules, not UI components.
