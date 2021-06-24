import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Svg, { Circle, Path } from "react-native-svg"
export const Messages = () => {

  return (
    <ScrollView>
      <View style={styles.containe}>
        <View style={styles.container}>
          <Text style={styles.header}>Сообщения</Text>
          <View style={styles.message}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={55}
              height={55}
              fill="none"
              viewBox="0 0 55 55"
              style={styles.icon}
            >
              <Circle cx={27.5} cy={27.5} r={27.5} fill="#7AC7FF" />
              <Path
                fill="#626568"
                d="M25.712 34.464V36h-11.88V19.2h11.52v1.536h-9.744v5.976h8.688v1.512h-8.688v6.24h10.104zm13.9-7.128c1.168.24 2.056.712 2.664 1.416.608.688.912 1.592.912 2.712 0 1.456-.52 2.576-1.56 3.36-1.024.784-2.536 1.176-4.536 1.176h-7.44V19.2h6.984c1.792 0 3.192.368 4.2 1.104 1.008.736 1.512 1.8 1.512 3.192 0 .944-.24 1.744-.72 2.4-.48.64-1.152 1.12-2.016 1.44zm-8.208-.528h5.136c1.296 0 2.288-.264 2.976-.792.704-.528 1.056-1.296 1.056-2.304 0-1.008-.352-1.776-1.056-2.304-.688-.528-1.68-.792-2.976-.792h-5.136v6.192zm5.688 7.776c2.896 0 4.344-1.08 4.344-3.24 0-2.112-1.448-3.168-4.344-3.168h-5.688v6.408h5.688z"
              />
            </Svg>
            <View style={styles.message_container}>
              <Text style={styles.message_header}>Основы программирования</Text>
              <Text style={styles.message_text}>Независимые государства неоднозначны и будут объявлены</Text>
            </View>
            <Text style={styles.message_date}>сег</Text>
          </View>
          <View style={styles.message}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={55}
              height={55}
              fill="none"
              viewBox="0 0 55 55"
              style={styles.icon}
            >
              <Circle cx={27.5} cy={27.5} r={27.5} fill="#7AC7FF" />
              <Path
                fill="#626568"
                d="M25.712 34.464V36h-11.88V19.2h11.52v1.536h-9.744v5.976h8.688v1.512h-8.688v6.24h10.104zm13.9-7.128c1.168.24 2.056.712 2.664 1.416.608.688.912 1.592.912 2.712 0 1.456-.52 2.576-1.56 3.36-1.024.784-2.536 1.176-4.536 1.176h-7.44V19.2h6.984c1.792 0 3.192.368 4.2 1.104 1.008.736 1.512 1.8 1.512 3.192 0 .944-.24 1.744-.72 2.4-.48.64-1.152 1.12-2.016 1.44zm-8.208-.528h5.136c1.296 0 2.288-.264 2.976-.792.704-.528 1.056-1.296 1.056-2.304 0-1.008-.352-1.776-1.056-2.304-.688-.528-1.68-.792-2.976-.792h-5.136v6.192zm5.688 7.776c2.896 0 4.344-1.08 4.344-3.24 0-2.112-1.448-3.168-4.344-3.168h-5.688v6.408h5.688z"
              />
            </Svg>
            <View style={styles.message_container}>
              <Text style={styles.message_header}>Теория вероятностей и математ...</Text>
              <Text style={styles.message_text}>Постоянный количественный рост и сфера нашей активности.</Text>
            </View>
            <Text style={styles.message_date}>сег</Text>
          </View>
          <View style={styles.message_last}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={55}
              height={55}
              fill="none"
              viewBox="0 0 55 55"
              style={styles.icon}
            >
              <Circle cx={27.5} cy={27.5} r={27.5} fill="#7AC7FF" />
              <Path
                fill="#626568"
                d="M25.712 34.464V36h-11.88V19.2h11.52v1.536h-9.744v5.976h8.688v1.512h-8.688v6.24h10.104zm13.9-7.128c1.168.24 2.056.712 2.664 1.416.608.688.912 1.592.912 2.712 0 1.456-.52 2.576-1.56 3.36-1.024.784-2.536 1.176-4.536 1.176h-7.44V19.2h6.984c1.792 0 3.192.368 4.2 1.104 1.008.736 1.512 1.8 1.512 3.192 0 .944-.24 1.744-.72 2.4-.48.64-1.152 1.12-2.016 1.44zm-8.208-.528h5.136c1.296 0 2.288-.264 2.976-.792.704-.528 1.056-1.296 1.056-2.304 0-1.008-.352-1.776-1.056-2.304-.688-.528-1.68-.792-2.976-.792h-5.136v6.192zm5.688 7.776c2.896 0 4.344-1.08 4.344-3.24 0-2.112-1.448-3.168-4.344-3.168h-5.688v6.408h5.688z"
              />
            </Svg>
            <View style={styles.message_container}>
              <Text style={styles.message_header}>Основы программирования</Text>
              <Text style={styles.message_text}>Независимые государства неоднозначны и будут объявлены</Text>
            </View>
            <Text style={styles.message_date}>сег</Text>
          </View>
          <View style={styles.message_last}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={55}
              height={55}
              fill="none"
              viewBox="0 0 55 55"
              style={styles.icon}
            >
              <Circle cx={27.5} cy={27.5} r={27.5} fill="#7AC7FF" />
              <Path
                fill="#626568"
                d="M25.712 34.464V36h-11.88V19.2h11.52v1.536h-9.744v5.976h8.688v1.512h-8.688v6.24h10.104zm13.9-7.128c1.168.24 2.056.712 2.664 1.416.608.688.912 1.592.912 2.712 0 1.456-.52 2.576-1.56 3.36-1.024.784-2.536 1.176-4.536 1.176h-7.44V19.2h6.984c1.792 0 3.192.368 4.2 1.104 1.008.736 1.512 1.8 1.512 3.192 0 .944-.24 1.744-.72 2.4-.48.64-1.152 1.12-2.016 1.44zm-8.208-.528h5.136c1.296 0 2.288-.264 2.976-.792.704-.528 1.056-1.296 1.056-2.304 0-1.008-.352-1.776-1.056-2.304-.688-.528-1.68-.792-2.976-.792h-5.136v6.192zm5.688 7.776c2.896 0 4.344-1.08 4.344-3.24 0-2.112-1.448-3.168-4.344-3.168h-5.688v6.408h5.688z"
              />
            </Svg>
            <View style={styles.message_container}>
              <Text style={styles.message_header}>Основы программирования</Text>
              <Text style={styles.message_text}>Независимые государства неоднозначны и будут объявлены</Text>
            </View>
            <Text style={styles.message_date}>сег</Text>
          </View>
          <View style={styles.message_last}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={55}
              height={55}
              fill="none"
              viewBox="0 0 55 55"
              style={styles.icon}
            >
              <Circle cx={27.5} cy={27.5} r={27.5} fill="#7AC7FF" />
              <Path
                fill="#626568"
                d="M25.712 34.464V36h-11.88V19.2h11.52v1.536h-9.744v5.976h8.688v1.512h-8.688v6.24h10.104zm13.9-7.128c1.168.24 2.056.712 2.664 1.416.608.688.912 1.592.912 2.712 0 1.456-.52 2.576-1.56 3.36-1.024.784-2.536 1.176-4.536 1.176h-7.44V19.2h6.984c1.792 0 3.192.368 4.2 1.104 1.008.736 1.512 1.8 1.512 3.192 0 .944-.24 1.744-.72 2.4-.48.64-1.152 1.12-2.016 1.44zm-8.208-.528h5.136c1.296 0 2.288-.264 2.976-.792.704-.528 1.056-1.296 1.056-2.304 0-1.008-.352-1.776-1.056-2.304-.688-.528-1.68-.792-2.976-.792h-5.136v6.192zm5.688 7.776c2.896 0 4.344-1.08 4.344-3.24 0-2.112-1.448-3.168-4.344-3.168h-5.688v6.408h5.688z"
              />
            </Svg>
            <View style={styles.message_container}>
              <Text style={styles.message_header}>Основы программирования</Text>
              <Text style={styles.message_text}>Независимые государства неоднозначны и будут объявлены</Text>
            </View>
            <Text style={styles.message_date}>сег</Text>
          </View>
          <View style={styles.message_last}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={55}
              height={55}
              fill="none"
              viewBox="0 0 55 55"
              style={styles.icon}
            >
              <Circle cx={27.5} cy={27.5} r={27.5} fill="#7AC7FF" />
              <Path
                fill="#626568"
                d="M25.712 34.464V36h-11.88V19.2h11.52v1.536h-9.744v5.976h8.688v1.512h-8.688v6.24h10.104zm13.9-7.128c1.168.24 2.056.712 2.664 1.416.608.688.912 1.592.912 2.712 0 1.456-.52 2.576-1.56 3.36-1.024.784-2.536 1.176-4.536 1.176h-7.44V19.2h6.984c1.792 0 3.192.368 4.2 1.104 1.008.736 1.512 1.8 1.512 3.192 0 .944-.24 1.744-.72 2.4-.48.64-1.152 1.12-2.016 1.44zm-8.208-.528h5.136c1.296 0 2.288-.264 2.976-.792.704-.528 1.056-1.296 1.056-2.304 0-1.008-.352-1.776-1.056-2.304-.688-.528-1.68-.792-2.976-.792h-5.136v6.192zm5.688 7.776c2.896 0 4.344-1.08 4.344-3.24 0-2.112-1.448-3.168-4.344-3.168h-5.688v6.408h5.688z"
              />
            </Svg>
            <View style={styles.message_container}>
              <Text style={styles.message_header}>Основы программирования</Text>
              <Text style={styles.message_text}>Независимые государства неоднозначны и будут объявлены</Text>
            </View>
            <Text style={styles.message_date}>сег</Text>
          </View>
          <View style={styles.message_last}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={55}
              height={55}
              fill="none"
              viewBox="0 0 55 55"
              style={styles.icon}
            >
              <Circle cx={27.5} cy={27.5} r={27.5} fill="#7AC7FF" />
              <Path
                fill="#626568"
                d="M25.712 34.464V36h-11.88V19.2h11.52v1.536h-9.744v5.976h8.688v1.512h-8.688v6.24h10.104zm13.9-7.128c1.168.24 2.056.712 2.664 1.416.608.688.912 1.592.912 2.712 0 1.456-.52 2.576-1.56 3.36-1.024.784-2.536 1.176-4.536 1.176h-7.44V19.2h6.984c1.792 0 3.192.368 4.2 1.104 1.008.736 1.512 1.8 1.512 3.192 0 .944-.24 1.744-.72 2.4-.48.64-1.152 1.12-2.016 1.44zm-8.208-.528h5.136c1.296 0 2.288-.264 2.976-.792.704-.528 1.056-1.296 1.056-2.304 0-1.008-.352-1.776-1.056-2.304-.688-.528-1.68-.792-2.976-.792h-5.136v6.192zm5.688 7.776c2.896 0 4.344-1.08 4.344-3.24 0-2.112-1.448-3.168-4.344-3.168h-5.688v6.408h5.688z"
              />
            </Svg>
            <View style={styles.message_container}>
              <Text style={styles.message_header}>Основы программирования</Text>
              <Text style={styles.message_text}>Независимые государства неоднозначны и будут объявлены</Text>
            </View>
            <Text style={styles.message_date}>сег</Text>
          </View>
          <View style={styles.message_last}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={55}
              height={55}
              fill="none"
              viewBox="0 0 55 55"
              style={styles.icon}
            >
              <Circle cx={27.5} cy={27.5} r={27.5} fill="#7AC7FF" />
              <Path
                fill="#626568"
                d="M25.712 34.464V36h-11.88V19.2h11.52v1.536h-9.744v5.976h8.688v1.512h-8.688v6.24h10.104zm13.9-7.128c1.168.24 2.056.712 2.664 1.416.608.688.912 1.592.912 2.712 0 1.456-.52 2.576-1.56 3.36-1.024.784-2.536 1.176-4.536 1.176h-7.44V19.2h6.984c1.792 0 3.192.368 4.2 1.104 1.008.736 1.512 1.8 1.512 3.192 0 .944-.24 1.744-.72 2.4-.48.64-1.152 1.12-2.016 1.44zm-8.208-.528h5.136c1.296 0 2.288-.264 2.976-.792.704-.528 1.056-1.296 1.056-2.304 0-1.008-.352-1.776-1.056-2.304-.688-.528-1.68-.792-2.976-.792h-5.136v6.192zm5.688 7.776c2.896 0 4.344-1.08 4.344-3.24 0-2.112-1.448-3.168-4.344-3.168h-5.688v6.408h5.688z"
              />
            </Svg>
            <View style={styles.message_container}>
              <Text style={styles.message_header}>Основы программирования</Text>
              <Text style={styles.message_text}>Независимые государства неоднозначны и будут объявлены</Text>
            </View>
            <Text style={styles.message_date}>сег</Text>
          </View>
          <View style={styles.message_last}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={55}
              height={55}
              fill="none"
              viewBox="0 0 55 55"
              style={styles.icon}
            >
              <Circle cx={27.5} cy={27.5} r={27.5} fill="#7AC7FF" />
              <Path
                fill="#626568"
                d="M25.712 34.464V36h-11.88V19.2h11.52v1.536h-9.744v5.976h8.688v1.512h-8.688v6.24h10.104zm13.9-7.128c1.168.24 2.056.712 2.664 1.416.608.688.912 1.592.912 2.712 0 1.456-.52 2.576-1.56 3.36-1.024.784-2.536 1.176-4.536 1.176h-7.44V19.2h6.984c1.792 0 3.192.368 4.2 1.104 1.008.736 1.512 1.8 1.512 3.192 0 .944-.24 1.744-.72 2.4-.48.64-1.152 1.12-2.016 1.44zm-8.208-.528h5.136c1.296 0 2.288-.264 2.976-.792.704-.528 1.056-1.296 1.056-2.304 0-1.008-.352-1.776-1.056-2.304-.688-.528-1.68-.792-2.976-.792h-5.136v6.192zm5.688 7.776c2.896 0 4.344-1.08 4.344-3.24 0-2.112-1.448-3.168-4.344-3.168h-5.688v6.408h5.688z"
              />
            </Svg>
            <View style={styles.message_container}>
              <Text style={styles.message_header}>Основы программирования</Text>
              <Text style={styles.message_text}>Независимые государства неоднозначны и будут объявлены</Text>
            </View>
            <Text style={styles.message_date}>сег</Text>
          </View>
          <View style={styles.message_last}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={55}
              height={55}
              fill="none"
              viewBox="0 0 55 55"
              style={styles.icon}
            >
              <Circle cx={27.5} cy={27.5} r={27.5} fill="#7AC7FF" />
              <Path
                fill="#626568"
                d="M25.712 34.464V36h-11.88V19.2h11.52v1.536h-9.744v5.976h8.688v1.512h-8.688v6.24h10.104zm13.9-7.128c1.168.24 2.056.712 2.664 1.416.608.688.912 1.592.912 2.712 0 1.456-.52 2.576-1.56 3.36-1.024.784-2.536 1.176-4.536 1.176h-7.44V19.2h6.984c1.792 0 3.192.368 4.2 1.104 1.008.736 1.512 1.8 1.512 3.192 0 .944-.24 1.744-.72 2.4-.48.64-1.152 1.12-2.016 1.44zm-8.208-.528h5.136c1.296 0 2.288-.264 2.976-.792.704-.528 1.056-1.296 1.056-2.304 0-1.008-.352-1.776-1.056-2.304-.688-.528-1.68-.792-2.976-.792h-5.136v6.192zm5.688 7.776c2.896 0 4.344-1.08 4.344-3.24 0-2.112-1.448-3.168-4.344-3.168h-5.688v6.408h5.688z"
              />
            </Svg>
            <View style={styles.message_container}>
              <Text style={styles.message_header}>Основы программирования</Text>
              <Text style={styles.message_text}>Независимые государства неоднозначны и будут объявлены</Text>
            </View>
            <Text style={styles.message_date}>сег</Text>
          </View>
          <View style={styles.message_last}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={55}
              height={55}
              fill="none"
              viewBox="0 0 55 55"
              style={styles.icon}
            >
              <Circle cx={27.5} cy={27.5} r={27.5} fill="#7AC7FF" />
              <Path
                fill="#626568"
                d="M25.712 34.464V36h-11.88V19.2h11.52v1.536h-9.744v5.976h8.688v1.512h-8.688v6.24h10.104zm13.9-7.128c1.168.24 2.056.712 2.664 1.416.608.688.912 1.592.912 2.712 0 1.456-.52 2.576-1.56 3.36-1.024.784-2.536 1.176-4.536 1.176h-7.44V19.2h6.984c1.792 0 3.192.368 4.2 1.104 1.008.736 1.512 1.8 1.512 3.192 0 .944-.24 1.744-.72 2.4-.48.64-1.152 1.12-2.016 1.44zm-8.208-.528h5.136c1.296 0 2.288-.264 2.976-.792.704-.528 1.056-1.296 1.056-2.304 0-1.008-.352-1.776-1.056-2.304-.688-.528-1.68-.792-2.976-.792h-5.136v6.192zm5.688 7.776c2.896 0 4.344-1.08 4.344-3.24 0-2.112-1.448-3.168-4.344-3.168h-5.688v6.408h5.688z"
              />
            </Svg>
            <View style={styles.message_container}>
              <Text style={styles.message_header}>Основы программирования</Text>
              <Text style={styles.message_text}>Независимые государства неоднозначны и будут объявлены</Text>
            </View>
            <Text style={styles.message_date}>сег</Text>
          </View>

        </View>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 127,
    justifyContent: 'center',
    backgroundColor: '#fff',
    flexWrap: 'wrap',
  },
  containe: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    fontSize: 21,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 40,
  },
  message: {
    width: '100%',
    height: 76,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: 'rgba(208, 208, 208, 1)'
  },
  message_last: {
    width: '100%',
    height: 76,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: 'rgba(208, 208, 208, 1)'
  },
  icon: {
    marginLeft: 8,
    marginRight: 16,
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  message_header: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    width: '100%',
    maxHeight: 17,
    maxWidth: 260
  },
  message_text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    width: '100%',
    maxHeight: 30,
    marginTop: 3,
    maxWidth: 260
  },
  message_container: {
    flexDirection: 'column',
    flex: 1,
    marginTop: 10,
    maxWidth: 270
  },
  message_date: {
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'right',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});
