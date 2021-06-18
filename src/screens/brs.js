import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Brs = () =>  {
 
  return (
    <View style={styles.container}>
     <Text>Брс</Text>
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
