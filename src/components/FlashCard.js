import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated } from 'react-native';
import { THEME } from '../constants/constants';

const FlashCard = ({ question, answer, difficulty }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [flipAnim] = useState(new Animated.Value(0));

  const flipCard = () => {
    Animated.spring(flipAnim, {
      toValue: isFlipped ? 0 : 180,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();
    setIsFlipped(!isFlipped);
  };

  const frontAnimatedStyle = {
    transform: [
      {
        rotateY: flipAnim.interpolate({
          inputRange: [0, 180],
          outputRange: ['0deg', '180deg'],
        }),
      },
    ],
  };

  const backAnimatedStyle = {
    transform: [
      {
        rotateY: flipAnim.interpolate({
          inputRange: [0, 180],
          outputRange: ['180deg', '360deg'],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={flipCard} activeOpacity={0.9}>
        <View style={styles.cardContainer}>
          <Animated.View style={[styles.card, styles.frontCard, frontAnimatedStyle]}>
            <Text style={styles.difficultyText}>{difficulty}</Text>
            <Text style={styles.questionText}>{question}</Text>
            <Text style={styles.flipText}>Tap to flip</Text>
          </Animated.View>
          <Animated.View style={[styles.card, styles.backCard, backAnimatedStyle]}>
            <Text style={styles.answerText}>{answer}</Text>
            <Text style={styles.flipText}>Tap to flip back</Text>
          </Animated.View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  cardContainer: {
    width: 300,
    height: 400,
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: THEME.light.surface,
    borderRadius: 20,
    padding: 20,
    position: 'absolute',
    backfaceVisibility: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  frontCard: {
    backgroundColor: THEME.light.primary,
  },
  backCard: {
    backgroundColor: THEME.light.secondary,
  },
  difficultyText: {
    color: THEME.light.background,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  questionText: {
    color: THEME.light.background,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  answerText: {
    color: THEME.light.background,
    fontSize: 18,
    textAlign: 'left',
    marginVertical: 20,
    lineHeight: 24,
  },
  flipText: {
    color: THEME.light.background,
    fontSize: 14,
    textAlign: 'center',
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignSelf: 'center',
  },
});

export default FlashCard;