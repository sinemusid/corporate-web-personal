# Corporate Web

> Official corporate web platform for **Sinemus Indonesia**, serving company profile, investor relations, careers, newsroom, and corporate digital presence.

---

## Overview

Corporate Web is the official website of **Sinemus Indonesia**, designed to represent the company's identity, communicate its vision, and provide trusted information to stakeholders.

This platform serves as the primary digital gateway for investors, partners, talents, media, and the public to learn about the Sinemus Ecosystem and its business units.

---

## Objectives

- Establish a professional corporate presence.
- Showcase the Sinemus Ecosystem.
- Build trust with investors and strategic partners.
- Attract future talents through the Careers portal.
- Publish official company news and announcements.
- Strengthen the Sinemus brand globally.

---

## Core Modules

### Company Profile

Provides complete information about the company.

- About Sinemus Indonesia
- Vision & Mission
- Core Values
- Leadership
- Business Ecosystem
- Corporate Timeline

---

### Ecosystem

Introduction to every business unit.

- Screen
- Production
- Academy
- Community

Each business unit has its own dedicated platform while remaining connected to the corporate website.

---

### Investor Relations

Dedicated section for investors.

- Company Overview
- Investment Opportunity
- Financial Highlights
- Business Strategy
- Corporate Documents
- Contact Information

---

### Careers

Recruitment platform.

Features:

- Job Listings
- Internship Program
- Recruitment Process
- Company Culture

---

### Newsroom

Official company communications.

Includes:

- Press Releases
- Company Updates
- Events
- Announcements
- Media Assets

---

### Contact

Corporate contact information.

- General Inquiry
- Partnership
- Media
- Investor
- Career

---

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion

### Development

- ESLint
- Prettier
- Husky
- lint-staged

### Deployment

- Vercel (Current)
- Docker (Future)
- GitHub Actions (CI/CD)

---

## Project Structure

```
corporate-web/
│
├── app/
├── components/
├── features/
├── hooks/
├── lib/
├── services/
├── styles/
├── public/
├── types/
├── utils/
├── docs/
│
├── middleware.ts
├── next.config.ts
└── README.md
```

---

## Development Workflow

### Branch Strategy

```
main
```

Production

```
develop
```

Integration Branch

```
feature/<feature-name>
```

Feature Development

```
fix/<issue-name>
```

Bug Fixes

---

### Commit Convention

```
feat:
```

New Feature

```
fix:
```

Bug Fix

```
refactor:
```

Code Improvement

```
docs:
```

Documentation

```
style:
```

Formatting

```
test:
```

Testing

```
build:
```

Build Configuration

```
chore:
```

Maintenance

Example:

```
feat(home): add hero animation

fix(header): resolve mobile navigation

docs(readme): update project overview
```

---

## Getting Started

### Clone Repository

```bash
git clone https://github.com/sinemus-indonesia/corporate-web.git
```

---

### Install Dependencies

```bash
npm install
```

---

### Run Development Server

```bash
npm run dev
```

---

### Build

```bash
npm run build
```

---

### Start Production

```bash
npm start
```

---

## Coding Standards

- TypeScript First
- Reusable Components
- Clean Architecture
- Feature-based Structure
- Strict ESLint Rules
- Responsive Design
- Accessibility Friendly

---

## Documentation

Additional documentation can be found in:

```
docs/
```

Including:

- Architecture
- Design Decisions
- API Documentation
- Deployment Guide
- Coding Standards

---

## Repository Ownership

This repository is maintained by the **Engineering Team** of **PT Sineas Muslim Indonesia**.

Repository Owner:

```
GitHub Organization
sinemus-indonesia
```

---

## Related Repositories

```
corporate-web
```

Official Corporate Website

```
screen-web
```

Screen Platform

```
production-web
```

Production Platform

```
academy-web
```

Academy Platform

```
community-web
```

Community Platform

```
design-system
```

Shared UI Components

```
documentation
```

Engineering Documentation

---

## Roadmap

- Corporate Website
- Investor Relations
- Careers Portal
- Newsroom
- Multi-language Support
- CMS Integration
- Analytics Dashboard

---

## License

Copyright © PT Sineas Muslim Indonesia.

All rights reserved.
