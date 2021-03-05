import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({
    title,
    navigation
}) {
    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <ImageBackground source={require('../assets/images/game_bg.png')} style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.menu} />
            <View style={styles.headerTitle}>
                <Image style={styles.headerImage} source={require('../assets/images/heart_logo.png')} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        width: Dimensions.get('window').width,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    },
    menu: {
        position: 'absolute',
        left: 16
    },
    headerTitle: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    }
})
