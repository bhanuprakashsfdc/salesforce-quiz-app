const ENV = {
  dev: {
    apiUrl: 'http://localhost:3000',
    enableDebugMode: true,
    analyticsEnabled: false,
    cacheTimeout: 300000, // 5 minutes in milliseconds
    maxRetries: 3,
    retryDelay: 1000,
  },
  staging: {
    apiUrl: 'https://staging-api.example.com',
    enableDebugMode: true,
    analyticsEnabled: true,
    cacheTimeout: 600000, // 10 minutes in milliseconds
    maxRetries: 3,
    retryDelay: 2000,
  },
  prod: {
    apiUrl: 'https://api.example.com',
    enableDebugMode: false,
    analyticsEnabled: true,
    cacheTimeout: 3600000, // 1 hour in milliseconds
    maxRetries: 5,
    retryDelay: 3000,
  }
};

const getEnvironment = () => {
  if (__DEV__) return ENV.dev;
  // You can add more complex environment detection logic here
  return ENV.prod;
};

export const environment = getEnvironment();