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
│   ├── 📁 api-gateway/              # API Gateway
│   ├── 📁 auth-service/             # Authentication Service
│   ├── 📁 task-service/             # Task Core Service
│   ├── 📁 notification-service/     # Real-time Notifications
│   ├── 📁 billing-service/          # Subscription Management
│   └── 📁 file-service/             # File Uploads/Management
│
├── 📁 packages/                     # Shared Code
│   ├── 📁 common/                   # Utilities
│   ├── 📁 types/                    # Shared TS types
│   └── 📁 config/                   # ESLint/Prettier configs
│
├── 📁 infra/
│   ├── 📁 docker/                   # Docker configurations
│   ├── 📁 k8s/                      # Kubernetes configurations
│   └── 📁 databases/                # DB-specific configs
│
├── 📁 .github/
│   ├── 📁 workflows/                # GitHub Actions workflows
│
├── 📁 docs/                         # Documentation
│
├── 📁 scripts/                      # Scripts
│
├── 📁 .husky/                       # Husky Git hooks
├── 📄 .editorconfig
├── 📄 .eslintrc.js
├── 📄 .prettierrc
├── 📄 pnpm-workspace.yaml            # Turborepo config
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

```

```
