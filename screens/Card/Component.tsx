import React, { useState } from 'react';

import { Alert } from 'react-native';
import { Box, Input, Heading, Button } from 'native-base';
import { CardField, useConfirmPayment } from '@stripe/stripe-react-native';

import { styles } from './styles';

export function CardScreen({ navigation }: any) {
  const { confirmPayment, loading } = useConfirmPayment();
  const [email, setEmail] = useState<any>();
  const [cardDetails, setCardDetails] = useState<any>();

  const fetchPaymentIntentClientSecret = async () => {
    try {
      const response = await fetch(
        'https://functions.yandexcloud.net/d4ea0vqqaatsahlv04n1',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const { clientSecret, error } = await response.json();

      return { clientSecret, error };
    } catch (error) {
      console.error(error);

      return { clientSecret: null, error };
    }
  };

  const handleSubmit = async () => {
    if (!cardDetails?.complete || !email) {
      Alert.alert('Пожалуйста заполните данные карты и email');
    }

    const billingDetails = { email };

    const { clientSecret, error } = await fetchPaymentIntentClientSecret();

    if (error) {
      Alert.alert('При обработке платежа произошла ошибка');
    } else {
      const { paymentIntent, error } = await confirmPayment(clientSecret, {
        type: 'Card',
        billingDetails,
      });

      console.info('payload', {
        clientSecret,
        payload: {
          type: 'Card',
          billingDetails,
        },
      });
      console.info('paymentIntent', paymentIntent);
      console.info('error', error);

      if (error) {
        Alert.alert(
          'При обработке платежа произошла ошибка'
        );
      } else if (paymentIntent) {
        Alert.alert('Ваш платеж был успешно обработан');
      }
    }
  };

  return (
    <Box p={4} flex="1" justifyContent="center" backgroundColor="#ffffff">
      <Heading mb="2">Платежные данные</Heading>

      <Box>
        <Input
          placeholder="E-mail"
          borderRadius={3}
          backgroundColor="coolGray.100"
          onChange={event => setEmail(event.nativeEvent.text)}
        />
      </Box>

      <Box
        mb="2"
        style={styles.wrapper}
        borderColor="coolGray.100"
        backgroundColor="coolGray.100"
      >
        <CardField
          postalCodeEnabled={false}
          placeholder={{
            number: '4242 4242 4242 4242',
          }}
          style={styles.input}
          onCardChange={setCardDetails}
        />
      </Box>

      <Box>
        <Button onPress={handleSubmit}>Оплатить</Button>
      </Box>
    </Box>
  );
}
