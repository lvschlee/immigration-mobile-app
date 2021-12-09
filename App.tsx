import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StripeProvider } from '@stripe/stripe-react-native';
import { NativeBaseProvider } from 'native-base';

import { Root } from './Root';

import { PostDetails, CardScreen } from './screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <StripeProvider publishableKey="pk_test_HuI0leFIDYiEPxAuEdGoa0As00zT2m4mru">
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Root"
              component={Root}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PostDetails"
              component={PostDetails}
              options={{
                headerTitle: 'Назад',
              }}
            />
            <Stack.Screen
              name="CardScreen"
              component={CardScreen}
              options={{
                headerTitle: 'Назад',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </StripeProvider>
  );
}
