import uuid from 'react-native-uuid';
import React, { useState } from 'react';

import { doc, setDoc } from 'firebase/firestore';

import { useForm, Controller } from 'react-hook-form';
import {
  Heading,
  Box,
  Button,
  Input,
  Text,
  Alert,
  VStack,
  HStack,
} from 'native-base';

import { styles } from './styles';

import { db } from '../../firebase';

export function ConsultationScreen({ route }: any) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const defaultValues = {
    fio: '',
    phone: '',
    email: '',
  };

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      const id = String(uuid.v4());

      await setDoc(doc(db, 'orders', id), {
        ...data,
        answers: route.params.answers ?? [],
      });

      reset(defaultValues);
      setMessage(
        'Ваша заявка успешно отправлена, в ближайшее время наш менеджер свяжется с вами'
      );

      setTimeout(() => setMessage(''), 2000);
    } catch (e) {
      setMessage(
        'Что то пошло не так, попробуйте повторить попытку позднее'
      );

      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box style={styles.container}>
      <Heading mb="4" textAlign="center">
        Получить консультацию
      </Heading>

      <Box>
        <Box mb="6">
          <Text style={styles.label}>Фио</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input onChangeText={onChange} onBlur={onBlur} value={value} />
            )}
            rules={{
              required: true,
            }}
            name="fio"
          />
          {errors.fio && (
            <Text mt="1" style={styles.error}>
              Поле обязательно к заполнению
            </Text>
          )}
        </Box>

        <Box mb="6">
          <Text style={styles.label}>Номер телефона</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input onChangeText={onChange} onBlur={onBlur} value={value} />
            )}
            rules={{
              required: true,
            }}
            name="phone"
          />
          {errors.phone && (
            <Text mt="1" style={styles.error}>
              Поле обязательно к заполнению
            </Text>
          )}
        </Box>

        <Box mb="6">
          <Text style={styles.label}>E-mail</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input onChangeText={onChange} onBlur={onBlur} value={value} />
            )}
            rules={{
              required: true,
            }}
            name="email"
          />
          {errors.email && (
            <Text mt="1" style={styles.error}>
              Поле обязательно к заполнению
            </Text>
          )}
        </Box>

        <Box>
          <Button onPress={handleSubmit(onSubmit)} isLoading={loading}>
            Отправить
          </Button>
        </Box>

        {message && (
          <Box mt="4">
            <Alert w="100%" colorScheme="success" status="success">
              <VStack space={2} flexShrink={1} w="100%">
                <HStack
                  flexShrink={1}
                  space={2}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <HStack space={2} flexShrink={1} alignItems="center">
                    <Alert.Icon />
                    <Text color="green.900" textAlign="center" width="90%">
                      {message}
                    </Text>
                  </HStack>
                </HStack>
              </VStack>
            </Alert>
          </Box>
        )}
      </Box>
    </Box>
  );
}
