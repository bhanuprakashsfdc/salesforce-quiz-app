import { QUIZ_TYPES } from '../constants/constants';

export const quizData = {
  admin: [
    {
      id: 'admin_1',
      type: QUIZ_TYPES.FLASHCARD,
      question: 'What is a Salesforce Profile?',
      answer: 'A Profile is a collection of settings and permissions that determine what a user can do in Salesforce, including object permissions, field permissions, and user interface settings.',
      difficulty: 'Beginner',
      category: 'Admin'
    },
    {
      id: 'admin_2',
      type: QUIZ_TYPES.MULTIPLE_CHOICE,
      question: 'Which of the following is NOT a type of Salesforce record sharing?',
      options: [
        'Organization-Wide Defaults',
        'Role Hierarchy',
        'Global Sharing',
        'Sharing Rules'
      ],
      correctAnswer: 2,
      explanation: 'Global Sharing is not a type of record sharing in Salesforce. The main types are Organization-Wide Defaults, Role Hierarchy, Sharing Rules, and Manual Sharing.',
      difficulty: 'Intermediate',
      category: 'Admin'
    }
  ],
  development: [
    {
      id: 'dev_1',
      type: QUIZ_TYPES.TRUE_FALSE,
      options: ['True', 'False'],
      question: 'Apex is a strongly typed, object-oriented programming language.',
      answer: true,
      explanation: 'Apex is indeed a strongly typed, object-oriented programming language that allows developers to execute flow and transaction control statements on Salesforce servers.',
      difficulty: 'Beginner',
      category: 'Apex Development'
    },
    {
      id: 'dev_2',
      type: QUIZ_TYPES.SCENARIO,
      question: 'You need to create a trigger that prevents duplicate account records based on account name and billing address. How would you implement this?',
      answer: `Create a before insert/update trigger that:
1. Collects all account names and billing addresses in a Map
2. Queries existing accounts with the same criteria
3. Adds error messages to records that would create duplicates
4. Uses addError() method to prevent saving duplicates`,
      difficulty: 'Advanced',
      category: 'Apex Development'
    }
  ],
  integration: [
    {
      id: 'int_1',
      type: QUIZ_TYPES.MULTIPLE_CHOICE,
      question: 'Which authentication method is recommended for server-to-server integrations with Salesforce?',
      options: [
        'Username-Password Flow',
        'OAuth 2.0 JWT Bearer Flow',
        'Web Server Flow',
        'User-Agent Flow'
      ],
      correctAnswer: 1,
      explanation: 'OAuth 2.0 JWT Bearer Flow is recommended for server-to-server integrations as it provides secure authentication without requiring user intervention.',
      difficulty: 'Advanced',
      category: 'Integration'
    }
  ],
  architect: [
    {
      id: 'arch_1',
      type: QUIZ_TYPES.FLASHCARD,
      question: 'What are the key considerations when designing a scalable Salesforce solution?',
      answer: `1. Governor Limits
2. Data Model Optimization
3. Apex Bulk Patterns
4. Efficient Queries
5. Proper Integration Patterns
6. Asynchronous Processing
7. Cache Usage
8. Security Architecture`,
      difficulty: 'Advanced',
      category: 'Architect'
    }
  ]
};