import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetailsScreen({
    navigation
}) {
    const title = navigation.getParam('title');
    const rating = navigation.getParam('rating');
    const body = navigation.getParam('body');

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>{title}</Text>
                <Text style={globalStyles.titleText}>{body}</Text>
                <View style={styles.rating}>
                    <Text style={globalStyles.titleText}>GameZone Rating:</Text>
                    <Image source={images.ratings[rating]}/>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        paddingTop: 16,
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
});