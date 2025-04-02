import AsyncStorage from '@react-native-async-storage/async-storage';
import { environment } from '../config/environment';
import { handleError } from './errorHandler';

const STORAGE_KEYS = {
  QUIZ_PROGRESS: 'quiz_progress',
  USER_PREFERENCES: 'user_preferences',
  CACHED_QUIZ_DATA: 'cached_quiz_data',
  LAST_SYNC: 'last_sync'
};

class StorageManager {
  static async saveQuizProgress(progress) {
    try {
      const key = STORAGE_KEYS.QUIZ_PROGRESS;
      await AsyncStorage.setItem(key, JSON.stringify(progress));
    } catch (error) {
      handleError(error, { context: 'saveQuizProgress' });
    }
  }

  static async getQuizProgress() {
    try {
      const key = STORAGE_KEYS.QUIZ_PROGRESS;
      const progress = await AsyncStorage.getItem(key);
      return progress ? JSON.parse(progress) : null;
    } catch (error) {
      handleError(error, { context: 'getQuizProgress' });
      return null;
    }
  }

  static async saveUserPreferences(preferences) {
    try {
      const key = STORAGE_KEYS.USER_PREFERENCES;
      await AsyncStorage.setItem(key, JSON.stringify(preferences));
    } catch (error) {
      handleError(error, { context: 'saveUserPreferences' });
    }
  }

  static async getUserPreferences() {
    try {
      const key = STORAGE_KEYS.USER_PREFERENCES;
      const preferences = await AsyncStorage.getItem(key);
      return preferences ? JSON.parse(preferences) : null;
    } catch (error) {
      handleError(error, { context: 'getUserPreferences' });
      return null;
    }
  }

  static async cacheQuizData(data) {
    try {
      const key = STORAGE_KEYS.CACHED_QUIZ_DATA;
      const timestamp = new Date().getTime();
      const cacheData = {
        data,
        timestamp
      };
      await AsyncStorage.setItem(key, JSON.stringify(cacheData));
      await AsyncStorage.setItem(STORAGE_KEYS.LAST_SYNC, timestamp.toString());
    } catch (error) {
      handleError(error, { context: 'cacheQuizData' });
    }
  }

  static async getCachedQuizData() {
    try {
      const key = STORAGE_KEYS.CACHED_QUIZ_DATA;
      const cachedData = await AsyncStorage.getItem(key);
      
      if (!cachedData) return null;
      
      const { data, timestamp } = JSON.parse(cachedData);
      const now = new Date().getTime();
      
      // Check if cache is expired
      if (now - timestamp > environment.cacheTimeout) {
        await AsyncStorage.removeItem(key);
        return null;
      }
      
      return data;
    } catch (error) {
      handleError(error, { context: 'getCachedQuizData' });
      return null;
    }
  }

  static async clearAll() {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      handleError(error, { context: 'clearAll' });
    }
  }
}

export default StorageManager;