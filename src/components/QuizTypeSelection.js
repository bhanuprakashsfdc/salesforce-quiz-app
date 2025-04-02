import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { QUIZ_TYPES, THEME } from '../constants/constants';

const QuizTypeSelection = ({ onSelectType }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Quiz Type</Text>
      <View style={styles.buttonContainer}>
        {Object.entries(QUIZ_TYPES).map(([key, value]) => (
          <TouchableOpacity
            key={key}
            testID={`quiz-type-${value}`}
            style={styles.button}
            onPress={() => onSelectType(value)}
          >
            <Text style={styles.buttonText}>
              {value.replace('_', ' ').toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME.light.text,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  button: {
    backgroundColor: THEME.light.primary,
    padding: 15,
    borderRadius: 10,
    minWidth: 150,
    margin: 5,
  },
  buttonText: {
    color: THEME.light.background,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default QuizTypeSelection;