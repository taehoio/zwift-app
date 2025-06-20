# Oh My Zwift 🚴‍♂️

A React Native mobile app for Zwift racers to browse upcoming events, explore race categories, and predict race results based on participant data.

## Features

- 📅 **Browse Upcoming Events** - View all scheduled Zwift races, group rides, workouts, and time trials
- 🏁 **Event Details** - See route information, distance, elevation, duration, and participant counts
- 👥 **Category Analysis** - Explore subgroups (A-E) with specific pace ranges and registered riders
- 📊 **Race Prediction** - View participants with their racing stats to estimate potential finishing order
- 🔗 **ZwiftPower Integration** - Direct links to detailed event and rider information
- 🌍 **Cross-Platform** - Works on iOS, Android, and Web browsers

## Tech Stack

- **Framework**: React Native with Expo (SDK 51)
- **Navigation**: Expo Router (file-based routing)
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **State Management**: TanStack Query (React Query)
- **Language**: TypeScript
- **API Client**: Axios
- **Package Manager**: Bun

## Getting Started

### Prerequisites

- Node.js 18+
- Bun package manager (`curl -fsSL https://bun.sh/install | bash`)
- iOS Simulator (Mac only) or Android Emulator
- Expo Go app on your physical device (optional)

### Installation

```bash
# Clone the repository
git clone https://github.com/taehoio/zwift-app.git
cd zwift-app

# Install dependencies
bun install

# Start the development server
bun start
```

### Running the App

```bash
# iOS Simulator
bun run ios

# Android Emulator
bun run android

# Web Browser
bun run web

# Expo Go (scan QR code)
bun start
```

## Development

### Project Structure

```
zwift-app/
├── app/                    # Expo Router pages
│   ├── _layout.tsx        # Root layout with navigation
│   ├── index.tsx          # Home screen (event list)
│   └── events/
│       └── [eventId]/     # Dynamic event routes
├── api/                   # API client functions
├── components/            # Reusable UI components
├── types/                 # TypeScript type definitions
├── styles/                # Global styles and utilities
├── libs/                  # Utility functions
└── assets/               # Fonts and images
```

### Available Scripts

```bash
# Development
bun start              # Start Expo development server
bun run ios           # Run on iOS simulator
bun run android       # Run on Android emulator
bun run web           # Run in web browser

# Testing
bun test              # Run tests in watch mode
bun run test:ci       # Run tests once (CI mode)
bun run test:coverage # Generate coverage report

# Code Quality
bun run lint          # Run ESLint
bun run format        # Format code with Prettier
bun run format:check  # Check formatting
```

### API Integration

The app connects to the Zwift API backend at `https://zwift.taeho.io/api/v1` with the following endpoints:

- `GET /events` - Fetch all upcoming events
- `GET /events/{eventId}` - Get event details with route information
- `GET /events/{eventId}/subgroups/{subgroupId}` - Get participants for a subgroup

## Features in Detail

### Event Browsing

- Real-time list of upcoming Zwift events
- Event type indicators (race, group ride, workout, time trial)
- Quick view of start times, routes, and distances
- Category badges showing available subgroups

### Race Analysis

- Detailed participant lists with key metrics:
  - FTP (Functional Threshold Power)
  - W/kg (Watts per kilogram)
  - Racing Score
  - ZwiftPower rank and category
- Nationality flags for international competition
- Direct links to ZwiftPower profiles

### Smart Caching

- Intelligent data refresh with TanStack Query
- Exponential backoff for subgroup details
- Pull-to-refresh on all screens
- Optimized for battery life and performance

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with ❤️ for the Zwift racing community
- Special thanks to ZwiftPower for providing racing data
- Zwift is a trademark of Zwift, Inc.

## Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

Made by [taeho.io](https://taeho.io)
