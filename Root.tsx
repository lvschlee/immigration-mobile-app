import React from 'react';
import IonicIcons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import {
  HomeScreen,
  ShopScreen,
  BlogScreen,
  ConsultationScreen,
} from './screens';

export function Root() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'Опрос',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <IonicIcons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          headerTitle: 'Магазин',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <IonicIcons name="cart-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Blog"
        component={BlogScreen}
        options={{
          headerTitle: 'Блог',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <IonicIcons name="newspaper-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Consultation"
        component={ConsultationScreen}
        options={{
          headerTitle: 'Консультация',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <IonicIcons name="help-buoy-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
