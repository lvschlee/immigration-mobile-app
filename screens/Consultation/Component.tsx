import React from 'react';

import { View, Text, TextInput, Button } from 'react-native';

import { styles } from './styles';

export function ConsultationScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Получить консультацию</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Фио</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Номер телефона</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput style={styles.input} />
        </View>

        <View>
          <Button title="Отправить" onPress={console.info} />
        </View>
      </View>
    </View>
  );
}
