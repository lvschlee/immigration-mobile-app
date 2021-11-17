import React from 'react';

import { Heading, Box, Center, Text, Image, Button } from 'native-base';

import { styles } from './styles';

export function ShopScreen() {
  return (
    <Box style={styles.container}>
      <Center style={styles.card}>
        <Image
          resizeMode="contain"
          alt="Двадцать тысяч лье под водой"
          style={styles.image}
          source={{
            uri: 'https://img-gorod.ru/24/059/2405968_detail.jpg',
          }}
        />
        <Heading textAlign="center">Двадцать тысяч лье под водой</Heading>
        <Text style={styles.description}>
          В 1870 году, после мучительных поисков героя, названия, сюжета, стиля
          произведения, Жюль Верн напечатал роман "Двадцать тысяч лье под
          водой".
        </Text>
      </Center>

      <Box style={styles.footer}>
        <Button
          onPress={() => {
            console.info('buy');
          }}
        >
          Купить за 2500р
        </Button>
      </Box>
    </Box>
  );
}
