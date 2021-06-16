import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Schedule} from './schedule'
import {Login} from './login'
import { createStackNavigator } from '@react-navigation/stack';
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

export const Stackk = () =>  {
  const Stack = createStackNavigator();
  return (
    <View style={styles.container}>
      <Stack.Navigator
      initialRouteName='Login'
    screenOptions={{
    headerShown: false
  }}
    >
       <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Schedule" component={Schedule} />
    </Stack.Navigator>
    </View>
  );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginLeft:21,
    marginRight:21
  },
});
