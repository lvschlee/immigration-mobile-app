import React, { useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, Button } from 'react-native';
import { Stack, Heading, Box, Radio } from 'native-base';
import { styles } from './styles';

const items = [
  {
    key: '1',
    value: 'В качестве беженца',
  },
  {
    key: '2',
    value: 'В качестве родственика',
  },
  {
    key: '3',
    value: 'В качестве инвестора',
  },
];

export function HomeScreen({ navigation }: NativeStackScreenProps<any>) {
  const [answer, setAnswer] = useState('1');

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      style={styles.container}
      flex="1"
    >
      <Box px={5}>
        <Heading textAlign="center">
          Какой вариант иммиграции для вас наиболее привлекателен?
        </Heading>
        <Text style={styles.title}></Text>
      </Box>

      <Box my={5}>
        <Radio.Group name="quiz" value={answer} onChange={setAnswer}>
          {items.map(({ key, value }) => (
            <Radio key={key} value={key} my={1}>
              {value}
            </Radio>
          ))}
        </Radio.Group>
      </Box>

      <Box>
        <Button
          title="Далее"
          onPress={() => {
            console.info('test');
          }}
        />
      </Box>
    </Stack>
  );
}
