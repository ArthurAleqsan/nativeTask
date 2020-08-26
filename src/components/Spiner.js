import React from 'react';
import { ActivityIndicator, View, StyleSheet } from "react-native";


const Spiner = () => {
    const { spinerContainer } = styles;
    return (
        <View style={spinerContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )
};
const styles = StyleSheet.create({
    spinerContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Spiner;
