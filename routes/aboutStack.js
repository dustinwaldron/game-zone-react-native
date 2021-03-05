import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import AboutScreen from '../screens/about';

const screens = {
    About: {
        screen: AboutScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: () => <Header navigation={navigation} title="About GameZone"/>
        })
    }
}

export default createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerBackTitle: ' ',
        headerStyle: {
            backgroundColor: '#eee',
            height: 100
        }
    }
});