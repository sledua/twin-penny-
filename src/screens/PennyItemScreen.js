import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const PennyItemScreen = ({}) => {
    return (
        <View style={ styles.container }>
            <Text>PennyItemScreen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
