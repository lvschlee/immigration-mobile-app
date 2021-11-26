import uuid from 'react-native-uuid';
import React, { useState, useEffect } from 'react';

import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { Stack, Button, Heading, Box, Radio, Spinner } from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { db } from '../../firebase';
import { getQuestionWithAnswersAndIDs } from '../../utils';

import { Question } from '../../typings';

import { styles } from './styles';

export function HomeScreen({ navigation }: NativeStackScreenProps<any>) {
  const [quizAnswers, setQuizAnswers] = useState<
    { question: string; answer: string }[]
  >([]);
  const [nextQuestionID, setNextQuestionID] = useState<string>();
  const [currentQuestion, setCurrentQuestion] = useState<Question>();
  const [questions = [], loading] = useCollectionData(collection(db, 'quiz'), {
    idField: 'id',
  }) as any;

  useEffect(() => {
    const firstQuestion = questions.find(
      (question: any) => question.isFirst
    ) as Question;

    if (questions && firstQuestion) {
      const current = getQuestionWithAnswersAndIDs(firstQuestion);

      setCurrentQuestion(current);
      setNextQuestionID(current.answers[0].next);
    }
  }, [questions]);

  if (!questions.length || !currentQuestion) {
    return (
      <Box flex="1" alignItems="center" justifyContent="center">
        Нет активных опросов
      </Box>
    );
  }

  const handleCheckAnswer = (id: string) => {
    const _nextQuestionID = currentQuestion.answers.find(
      (answer) => answer.id === id
    )?.next;

    setNextQuestionID(_nextQuestionID);
  };

  const handleClickNext = () => {
    if (nextQuestionID === 'finish') {
      return navigation.navigate('Consultation', {
        answers: [
          ...quizAnswers,
          {
            question: currentQuestion.text,
            answer: currentQuestion.answers[0].text,
          }
        ],
      });
    }

    setQuizAnswers([
      ...quizAnswers,
      {
        question: currentQuestion.text,
        answer: currentQuestion.answers[0].text,
      }
    ]);

    setCurrentQuestion(
      getQuestionWithAnswersAndIDs(
        questions.find((question: Question) => question.id === nextQuestionID)
      )
    );
  };

  if (loading) {
    return (
      <Box flex="1" justifyContent="center">
        <Spinner />
      </Box>
    );
  }

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      style={styles.container}
      flex="1"
    >
      <Box px={5}>
        <Heading textAlign="center">{currentQuestion.text}</Heading>
      </Box>

      <Box my={5}>
        <Radio.Group
          name="answer"
          accessibilityLabel={currentQuestion.text}
          onChange={handleCheckAnswer}
          defaultValue={currentQuestion.answers[0].id}
        >
          {currentQuestion.answers.map(({ id, text }: any) => (
            <Radio key={id} value={id} my={1}>
              {text}
            </Radio>
          ))}
        </Radio.Group>
      </Box>

      <Box>
        <Button w="250" onPress={handleClickNext}>
          Далее
        </Button>
      </Box>
    </Stack>
  );
}
