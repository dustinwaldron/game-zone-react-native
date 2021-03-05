import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Modal,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import ReviewForm from './reviewForm';

export default function HomeScreen({
    navigation
}) {
    const gotoReviewDetails = (item) => {
        navigation.navigate('ReviewDetails', item);
    }

    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { key: '1', rating: 5, title: 'Super Duper Mario Siblings', body: 'Et dolor minim et Lorem laborum nisi labore cillum fugiat minim amet.' },
        { key: '2', rating: 4, title: 'Gotta Catch\'em All (again)', body: 'Et dolor minim et Lorem laborum nisi labore cillum fugiat minim amet.' },
        { key: '3', rating: 3, title: 'Not So "Final" Fantasy', body: 'Et dolor minim et Lorem laborum nisi labore cillum fugiat minim amet.' }
    ]);

    const addReview = (reviewValues) => {
        setReviews([...reviews, {
            key: reviews.length + 1,
            ...reviewValues
        }])
        setModalOpen(false)
    }

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name='close'
                            style={{
                                ...styles.modalToggle,
                                ...styles.modalClose
                            }}
                            size={24}
                            onPress={() => setModalOpen(false)}
                        />
                        <ReviewForm 
                            onReviewSubmit={addReview}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />

            <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {gotoReviewDetails(item)}}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 40,
        marginBottom: 0,
        marginRight: 10,
        padding: 10,
        borderWidth: 0,
        alignSelf: 'flex-end'
    },
    modalContent: {
        flex: 1
    }
});