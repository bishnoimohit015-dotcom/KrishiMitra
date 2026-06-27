# KrishiMitra AI – Database Specification

Version: 1.0

Status: Active Development

Database: PostgreSQL (Supabase)

---

# 1. Purpose

This document defines the database design for KrishiMitra AI.

It is the single source of truth for:

* Tables
* Relationships
* Constraints
* Indexes
* Row Level Security
* Future migrations

Any database change must first be reflected in this document.

---

# 2. Database Principles

The database must follow these principles:

* Normalize where practical.
* Avoid duplicated data.
* Use UUIDs as primary keys.
* Enable Row Level Security for user-owned tables.
* Use timestamps for every record.
* Soft delete only when business requirements demand it.
* Design for future scalability.

---

# 3. Entity Relationship Diagram

```text
auth.users
      │
      ▼
farmer_profiles
      │
      ▼
farms
      │
      ▼
crops
      │
      ├──────────────┐
      ▼              ▼
activities      expenses
      │              │
      └──────┬───────┘
             ▼
      disease_scans

farmer_profiles
      │
      ├────────► ai_conversations
      │
      ├────────► alerts
      │
      └────────► weather_cache
```

---

# 4. Table Standards

Every table must contain:

* Primary Key (UUID)
* created_at
* updated_at

Naming conventions:

Primary Key

```text
id
```

Foreign Keys

```text
farmer_id

farm_id

crop_id
```

Timestamp columns

```text
created_at

updated_at
```

---

# 5. Existing Tables

## farmer_profiles

Purpose

Stores user profile information.

Owner

Authenticated User.

Important Fields

* id
* full_name
* phone
* village
* district
* state
* preferred_language

Status

Implemented

---

## farms

Purpose

Stores farms owned by a farmer.

Relationship

Many farms belong to one farmer.

Status

Implemented

---

## crops

Purpose

Stores crops grown on a farm.

Relationship

Many crops belong to one farm.

Status

Implemented

---

# 6. Planned Tables

## activities

Purpose

Daily farm work.

Examples

* Irrigation
* Fertilizer
* Harvest
* Ploughing

---

## expenses

Purpose

Financial tracking.

Categories

* Seeds
* Fertilizer
* Labour
* Fuel
* Machinery
* Transport
* Miscellaneous

---

## disease_scans

Purpose

Stores disease detection history.

Fields

* crop_id
* image_url
* disease_name
* confidence
* treatment
* prevention

---

## weather_cache

Purpose

Reduce unnecessary weather API requests.

---

## ai_conversations

Purpose

Store AI chat history.

---

## alerts

Purpose

Notifications and reminders.

---

# 7. Relationships

User

↓

Farmer Profile

↓

Farm

↓

Crop

↓

Activity

↓

Expense

↓

Disease Scan

Every record should ultimately belong to a single authenticated user.

---

# 8. Indexing Strategy

Indexes should exist on:

farmer_id

farm_id

crop_id

created_at

Frequently searched fields

Additional indexes should only be added after measuring performance.

---

# 9. Row Level Security

Every user-owned table must have:

SELECT

INSERT

UPDATE

DELETE

policies.

Users must never access another user's data.

---

# 10. Constraints

Use:

NOT NULL

Foreign Keys

CHECK constraints

Unique constraints where appropriate.

Avoid nullable business-critical fields.

---

# 11. Migration Strategy

Every schema change must be introduced through a new SQL migration.

Never edit production tables manually.

Migration names should follow:

```text
001_initial_schema.sql

002_auth_rls.sql

003_expenses.sql

004_weather.sql
```

---

# 12. Backup & Recovery

Database backups should rely on Supabase platform capabilities.

Destructive migrations should always be tested on development first.

---

# 13. Future Tables

Potential future additions:

* inventory
* suppliers
* machinery
* livestock
* government_schemes
* soil_tests
* irrigation_logs
* crop_market_prices
* analytics_reports

These are intentionally excluded from the MVP.

---

# 14. Database Quality Checklist

Every new table must satisfy:

✓ UUID primary key

✓ created_at

✓ updated_at

✓ Foreign keys

✓ Indexes

✓ RLS enabled

✓ Policies created

✓ Type-safe mapping

✓ Migration documented

---

# 15. Conclusion

The database is the foundation of KrishiMitra.

Changes should prioritize consistency, security, scalability, and maintainability over short-term convenience.
