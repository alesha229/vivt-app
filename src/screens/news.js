import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const News = ({navigation}) =>  {
  return (
    <View style={styles.container}>
     <Text>Новости</Text>
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
