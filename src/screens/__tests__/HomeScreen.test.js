import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';
import { QUIZ_CATEGORIES } from '../../constants/constants';

const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockNavigate
    })
  };
});

describe('HomeScreen', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('renders all quiz categories', () => {
    const { getAllByTestId } = render(<HomeScreen />);
    const categoryButtons = getAllByTestId('category-button');
    expect(categoryButtons).toHaveLength(QUIZ_CATEGORIES.length);
  });

  it('navigates to quiz screen when category is selected', () => {
    const { getAllByTestId } = render(<HomeScreen />);
    const firstCategoryButton = getAllByTestId('category-button')[0];
    
    fireEvent.press(firstCategoryButton);
    
    expect(mockNavigate).toHaveBeenCalledWith('Quiz', {
      category: QUIZ_CATEGORIES[0]
    });
  });

  it('displays app name from constants', () => {
    const { getByText } = render(<HomeScreen />);
    const appNameElement = getByText('Salesforce QuizMaster');
    expect(appNameElement).toBeTruthy();
  });
});