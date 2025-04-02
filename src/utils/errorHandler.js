import { environment } from '../config/environment';

class AppError extends Error {
  constructor(code, message, originalError = null) {
    super(message);
    this.code = code;
    this.originalError = originalError;
    this.timestamp = new Date().toISOString();
  }
}

export const ErrorCodes = {
  NETWORK_ERROR: 'NETWORK_ERROR',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  AUTH_ERROR: 'AUTH_ERROR',
  SERVER_ERROR: 'SERVER_ERROR',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR'
};

export const handleError = (error, context = {}) => {
  let appError;

  if (error instanceof AppError) {
    appError = error;
  } else if (error.message && error.message.includes('Network')) {
    appError = new AppError(ErrorCodes.NETWORK_ERROR, 'Network connection error', error);
  } else {
    appError = new AppError(ErrorCodes.UNKNOWN_ERROR, error.message || 'An unexpected error occurred', error);
  }

  // Log error in development mode
  if (environment.enableDebugMode) {
    console.error('Error occurred:', {
      code: appError.code,
      message: appError.message,
      context,
      timestamp: appError.timestamp,
      originalError: appError.originalError
    });
  }

  // Here you can add error reporting service integration
  // Example: Sentry.captureException(appError);

  return appError;
};

export const createValidationError = (message) => {
  return new AppError(ErrorCodes.VALIDATION_ERROR, message);
};

export const createAuthError = (message) => {
  return new AppError(ErrorCodes.AUTH_ERROR, message);
};

export const createServerError = (message) => {
  return new AppError(ErrorCodes.SERVER_ERROR, message);
};