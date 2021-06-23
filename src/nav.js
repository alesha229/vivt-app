import React, { Component } from 'react'
import { StyleSheet, TextInput, View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import * as RootNavigation from './RootNavigation.js';
export const navigationRef = React.createRef();

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screen: 'Login',
        };
    }
    listener=()=>{
        navigationRef.current?.addListener('state', (e) => {
           this.setState({screen: e.data.state.routes[e.data.state.routes.length - 1].name})
        });
      }
    componentDidMount() {
        setTimeout(() => {
            this.listener()
          },500); 
    }
    render() {
        return (
            <View style={this.state.screen == 'Login' ? styles.hidden : styles.container}>
                <TouchableOpacity
                    onPress={() => {navigationRef.current?.navigate('News')}}
                    style={this.state.screen == 'News' ? styles.menuActive : styles.menu}>
                    <Svg
                        style={styles.icon}
                        xmlns="http://www.w3.org/2000/svg"
                        width={35}
                        height={35}
                        fill="none"
                        viewBox="0 0 35 35"
                    >
                        <Path
                            fill="#4A6493"
                            d="M30.072 7.656h-1.628c-.002 0-.003 0-.005.002a.006.006 0 00-.002.004v20.776a2.188 2.188 0 004.375 0V10.396a2.74 2.74 0 00-2.74-2.74z"
                        />
                        <Path
                            fill="#4A6493"
                            d="M26.25 28.438V4.922a2.735 2.735 0 00-2.734-2.734H4.922a2.734 2.734 0 00-2.734 2.734v24.062a3.828 3.828 0 003.828 3.828h23.437a.078.078 0 00.02-.153 4.382 4.382 0 01-3.223-4.221zM6.562 8.75a1.094 1.094 0 011.094-1.094h4.375a1.094 1.094 0 011.094 1.094v4.375a1.093 1.093 0 01-1.094 1.094H7.656a1.094 1.094 0 01-1.093-1.094V8.75zm14.22 18.594H7.686c-.589 0-1.094-.453-1.123-1.041a1.094 1.094 0 011.092-1.147H20.75c.588 0 1.093.453 1.123 1.041a1.092 1.092 0 01-1.093 1.147zm0-4.375H7.686c-.589 0-1.094-.453-1.123-1.041a1.094 1.094 0 011.092-1.147H20.75c.588 0 1.093.453 1.123 1.041a1.092 1.092 0 01-1.093 1.147zm0-4.375H7.686c-.589 0-1.094-.453-1.123-1.041a1.094 1.094 0 011.092-1.147H20.75c.588 0 1.093.453 1.123 1.041a1.092 1.092 0 01-1.093 1.147zm0-4.375h-4.345c-.589 0-1.094-.453-1.123-1.041a1.092 1.092 0 011.092-1.147h4.345c.588 0 1.093.453 1.123 1.041a1.092 1.092 0 01-1.093 1.147zm0-4.375h-4.345c-.589 0-1.094-.453-1.123-1.041a1.092 1.092 0 011.092-1.147h4.345c.588 0 1.093.453 1.123 1.041a1.092 1.092 0 01-1.093 1.147z"
                        />
                    </Svg>
                    <Text style={styles.text}>Новости</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={this.state.screen== 'Schedule' ? styles.menuActive : styles.menu}
                    onPress={() => {navigationRef.current?.navigate('Schedule')}}
                >
                    <Svg
                        style={styles.icon}
                        xmlns="http://www.w3.org/2000/svg"
                        width={35}
                        height={35}
                        fill="none"
                        viewBox="0 0 35 35"
                    >
                        <Path
                            fill="#4A6493"
                            d="M31.719 7.656H26.25V5.742a.274.274 0 00-.273-.273h-1.915a.274.274 0 00-.273.273v1.914H18.73V5.742a.274.274 0 00-.273-.273h-1.914a.274.274 0 00-.273.273v1.914h-5.06V5.742a.274.274 0 00-.273-.273H9.024a.274.274 0 00-.273.273v1.914h-5.47c-.605 0-1.094.489-1.094 1.094v19.688c0 .605.49 1.093 1.094 1.093H31.72c.605 0 1.093-.488 1.093-1.093V8.75c0-.605-.488-1.094-1.093-1.094zm-17.227 15.86c0 .15-.123.273-.273.273h-6.29a.274.274 0 01-.273-.273v-1.641c0-.15.123-.273.274-.273h6.289c.15 0 .273.123.273.273v1.64zm0-4.649c0 .15-.123.274-.273.274h-6.29a.274.274 0 01-.273-.274v-1.64c0-.15.123-.274.274-.274h6.289c.15 0 .273.123.273.274v1.64zm12.8-3.12l-5.64 7.817a.543.543 0 01-.881 0l-3.903-5.408a.274.274 0 01.222-.434h1.876c.175 0 .339.086.441.226l1.805 2.498 3.544-4.911a.54.54 0 01.441-.226h1.873a.277.277 0 01.223.438z"
                        />
                    </Svg>
                    <Text style={styles.text}>Расписание</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {navigationRef.current?.navigate('Brs')}}
                    style={this.state.screen == 'Brs' ? styles.menuActive : styles.menu}>
                    <Svg
                        style={styles.icon}
                        xmlns="http://www.w3.org/2000/svg"
                        width={35}
                        height={35}
                        fill="none"
                        viewBox="0 0 35 35"
                    >
                        <Path
                            fill="#4A6493"
                            d="M16.791 4.559a1.458 1.458 0 011.418 0l13.125 7.291a1.459 1.459 0 01.75 1.275v10.208a1.458 1.458 0 01-2.917 0v-7.729l-1.459.81v.005l-8.847 4.399a2.917 2.917 0 01-2.695-.051L3.437 13.823a1.46 1.46 0 00-.414-.15 1.458 1.458 0 01.643-1.823l13.125-7.29zm-9.5 14.69v5.543a1.459 1.459 0 00.807 1.303l8.75 4.375a1.458 1.458 0 001.304 0l8.75-4.375a1.459 1.459 0 00.806-1.303v-4.749l-8.87 4.148a2.916 2.916 0 01-2.633-.082L7.292 19.25v-.002z"
                        />
                    </Svg>
                    <Text style={styles.text}>БРС</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {navigationRef.current?.navigate('Messages')}}
                    style={this.state.screen == 'Messages' ? styles.menuActive : styles.menu}>
                    <Svg
                        style={styles.icon}
                        xmlns="http://www.w3.org/2000/svg"
                        width={35}
                        height={35}
                        fill="none"
                        viewBox="0 0 35 35"
                    >
                        <Path
                            fill="#4A6493"
                            d="M10.15 21.35V10.5H3.5A3.51 3.51 0 000 14v10.5A3.51 3.51 0 003.5 28h1.75v5.25L10.5 28h8.75a3.51 3.51 0 003.5-3.5v-3.185a1.647 1.647 0 01-.35.037H10.15v-.002zM31.5 1.75H15.75a3.51 3.51 0 00-3.5 3.5v14H24.5l5.25 5.25v-5.25h1.75a3.51 3.51 0 003.5-3.5V5.25a3.51 3.51 0 00-3.5-3.5z"
                        />
                    </Svg>
                    <Text style={styles.text}>Сообщения</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {navigationRef.current?.navigate('Profile')}}
                    style={this.state.screen == 'Profile' ? styles.menuActive : styles.menu}>
                    <Svg
                        style={styles.icon}
                        xmlns="http://www.w3.org/2000/svg"
                        width={35}
                        height={35}
                        fill="none"
                        viewBox="0 0 35 35"
                    >
                        <Path
                            fill="#4A6493"
                            d="M2.917 35S0 35 0 32.083c0-2.916 2.917-11.666 17.5-11.666S35 29.167 35 32.083C35 35 32.083 35 32.083 35H2.917zM17.5 17.5a8.75 8.75 0 100-17.5 8.75 8.75 0 000 17.5z"
                        />
                    </Svg>
                    <Text style={styles.text}>Профиль</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 58,
        flexDirection: 'row',
    },
    menu: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '20%',
    },
    menuActive: {
        textAlign: 'center',
        width: '20%',
        backgroundColor: 'rgba(122, 199, 255, 0.5)',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    icon: {
        textAlign: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    text: {
        textAlign: 'center'
    },
    hidden: {
        display: 'none'
    }
});