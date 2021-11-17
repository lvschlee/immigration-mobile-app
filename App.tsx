import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';

import { Root } from './Root';

import { PostDetails } from './screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Root}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="PostDetails" component={PostDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
