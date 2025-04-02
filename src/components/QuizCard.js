import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { THEME, QUIZ_TYPES } from '../constants/constants';

const QuizCard = ({ question, options, type, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (index) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);
    onAnswer(index);
  };

  const renderOptions = () => {
    if (type === QUIZ_TYPES.TRUE_FALSE) {
      return [
        <TouchableOpacity
          key="true"
          style={[styles.option, selectedAnswer === 0 && styles.selectedOption]}
          onPress={() => handleAnswer(0)}
        >
          <Text style={styles.optionText}>True</Text>
        </TouchableOpacity>,
        <TouchableOpacity
          key="false"
          style={[styles.option, selectedAnswer === 1 && styles.selectedOption]}
          onPress={() => handleAnswer(1)}
        >
          <Text style={styles.optionText}>False</Text>
        </TouchableOpacity>
      ];
    }

    return options.map((option, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.option, selectedAnswer === index && styles.selectedOption]}
        onPress={() => handleAnswer(index)}
      >
        <Text style={styles.optionText}>{option}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.questionText}>{question}</Text>
        <View style={styles.optionsContainer}>
          {renderOptions()}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  card: {
    backgroundColor: THEME.light.surface,
    borderRadius: 25,
    padding: 25,
    width: '100%',
    maxWidth: 500,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  questionText: {
    fontSize: 22,
    fontWeight: '800',
    color: THEME.light.text,
    marginBottom: 25,
    textAlign: 'center',
    letterSpacing: 0.3,
    lineHeight: 30,
  },
  optionsContainer: {
    marginTop: 25,
    width: '100%',
  },
  option: {
    backgroundColor: THEME.light.background,
    padding: 18,
    borderRadius: 15,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'rgba(21,137,238,0.2)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  selectedOption: {
    backgroundColor: THEME.light.primary,
    borderColor: THEME.light.primary,
    transform: [{ scale: 1.02 }],
  },
  optionText: {
    fontSize: 17,
    color: THEME.light.text,
    textAlign: 'center',
    fontWeight: '600',
    letterSpacing: 0.2,
  },
});

export default QuizCard;