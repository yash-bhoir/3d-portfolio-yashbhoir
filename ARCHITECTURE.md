# Architecture Documentation

## Overview

This project follows a modular, component-based architecture with clear separation of concerns. It's built with React, TypeScript, and modern tooling for scalability and maintainability.

## Core Architecture Principles

1. **Modularity** - Each feature is self-contained and can be developed independently
2. **Scalability** - Easy to add new features without affecting existing code
3. **Maintainability** - Clear structure makes code easy to understand and modify
4. **Reusability** - Components and utilities are designed to be reusable
5. **Type Safety** - Full TypeScript support for better development experience

## Directory Structure

### `/src/components`
Contains reusable React components organized by category:
- **`common/`** - Shared components used across the app (Navigation, Footer, etc.)
- **`ui/`** - Reusable UI components (buttons, cards, modals, etc.)
- **`features/`** - Feature-specific components (optional, for larger features)

### `/src/pages`
Contains page-level components that represent different routes in the application. Each page typically combines multiple components.

### `/src/layouts`
Contains layout components that provide structure for pages (e.g., MainLayout with header and footer).

### `/src/hooks`
Custom React hooks for reusable logic:
- `useAsync` - Handle async operations
- Add more as needed for common patterns

### `/src/services`
Business logic and external API integration:
- `api.ts` - HTTP client and API methods
- Add service modules as needed (auth, database, etc.)

### `/src/types`
TypeScript type definitions and interfaces:
- Shared types used across the application
- API response types
- Component prop types

### `/src/utils`
Utility functions and helpers:
- `common.ts` - Common utility functions (throttle, debounce, etc.)
- Pure functions with no side effects

### `/src/constants`
Application-wide constants and configuration values:
- API endpoints
- Navigation links
- Animation durations
- Breakpoints

### `/src/styles`
Global styles:
- `main.css` - Main stylesheet with CSS variables and global styles

### `/src/config`
Application configuration:
- `index.ts` - Config object
- `store.ts` - Zustand store for global state

### `/tests`
Test files organized by type:
- **`unit/`** - Unit tests for components and utilities
- **`integration/`** - Integration tests for features

### `/public`
Static assets served directly:
- Images, fonts, and other static files
- `/assets` - Public asset folder

## Data Flow

```
UI Components
    ↓
Custom Hooks (useAsync, etc.)
    ↓
Services (API calls)
    ↓
Zustand Store (Global State)
    ↓
Utils (Business Logic)
```

## Component Hierarchy

```
App (root)
  ├── MainLayout
  │   ├── Navigation
  │   ├── Main Content (Outlet)
  │   └── Footer
  ├── HomePage
  ├── ProjectsPage
  └── ...other pages
```

## State Management

### Local State
Use React `useState` for component-local state that doesn't need to be shared.

### Global State
Use Zustand store (`useAppStore`) for application-wide state:
```typescript
// In src/config/store.ts
export const useAppStore = create<AppState>((set) => ({
  // state
}));

// In components
const { theme, setTheme } = useAppStore();
```

### Server State
Use React Query (`@tanstack/react-query`) for server state management:
```typescript
const { data, isLoading, error } = useQuery({
  queryKey: ['projects'],
  queryFn: () => apiService.get('/projects'),
});
```

## API Integration

All API calls go through the `apiService` in `/src/services/api.ts`:

```typescript
import { apiService } from '@services';

// GET request
const data = await apiService.get('/endpoint');

// POST request
const result = await apiService.post('/endpoint', payload);
```

## Routing

Routes are defined in `App.tsx` using React Router:

```typescript
<Routes>
  <Route element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path="projects" element={<ProjectsPage />} />
  </Route>
</Routes>
```

## Best Practices

### Component Organization
- One component per file
- Use PascalCase for component files
- Group related components in folders

### Import Organization
```typescript
// 1. React imports
import React from 'react';

// 2. Third-party imports
import { useQuery } from '@tanstack/react-query';

// 3. Local imports
import { Navigation } from '@components/common';
import { apiService } from '@services';

// 4. Styles
import './Component.css';
```

### Naming Conventions
- Components: `PascalCase` (e.g., `HomePage.tsx`)
- Files: `kebab-case` for utilities (e.g., `common-utils.ts`)
- CSS Classes: `kebab-case` (e.g., `.hero-section`)
- Variables/Functions: `camelCase`
- Constants: `UPPER_SNAKE_CASE`

### Type Safety
Always define types for props and return values:

```typescript
interface Props {
  title: string;
  onClick: (id: string) => void;
}

const Component: React.FC<Props> = ({ title, onClick }) => {
  return <div>{title}</div>;
};
```

### Error Handling
Use try-catch in async operations and proper error boundaries in React:

```typescript
try {
  const data = await apiService.get('/endpoint');
} catch (error) {
  console.error('Error:', error);
  // Handle error appropriately
}
```

## Adding 3D Support

To add 3D capabilities:

1. **Install 3D library**
   ```bash
   npm install three
   ```

2. **Create 3D component**
   ```typescript
   // src/components/3D/Scene.tsx
   import * as THREE from 'three';
   ```

3. **Store 3D assets**
   - Models: `src/assets/models/`
   - Textures: `src/assets/textures/`

4. **Create 3D services**
   ```typescript
   // src/services/threejs.ts
   // 3D-specific utilities and helpers
   ```

## Performance Optimization

1. **Code Splitting** - Routes are code-split automatically by Vite
2. **Lazy Loading** - Use `React.lazy()` for route components
3. **Memoization** - Use `React.memo()` for expensive components
4. **Image Optimization** - Optimize images and use appropriate formats

## Testing Strategy

- **Unit Tests** - Test individual components and utilities
- **Integration Tests** - Test feature workflows
- **E2E Tests** - (Optional) Test user flows end-to-end

## Development Workflow

1. Create feature branch: `git checkout -b feature/feature-name`
2. Make changes and test locally
3. Run linting: `npm run lint:fix`
4. Format code: `npm run format`
5. Run tests: `npm run test`
6. Commit and push
7. Create pull request

## Deployment

1. Build: `npm run build`
2. Output in `/dist` folder
3. Deploy to hosting (Vercel, Netlify, etc.)

---

For more information, see [README.md](./README.md)
