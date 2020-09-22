import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'
import { globalStyles } from '../styles/global'

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        {}
    ]);


    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home screen</Text>
        </View>
    )
}