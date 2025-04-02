import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import QuizScreen from '../QuizScreen';
import { QUIZ_TYPES } from '../../constants/constants';

const mockRoute = {
  params: {
    category: 'Admin'
  }
};

const mockNavigate = jest.fn();
const mockGoBack = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
    goBack: mockGoBack
  })
}));

describe('QuizScreen', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
    mockGoBack.mockClear();
  });

  it('renders quiz screen with correct category', () => {
    const { getByText } = render(<QuizScreen route={mockRoute} />);
    expect(getByText(mockRoute.params.category)).toBeTruthy();
  });

  it('displays quiz type selection', () => {
    const { getByText } = render(<QuizScreen route={mockRoute} />);
    Object.values(QUIZ_TYPES).forEach(type => {
      expect(getByText(type.replace('_', ' ').toUpperCase())).toBeTruthy();
    });
  });

  it('handles quiz type selection', () => {
    const { getByTestId } = render(<QuizScreen route={mockRoute} />);
    const flashcardButton = getByTestId(`quiz-type-${QUIZ_TYPES.FLASHCARD}`);
    
    fireEvent.press(flashcardButton);
    
    // Add assertions based on your quiz type selection logic
    // For example, checking if the quiz content is displayed
  });

  it('handles back navigation', () => {
    const { getByTestId } = render(<QuizScreen route={mockRoute} />);
    const backButton = getByTestId('back-button');
    
    fireEvent.press(backButton);
    
    expect(mockGoBack).toHaveBeenCalled();
  });
});