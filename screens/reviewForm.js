import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { globalStyles } from '../styles/global';
import FlatButton from '../shared/flatButton'

const reviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required()
        .test('is-num-1-5', 'Rating must be number between 1 and 5', (val) => {
            return parseInt(val) > 0 && parseInt(val) < 6;
        })
})

export default function ReviewForm({
    onReviewSubmit
}) {
    const initialFormState = {
        title: '',
        body: '',
        rating: '',
    };
    
    const submitReview = (values, actions) => {
        actions.resetForm();
        onReviewSubmit(values);
    }

    return (
        <View style={globalStyles.container}>
            <Text style={styles.reviewTitle}>Write a Review</Text>
            <Formik
                initialValues={initialFormState}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => submitReview(values, actions)}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review Title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review Body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Rating 1-5'
                            onChangeText={props.handleChange('rating')}
                            onBlur={props.handleBlur('rating')}
                            keyboardType='numeric'
                            value={props.values.rating}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>

                        <FlatButton
                            text='Submit'
                            onPress={props.handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    reviewTitle: {
        ...globalStyles.titleText,
        fontSize: 24,
        marginBottom: 20
    }
})
