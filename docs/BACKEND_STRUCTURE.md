# Backend Service Architecture

## Directory Structure

```
📁 [service-name]-service/
├── 📁 src/
│ ├── 📁 domain/                # Core Business Logic
│ │ ├── 📁 entities/
│ │ ├── 📁 interfaces/
│ │
│ ├── 📁 application/           # Use Cases & Business Rules
│ │ ├── 📁 use-cases/
│ │ ├── 📁 dto/
│ │ ├── 📁 errors/
│ │ └── 📁 interfaces/
│ │
│ ├── 📁 adapters/
│ │ ├── 📁 controllers/
│ │ ├── 📁 validators/
│ │ └── 📁 serializers/
│ │
│ ├── 📁 infrastructure/        # External Concerns
│ │ ├── 📁 database/
│ │ │ ├── 📁 models/
│ │ │ ├── 📁 repositories/
│ │ │ └── 📁 migrations/
│ │ ├── 📁 server/
│ │ ├── 📁 http/
│ │ │ ├── 📁 middlewares/
│ │ │ └── 📁 routes/
│ │ ├── 📁 messaging/
│ │ ├── 📁 providers/
│ │ └── 📁 cache/
│ │
│ ├── 📁 di/                    # Dependency injection container
│ ├── 📁 config/                # Configuration management
│ ├── 📁 utils/                 # Shared utilities
│ └── 📄 index.ts              # Application entry point
│
├── 📁 test/
│ ├── 📁 unit/
│ ├── 📁 integration/
│ ├── 📁 e2e/
│ └── 📁 fixtures/
│
├── 📄 .env.example
├── 📄 Dockerfile
├── 📄 package.json
└── 📄 tsconfig.json
```
