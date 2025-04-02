# Salesforce QuizMaster

A React Native mobile application for Salesforce certification preparation through interactive quizzes.

## Features

- Multiple quiz categories (Admin, Apex Development, LWC, Integration, Security, Architect)
- Various quiz types (Flashcards, Multiple Choice, True/False, Scenarios)
- Offline support with data persistence
- Progress tracking
- Error handling and analytics
- Environment-specific configurations

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

## Installation

```bash
npm install
# or
yarn install
```

## Development

```bash
# Start the development server
npm start
# or
yarn start

# Run tests
npm test
# or
yarn test

# Run tests with coverage
npm run test:coverage
# or
yarn test:coverage
```

## Project Structure

```
src/
  ├── components/      # Reusable UI components
  ├── screens/         # Screen components
  ├── constants/       # App constants and configurations
  ├── data/           # Static data and mock data
  ├── utils/          # Utility functions
  ├── config/         # Environment configurations
  └── __tests__/      # Test files
```

## Testing

The project uses Jest and React Native Testing Library for unit and integration testing. Test files are located next to the components they test with a `.test.js` extension.

## Error Handling

The application implements a centralized error handling system with different error types and appropriate user feedback. Error tracking is integrated with Sentry for production monitoring.

## Data Persistence

The app uses AsyncStorage for local data persistence, enabling offline functionality and caching quiz data. Cache invalidation is handled automatically based on environment configurations.

## Environment Configuration

The app supports different environments (development, staging, production) with appropriate configurations for each:

- Development: Local development with debug mode
- Staging: Testing environment with analytics
- Production: Production environment with full monitoring

## Production Deployment

1. Update the version in `app.json`
2. Configure environment variables
3. Build the app:
   ```bash
   expo build:ios
   expo build:android
   ```
4. Submit to respective app stores

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT