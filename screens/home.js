import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'
import { globalStyles } from '../styles/global'

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Movie Example 1', rating: 5, body: 'Review Example 1', key: '1' },
        { title: 'Movie Example 2', rating: 9, body: 'Review Example 2', key: '2' },
        { title: 'Movie Example 3', rating: 2, body: 'Review Example 3', key: '3' }
    ]);


    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home screen</Text>
        </View>
    )
}