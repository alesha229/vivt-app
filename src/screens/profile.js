import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Profile = () =>  {
 
  return (
    <View style={styles.container}>
     <Text>Профиль</Text>
    </View>
  );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center'
  },
});
