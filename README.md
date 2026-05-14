# Advance Portfolio - 3D Interactive Portfolio

A production-level React + TypeScript portfolio with 3D capabilities, modern tooling, and scalable architecture.

## 🚀 Features

- ⚡ **Vite** - Lightning-fast development and build tooling
- 🎨 **React 18** - Latest React with modern hooks
- 📘 **TypeScript** - Full type safety
- 🛣️ **React Router** - Client-side routing
- 📊 **State Management** - Zustand for global state
- 🔄 **Data Fetching** - TanStack Query (React Query)
- 🧪 **Testing** - Vitest with React Testing Library
- 📝 **Code Quality** - ESLint & Prettier
- 🎯 **3D Ready** - Prepared for 3D libraries (Three.js, Babylon.js, etc.)

## 📁 Project Structure

```
advance-portfolio/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── common/          # Common components (Navigation, Footer)
│   │   └── ui/              # UI components
│   ├── pages/               # Page components
│   ├── layouts/             # Layout components
│   ├── hooks/               # Custom React hooks
│   ├── services/            # API services
│   ├── utils/               # Utility functions
│   ├── types/               # TypeScript type definitions
│   ├── constants/           # Application constants
│   ├── styles/              # Global styles
│   ├── config/              # Configuration files
│   ├── assets/
│   │   ├── models/          # 3D models (ready for Three.js, etc.)
│   │   ├── textures/        # 3D textures
│   │   └── icons/           # Icon assets
│   ├── App.tsx              # Main App component
│   └── main.tsx             # Entry point
├── public/                  # Static assets
│   └── assets/              # Public static files
├── tests/                   # Test files
│   ├── unit/                # Unit tests
│   └── integration/         # Integration tests
├── .env                     # Environment variables (local)
├── .env.example             # Environment template
├── .eslintrc.json           # ESLint configuration
├── .prettierrc               # Prettier configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
├── vitest.config.ts         # Vitest configuration
└── package.json             # Dependencies and scripts

```

## 🛠️ Available Scripts

### Development
```bash
npm run dev          # Start development server
```

### Building
```bash
npm run build        # Build for production
npm run preview      # Preview production build
```

### Code Quality
```bash
npm run lint         # Check code for linting issues
npm run lint:fix     # Fix linting issues automatically
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run type-check   # Check TypeScript types
```

### Testing
```bash
npm run test         # Run tests
npm run test:ui      # Run tests with UI
npm run test:coverage # Generate test coverage report
```

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Setup Environment Variables**
   ```bash
   cp .env.example .env
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   - Navigate to `http://localhost:5173`

## 📦 Adding 3D Libraries

To add 3D capabilities, install your preferred library:

### Three.js
```bash
npm install three
npm install --save-dev @types/three
```

### Babylon.js
```bash
npm install babylonjs
```

Then create 3D components in `src/components/` and place 3D assets in `src/assets/models/` and `src/assets/textures/`.

## 🧩 Adding New Pages

1. Create component in `src/pages/YourPage.tsx`
2. Add route in `src/App.tsx`
3. Add navigation link if needed

## 🎨 Adding New Components

1. Create component in `src/components/`
2. Add barrel export in `index.ts`
3. Import using path aliases: `import { MyComponent } from '@components/...`

## 🔧 Configuration

### Path Aliases
TypeScript and Vite are configured with path aliases for cleaner imports:

```typescript
import { Navigation } from '@components/common';
import { useAsync } from '@hooks/useAsync';
import { API } from '@services/api';
```

### Environment Variables
Add variables to `.env` and reference them with `import.meta.env.VITE_*`

## 📱 Responsive Design
The project includes mobile-first responsive design with CSS breakpoints defined in `src/constants/index.ts`.

## 🧪 Testing
Tests should be placed in `tests/` directory:
- Unit tests: `tests/unit/`
- Integration tests: `tests/integration/`

## 🚢 Deployment

Build for production:
```bash
npm run build
```

The `dist/` folder contains the production-ready build.

## 📝 Git Workflow

1. Create feature branch
2. Make changes
3. Run `npm run lint:fix` and `npm run format`
4. Run `npm run test` to ensure all tests pass
5. Commit and push
6. Create pull request

## 📚 Resources

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [React Query Documentation](https://tanstack.com/query)

## 📄 License

MIT License - feel free to use this template for your projects

## 🤝 Contributing

Contributions are welcome! Please follow the existing code style and add tests for new features.

---

**Made with ❤️ for developers**
