import React, { useState } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import {Schedule} from './src/screens/schedule'
import {Login} from './src/screens/login'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

async function loadApp(){
  await Font.loadAsync({
    'Montserrat-SemiBold':require('./fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Medium':require('./fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular':require('./fonts/Montserrat-Regular.ttf')
  })
}
const Stack = createStackNavigator();
function App() {
  const [isReady, setIsReady] = useState(false)
  if(!isReady){
    return <AppLoading 
    startAsync={loadApp}
    onError={err=>console.log(err)}
    onFinish={()=>setIsReady(true)}
    />
  }
  else{
  return (
    
    <NavigationContainer >
      
      <Stack.Navigator
       screenOptions={{
        headerShown: false
        
      }}
      >
        <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Schedule" component={Schedule} />
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}
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
export default App;