import React from 'react';

import { Heading, Box, Center, Text, Image, Button } from 'native-base';

import { SafeAreaView, ScrollView } from 'react-native';

import { styles } from './styles';

export function ShopScreen({ navigation }: any) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <ScrollView>
        <Box flex="1" alignItems="center" pt="3" pb="3">
          <Center style={styles.card}>
            <Image
              height={285}
              width={300}
              source={require('./book.jpg')}
              alt="Процесс бизнес иммиграции в США"
              resizeMode="contain"
            />

            <Heading textAlign="center">
              Процесс бизнес иммиграции в США
            </Heading>
            <Heading textAlign="center" size="sm" mb="2">
              Чем поможет вам эта книга:
            </Heading>
            <Box>
              <Text>&#8226; Вы увидите общую картину бизнес иммиграции;</Text>
              <Text>
                &#8226; Вы сможете проанализировать свою ситуацию и понять, что
                вам нужно сделать для получения грин-карты;
              </Text>
              <Text>
                &#8226; Узнать основные шаги по привлечению со-инвесторов;
              </Text>
              <Text>&#8226; Выстроить свой индивидуальный план действий;</Text>
            </Box>
            <Box>
              <Heading textAlign="center" size="sm" mb="2">
                Авторы
              </Heading>
              <Text mb="3">
                <Text fontWeight="bold">Николай Сафонов</Text> – брокер и
                бизнес-консультант. Живет в США с 1999 г. Получил Green card
                через визу L-1. Окончил Колумбийский Университет, имеет степень
                МВА в США и Великобритании.
              </Text>
              <Text>
                <Text fontWeight="bold">Елизавета Саморукова</Text> –
                иммиграционный адвокат с многолетним стажем. С 2007 года она
                является основателем, президентом и ведущим адвокатом Elizaveta
                V. Samorukova, P.A. – самой крупной во Флориде русскоязычной
                юридической компании, занимающейся вопросами иммиграции.
              </Text>
            </Box>
          </Center>

          <Box style={styles.footer} mt="3">
            <Button onPress={() => navigation.navigate('CardScreen', {})}>
              Купить за 3$
            </Button>
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}
