import React, { useState } from 'react'
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native'
import { globalStyles } from '../styles/global'
import Card from '../shared/card';

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Movie Example 1', rating: 5, body: 'Review Example 1', key: '1' },
        { title: 'Movie Example 2', rating: 1, body: 'Review Example 2', key: '2' },
        { title: 'Movie Example 3', rating: 2, body: 'Review Example 3', key: '3' }
    ]);


    return (
        <View style={globalStyles.container}>
            <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}