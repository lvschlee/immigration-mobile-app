import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';

import { Tabs } from './navigation';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
