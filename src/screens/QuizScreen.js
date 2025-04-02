import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import FlashCard from '../components/FlashCard';
import QuizCard from '../components/QuizCard';
import QuizTypeSelection from '../components/QuizTypeSelection';
import { THEME, QUIZ_TYPES } from '../constants/constants';
import { quizData } from '../data/quizData';

const QuizScreen = ({ route, navigation }) => {
  const { category } = route.params;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedQuizType, setSelectedQuizType] = useState(null);

  useEffect(() => {
    // Load questions based on category
    const categoryQuestions = quizData[category.toLowerCase()] || [];
    setQuestions(categoryQuestions);
  }, [category]);

  const handleAnswer = (answer) => {
    const currentQuestion = questions[currentQuestionIndex];
    let isCorrect = false;

    if (currentQuestion.type === QUIZ_TYPES.MULTIPLE_CHOICE || 
        currentQuestion.type === QUIZ_TYPES.TRUE_FALSE) {
      isCorrect = answer === currentQuestion.correctAnswer;
    }

    setUserAnswers([...userAnswers, { 
      question: currentQuestion.question,
      userAnswer: answer,
      isCorrect
    }]);

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const renderQuestion = () => {
    if (questions.length === 0) return null;

    const currentQuestion = questions[currentQuestionIndex];

    switch (currentQuestion.type) {
      case QUIZ_TYPES.FLASHCARD:
        return (
          <FlashCard
            question={currentQuestion.question}
            answer={currentQuestion.answer}
            difficulty={currentQuestion.difficulty}
          />
        );
      case QUIZ_TYPES.MULTIPLE_CHOICE:
      case QUIZ_TYPES.TRUE_FALSE:
        return (
          <QuizCard
            question={currentQuestion.question}
            options={currentQuestion.options}
            type={currentQuestion.type}
            onAnswer={handleAnswer}
          />
        );
      case QUIZ_TYPES.SCENARIO:
        return (
          <FlashCard
            question={currentQuestion.question}
            answer={currentQuestion.answer}
            difficulty={currentQuestion.difficulty}
          />
        );
      default:
        return null;
    }
  };

  const renderResults = () => {
    return (
      <ScrollView style={styles.resultsContainer}>
        <Text style={styles.resultsTitle}>Quiz Results</Text>
        <Text style={styles.scoreText}>
          Score: {score}/{questions.length}
        </Text>
        {userAnswers.map((answer, index) => (
          <View key={index} style={styles.answerReview}>
            <Text style={styles.questionText}>{answer.question}</Text>
            <Text style={[styles.resultText, 
              { color: answer.isCorrect ? THEME.light.success : THEME.light.error }]}>
              {answer.isCorrect ? '✓ Correct' : '✗ Incorrect'}
            </Text>
          </View>
        ))}
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.categoryText}>{category}</Text>
      </View>
      {!selectedQuizType ? (
        <QuizTypeSelection onSelectType={setSelectedQuizType} />
      ) : !showResults ? (
        <>
          <Text style={styles.progressText}>
            Question {currentQuestionIndex + 1} of {questions.length}
          </Text>
          {renderQuestion()}
        </>
      ) : (
        renderResults()
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.light.background,
  },
  header: {
    padding: 20,
    backgroundColor: THEME.light.primary,
  },
  categoryText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME.light.background,
    textAlign: 'center',
  },
  progressText: {
    fontSize: 16,
    color: THEME.light.background,
    textAlign: 'center',
    marginTop: 5,
  },
  resultsContainer: {
    padding: 20,
  },
  resultsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: THEME.light.text,
    textAlign: 'center',
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME.light.primary,
    textAlign: 'center',
    marginBottom: 30,
  },
  answerReview: {
    backgroundColor: THEME.light.surface,
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  questionText: {
    fontSize: 16,
    color: THEME.light.text,
    marginBottom: 10,
  },
  resultText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: THEME.light.primary,
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 40,
  },
  buttonText: {
    color: THEME.light.background,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default QuizScreen;