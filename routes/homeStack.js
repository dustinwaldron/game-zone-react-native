import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import HomeScreen from '../screens/home';
import ReviewDetailsScreen from '../screens/reviewDetails';
import Header from '../shared/header';

const screens = {
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: () => <Header navigation={navigation} title="GameZone"/>,
        })
    },
    ReviewDetails: {
        screen: ReviewDetailsScreen,
        navigationOptions: {
            title: 'Review Details',
        }
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