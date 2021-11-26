import uuid from 'react-native-uuid';
import { Question } from '../typings';

export function getQuestionWithAnswersAndIDs(question: Question): Question {
  return {
    ...question,
    answers: question.answers.map((answer: any) => ({
      ...answer,
      id: uuid.v4(),
    })),
  };
}
