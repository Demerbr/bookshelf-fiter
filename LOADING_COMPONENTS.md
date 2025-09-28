# Loading Components Structure

## Overview

This document describes the loading components architecture implemented in the application.

## Components

### 1. SpinnerLoading

**Location**: `src/components/SpinnerLoading/`

Base loading component with Amazon-themed colors and animations.

**Features**:
- Multiple sizes: `sm`, `md`, `lg`, `xl`
- Custom message support
- Amazon color scheme (orange spinner, blue border)
- Smooth animations

**Usage**:
```tsx
import { SpinnerLoading } from '@/components/SpinnerLoading';

<SpinnerLoading message="Carregando..." size="lg" />
```

### 2. LoadingProvider (Compound Component)

**Location**: `src/components/LoadingProvider/`

Compound component pattern providing both Server and Client variants.

#### LoadingProviderServer

Server-side component for `loading.tsx` files and initial app loading.

**Features**:
- No translation dependencies
- Hardcoded messages
- Server-side rendering compatible

**Usage**:
```tsx
import { LoadingProviderServer } from '@/components/LoadingProvider';

<LoadingProviderServer message="Carregando livros..." size="xl" />
```

#### LoadingProviderClient

Client-side component with translation support.

**Features**:
- Uses `react-i18next` for translations
- Translation key support
- Client-side rendering

**Usage**:
```tsx
import { LoadingProviderClient } from '@/components/LoadingProvider';

<LoadingProviderClient message="loading.books" size="lg" />
```

## File Structure

```
src/components/
├── SpinnerLoading/
│   ├── SpinnerLoading.tsx
│   ├── index.ts
│   └── __tests__/
│       └── SpinnerLoading.test.tsx
├── LoadingProvider/
│   ├── LoadingProviderServer.tsx
│   ├── LoadingProviderClient.tsx
│   ├── index.ts
│   └── __tests__/
│       ├── LoadingProviderServer.test.tsx
│       └── LoadingProviderClient.test.tsx
└── ui/
    └── index.ts (shadcn/ui components only)
```

## Usage Guidelines

### Server Components (loading.tsx files)
Use `LoadingProviderClient` with translation keys:

```tsx
// src/app/loading.tsx
"use client";

import { LoadingProviderClient } from '@/components/LoadingProvider';

export default function Loading() {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center px-4">
      <LoadingProviderClient 
        message="loading.books" 
        size="xl" 
      />
    </div>
  );
}
```

### Client Components (Interactive components)
Use `LoadingProviderClient` with translation keys:

```tsx
// src/components/InfiniteScrollWrapper/InfiniteScrollWrapper.tsx
import { LoadingProviderClient } from '@/components/LoadingProvider';

<LoadingProviderClient 
  message="loading.moreBooks" 
  size="md" 
/>
```

### I18nProvider Initialization
Use `LoadingProviderServer` for initial app loading (before i18n is ready):

```tsx
// src/components/I18nProvider.tsx
import { LoadingProviderServer } from '@/components/LoadingProvider';

<LoadingProviderServer 
  message="Inicializando..." 
  size="lg" 
/>
```

## When to Use Each Component

### LoadingProviderServer
- **I18nProvider initialization only**
- Before i18n system is ready
- No translation dependencies

### LoadingProviderClient
- **All loading.tsx files**
- **All interactive components**
- **Any component that needs translations**
- After i18n system is ready

## Translation Keys

Available translation keys for loading messages:

### Portuguese (pt.json)
- `common.loading` - "Carregando..."
- `loading.books` - "Carregando livros..."
- `loading.bookDetails` - "Carregando detalhes do livro..."
- `loading.cart` - "Carregando carrinho..."
- `loading.favorites` - "Carregando favoritos..."
- `loading.moreBooks` - "Carregando mais livros..."
- `loading.search` - "Buscando livros..."
- `loading.sorting` - "Ordenando livros..."
- `loading.initializing` - "Inicializando..."

### English (en.json)
- `common.loading` - "Loading..."
- `loading.books` - "Loading books..."
- `loading.bookDetails` - "Loading book details..."
- `loading.cart` - "Loading cart..."
- `loading.favorites` - "Loading favorites..."
- `loading.moreBooks` - "Loading more books..."
- `loading.search` - "Searching books..."
- `loading.sorting` - "Sorting books..."
- `loading.initializing` - "Initializing..."

## Design Principles

1. **Separation of Concerns**: Server and Client components separated
2. **Compound Pattern**: Single import with multiple variants
3. **Amazon Branding**: Consistent color scheme throughout
4. **Accessibility**: Proper ARIA attributes and semantic HTML
5. **Performance**: Optimized animations and minimal re-renders
6. **Maintainability**: Clean code structure and comprehensive tests

## Migration Notes

- `ModernLoading` component has been renamed to `SpinnerLoading`
- Components moved out of `src/components/ui/` to application-specific folders
- `src/components/ui/` now contains only shadcn/ui components
- All loading components now use the new compound pattern
