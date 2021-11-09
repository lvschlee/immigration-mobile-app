import React from 'react';

import { View, Text, Image, Button } from 'react-native';

import { styles } from './styles';

export function ShopScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{
            uri: 'https://img-gorod.ru/24/059/2405968_detail.jpg',
          }}
        />
        <Text style={styles.title}>Двадцать тысяч лье под водой</Text>
        <Text style={styles.description}>
          В 1870 году, после мучительных поисков героя, названия, сюжета, стиля
          произведения, Жюль Верн напечатал роман "Двадцать тысяч лье под
          водой".
        </Text>
      </View>
      <View style={styles.footer}>
        <Button
          title="Купить за 2500р"
          onPress={() => {
            console.info('buy');
          }}
        />
      </View>
    </View>
  );
}
