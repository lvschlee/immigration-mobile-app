import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Button } from 'react-native';
import { styles } from './styles';

export function HomeScreen({ navigation }: NativeStackScreenProps<any>) {
  return (
    <View style={styles.container}>
      <Button
        title="Пройти опрос"
        onPress={() => {
          console.info('test');
        }}
      />
    </View>
  );
}
