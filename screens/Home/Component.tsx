import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';

export function HomeScreen({ navigation }: NativeStackScreenProps<any>) {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Text>Hello world</Text>
      <TextInput />
    </View>
  );
}
