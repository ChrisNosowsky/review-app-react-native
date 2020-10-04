import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'
import { globalStyles } from '../styles/global'
import Card from '../shared/card';

export default function ReviewDetails({ navigation }) {

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{ navigation.getParam('title') }</Text>
                <Text>{ navigation.getParam('body') }</Text>
                <View style={styles.rating}>
                    <Text>Movie rating: </Text>
                    <Image source={require('../assets/rating-1.png')}/>
                </View>
            </Card>
        </View>
    )
}