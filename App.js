import React, { useState } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import {Schedule} from './src/schedule'


async function loadApp(){
  await Font.loadAsync({
    'Montserrat-SemiBold':require('./fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Medium':require('./fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular':require('./fonts/Montserrat-Regular.ttf')
  })
}

export default function App() {
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
    <View style={styles.container}>
      
      <Schedule />
    </View>
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
