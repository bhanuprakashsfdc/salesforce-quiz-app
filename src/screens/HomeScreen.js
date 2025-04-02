import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { THEME, QUIZ_CATEGORIES } from '../constants/constants';

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const renderCategories = () => {
    return QUIZ_CATEGORIES.map((category, index) => (
      <TouchableOpacity
        key={index}
        testID="category-button"
        style={styles.categoryCard}
        onPress={() => navigation.navigate('Quiz', { category })}
      >
        <Text style={styles.categoryText}>{category}</Text>
      </TouchableOpacity>
    ));
  };

  const renderRecentQuizzes = () => {
    // This will be populated with actual data later
    const recentQuizzes = [
      { id: 1, title: 'Apex Basics', score: '8/10' },
      { id: 2, title: 'Admin Fundamentals', score: '9/10' },
    ];

    return recentQuizzes.map((quiz) => (
      <TouchableOpacity
        key={quiz.id}
        style={styles.recentQuizCard}
        onPress={() => navigation.navigate('Quiz', { quizId: quiz.id })}
      >
        <Text style={styles.recentQuizTitle}>{quiz.title}</Text>
        <Text style={styles.recentQuizScore}>Score: {quiz.score}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Salesforce QuizMaster</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Salesforce topics..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor={THEME.light.text + '80'}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.categoriesContainer}>
          {renderCategories()}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Quizzes</Text>
        <View style={styles.recentQuizzesContainer}>
          {renderRecentQuizzes()}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.light.background,
  },
  header: {
    padding: 25,
    backgroundColor: THEME.light.primary,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: THEME.light.background,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  searchContainer: {
    padding: 20,
    paddingTop: 10,
  },
  searchInput: {
    backgroundColor: THEME.light.background,
    padding: 15,
    borderRadius: 15,
    fontSize: 16,
    color: THEME.light.text,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  section: {
    padding: 20,
    paddingTop: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: THEME.light.text,
    marginBottom: 20,
    letterSpacing: 0.3,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  categoryCard: {
    width: '48%',
    backgroundColor: THEME.light.surface,
    padding: 25,
    borderRadius: 20,
    marginBottom: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  categoryText: {
    fontSize: 17,
    color: THEME.light.text,
    textAlign: 'center',
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  recentQuizzesContainer: {
    marginTop: 5,
    paddingHorizontal: 5,
  },
  recentQuizCard: {
    backgroundColor: THEME.light.background,
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.03)',
  },
  recentQuizTitle: {
    fontSize: 16,
    color: THEME.light.text,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  recentQuizScore: {
    fontSize: 15,
    color: THEME.light.primary,
    fontWeight: '700',
    backgroundColor: 'rgba(21,137,238,0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
});

export default HomeScreen;