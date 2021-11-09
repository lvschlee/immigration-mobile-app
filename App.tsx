import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { Tabs } from './navigation';
import { firebaseConfig } from './config';

console.info(firebaseConfig);

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
