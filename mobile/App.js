import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

function Screen({ title }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#09090b', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: '#a3e635', fontSize: 28, fontWeight: '700' }}>{title}</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Feed">{() => <Screen title="Feed" />}</Tab.Screen>
        <Tab.Screen name="Map">{() => <Screen title="Map" />}</Tab.Screen>
        <Tab.Screen name="Events">{() => <Screen title="Events" />}</Tab.Screen>
        <Tab.Screen name="Chat">{() => <Screen title="Chat" />}</Tab.Screen>
        <Tab.Screen name="Profile">{() => <Screen title="Profile" />}</Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
