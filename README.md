# WorkflowX - Collaborative Task Management Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Node.js](https://img.shields.io/badge/Node.js-v18+-green)
![pnpm](https://img.shields.io/badge/pnpm-v8+-yellow)
![MongoDB](https://img.shields.io/badge/MongoDB-v6+-brightgreen)

A MERN stack-based task management system with individual and team collaboration features, offering both free and premium tiers with role-based access control.

## 📂 File Structure 
```
workflowx/
├── 📁 apps/
│   ├── 📁 web/                      # Next.js Frontend
│   │   ├── 📁 public/
│   │   ├── 📁 src/
│   │   │   ├── 📁 app/              # App router
│   │   │   ├── 📁 components/       # UI components
│   │   │   └── 📁 lib/              # Shared frontend logic
│   │   ├── 📄 Dockerfile
│   │   └── 📄 package.json
│   │
│   ├── 📁 api-gateway/              # API Gateway
│   │   ├── 📁 src/
│   │   │   ├── 📁 routes/           # Route definitions
│   │   │   └── 📁 middleware/       # Auth, rate limiting
│   │   └── 📄 Dockerfile
│   │
│   ├── 📁 auth-service/             # Authentication Service
│   │   ├── 📁 src/
│   │   │   ├── 📁 controllers/
│   │   │   ├── 📁 models/           # User schema
│   │   │   ├── 📁 routes/
│   │   │   └── 📁 database/         # DB connection
│   │   ├── 📄 Dockerfile
│   │   └── 📄 package.json
│   │
│   ├── 📁 task-service/             # Task Core Service
│   ├── 📁 notification-service/     # Real-time Notifications
│   ├── 📁 billing-service/          # Subscription Management
│   └── 📁 file-service/             # File Uploads/Management
│
├── 📁 packages/                     # Shared Code
│   ├── 📁 common/                   # Utilities
│   │   ├── 📁 logger/
│   │   └── 📁 error-handler/
│   ├── 📁 types/                    # Shared TS types
│   └── 📁 config/                   # ESLint/Prettier configs
│
├── 📁 infra/
│   ├── 📁 docker/
│   │   ├── 📁 compose/
│   │   │   ├── 📁 dev/              # Dev environment
│   │   │   └── 📁 prod/             # Production setup
│   │   └── 📁 services/             # Individual service Dockerfiles
│   ├── 📁 k8s/
│   │   ├── 📁 overlays/
│   │   └── 📁 base/
│   └── 📁 databases/                # DB-specific configs
│
├── 📁 .github/
│   ├── 📁 workflows/
│   │   ├── 📄 ci.yml                # Continuous Integration
│   │   ├── 📄 cd.yml                # Deployment
│   │   └── 📄 security.yml          # Security scans
│   └── 📄 dependabot.yml
│
├── 📁 docs/
│   ├── 📄 ARCHITECTURE.md           # System design
│   ├── 📄 API_DOCS.md               # API specifications
│
├── 📁 scripts/
│   ├── 📁 db-migrations/            # Database migration scripts
│   └── 📁 deployment/               # Deployment helpers
│
├── 📁 .husky/
├── 📄 .editorconfig              
├── 📄 .eslintrc.js
├── 📄 .prettierrc
├── 📄 pnpm-workspace.yaml
├── 📄 turbo.json                    # Turborepo config
└── 📄 README.md
```

## 🚀 Getting Started

### Prerequisites
- ![Node.js](https://img.shields.io/badge/Node.js-v18+-green)
- ![pnpm](https://img.shields.io/badge/pnpm-v8+-yellow)
- ![MongoDB](https://img.shields.io/badge/MongoDB-v6+-brightgreen)
- ![Redis](https://img.shields.io/badge/Redis-required-red)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/abdul-irfan-k/workflowx.git
   cd workflowx
   ```