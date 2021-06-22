import React, { useState } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import {Schedule} from './src/screens/schedule'
import {Login} from './src/screens/login'
import Nav from './src/nav'
import {News} from './src/screens/news'
import {Brs} from './src/screens/brs'
import {Messages} from './src/screens/messages'
import {Profile} from './src/screens/profile'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './src/RootNavigation';
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
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
       screenOptions={{
        headerShown: false 
      }}
      >
        <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="News" component={News} />
      <Stack.Screen name="Brs" component={Brs} />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="Schedule" component={Schedule} />
      <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
      <View style={styles.menu}>
        <Nav hidden={false}/>
      </View>
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
  menu:{
    width:'100%',
  }
});
export default App;