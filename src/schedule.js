import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Svg, { Path } from "react-native-svg"
export const Schedule = () => {
  return (
    <View style={styles.table}>
      <View style={styles.Schedule}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={14}
          height={27}
          fill="none"
          viewBox="0 0 14 27"
        >
          <Path stroke="#000" d="M13.5 1L1 13.5 13.5 26" />
        </Svg>
        <View><Text style={styles.header}>1 сентября - 7 сентября</Text>
          <Text style={styles.header2}>1 неделя - числитель</Text>
        </View>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="27"
          fill="none"
          viewBox="0 0 14 27"
        >
          <Path stroke="#000" d="M1 26l12.5-12.5L1 1"></Path>
        </Svg>
        <View style={styles.list}>
          <View style={styles.bg}><Text style={styles.header}>Среда, 3 сентября</Text></View>
          <View style={styles.li}>
            <View style={styles.lis}>
              <View style={styles.time}>
                <Text style={styles.timeh}>08:30</Text>
                <Text style={styles.header4}>10:00</Text>
              </View>
              <View style={styles.text}>
                <View><Text style={styles.type}>ПРАКТИКА</Text></View>
                <Text style={styles.item}>Элементы математической логики </Text>
                <Text style={styles.teacher}>Сенкевич А.В.</Text>
              </View>
              <View style={styles.cabinet}>
                <Text style={styles.nubmercub}>407</Text>
              </View>
            </View>
            <View style={styles.lis}>
              <View style={styles.time}>
                <Text style={styles.timeh}>08:30</Text>
                <Text style={styles.header4}>10:00</Text>
              </View>
              <View style={styles.text}>
                <View><Text style={styles.type}>ПРАКТИКА</Text></View>
                <Text style={styles.item}>Элементы математической логики </Text>
                <Text style={styles.teacher}>Сенкевич А.В.</Text>
              </View>
              <View style={styles.cabinet}>
                <Text style={styles.nubmercub}>407</Text>
              </View>
            </View>
            <View style={styles.lis}>
              <View style={styles.time}>
                <Text style={styles.timeh}>08:30</Text>
                <Text style={styles.header4}>10:00</Text>
              </View>
              <View style={styles.text}>
                <View><Text style={styles.type}>ПРАКТИКА</Text></View>
                <Text style={styles.item}>Элементы математической логики </Text>
                <Text style={styles.teacher}>Сенкевич А.В.</Text>
              </View>
              <View style={styles.cabinet}>
                <Text style={styles.nubmercub}>407</Text>
              </View>
            </View>
            <View style={styles.lis}>
              <View style={styles.time}>
                <Text style={styles.timeh}>08:30</Text>
                <Text style={styles.header4}>10:00</Text>
              </View>
              <View style={styles.text}>
                <View><Text style={styles.type}>ПРАКТИКА</Text></View>
                <Text style={styles.item}>Элементы математической логики </Text>
                <Text style={styles.teacher}>Сенкевич А.В.</Text>
              </View>
              <View style={styles.cabinet}>
                <Text style={styles.nubmercub}>407</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Schedule: {
    flexDirection: "row",
    marginTop: 118,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    flexWrap: 'wrap'
  },
  arrow: {
    width: 12,
    height: 25,
    flex: 1,
  },
  header: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center'
  },
  header2: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center'
  },
  header3: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center'
  },
  header4: {
    fontSize: 10,
    fontFamily: 'Montserrat-Medium',
  },
  list: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    width: '100%',
    marginTop: 30,
    elevation: 10,
  },
  bg: {
    paddingTop: 17,
    paddingBottom: 17,
    textAlign: 'center',
    backgroundColor: '#BDE3FF',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  li:{
    backgroundColor: '#fff',
  },
  lis:{
    borderBottomWidth:1,
    borderColor:'#D0D0D0',
    height:81,
    flexDirection:'row'
  },
  timeh:{
    textAlign:'left',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
  },
  time:{
    marginLeft:16,
    marginTop:27,
    marginRight:16,
    width:40
  },
  type:{
    backgroundColor: '#DEF0D8',
    color:'#4A6493',
    fontFamily: 'Montserrat-SemiBold',
    fontSize:8,
    marginTop:10
  },
  text:{
    flexDirection:'row',
    flexWrap:'wrap',
    width:210
  },
  item:{
    width:'100%',
    fontSize:14,
    fontFamily: 'Montserrat-SemiBold',
  },
  cabinet:{
    flexDirection:'row',
    flexWrap:'wrap',
    width:'20%',
    marginTop:32,
    textAlign:'right',
  },
  teacher:{
    fontFamily:'Montserrat-Medium',
    color:'#626568',
    fontSize:11,
    marginTop:3
  },
  nubmercub:{
    flex:1,
    textAlign:'right',
    fontFamily:'Montserrat-Medium',
    color:'#626568',
    fontSize:14
  }
});