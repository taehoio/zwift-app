# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Oh My Zwift is a React Native/Expo mobile app that displays Zwift racing events and helps users predict race results. The app uses Expo Router for file-based navigation, NativeWind for styling, and TanStack Query for API state management.

## Commands

### Development

```bash
bun start              # Start Expo development server
bun run ios           # Run on iOS simulator
bun run android       # Run on Android emulator
bun run web           # Run in web browser
```

### Testing

```bash
bun test              # Run tests in watch mode
bun run test:ci       # Run tests once (CI mode)
bun run test:coverage # Generate coverage report
```

### Code Quality

```bash
bun run lint          # Run ESLint
bun run format        # Format code with Prettier
bun run format:check  # Check formatting without fixing
```

## Architecture

### File-based Routing

The app uses Expo Router with the following structure:

- `app/_layout.tsx` - Root layout with navigation setup
- `app/index.tsx` - Home screen listing events
- `app/events/[eventId]/index.tsx` - Dynamic event detail screens
- `app/events/[eventId]/subgroups/[subgroupId]/index.tsx` - Subgroup details

### API Integration

- API calls are centralized in `api/` directory
- Uses Axios for HTTP requests
- TanStack Query for caching and state management
- Base URL: https://zwift.taeho.io/api/v1

### Styling System

- NativeWind (Tailwind CSS for React Native)
- Custom Zwift fonts (ZwiftSprint family)
- Color system using CSS variables in `styles/global.css`
- Utility function `cn()` for className merging in `styles/index.ts`

### Type Definitions

All API responses and domain models have TypeScript types in `types/`:

- `zwift.type.ts` - Core Zwift types
- `zwiftpower.type.ts` - ZwiftPower integration types
- `zwiftracing.type.ts` - Racing-specific types
- `supabase.database.type.ts` - Database schema types

### Testing Approach

- Jest with Expo preset
- Test files in `__tests__` directories
- Component testing with @testing-library/react-native
- Snapshot testing for UI components
