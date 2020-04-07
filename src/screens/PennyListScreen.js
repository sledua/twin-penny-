import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const PennyListScreen = ({ navigation }) => {
    return (
        <View style={ styles.container }>
            <Text>PennyListScreen</Text>
        </View>
    )
};

PennyListScreen.navigationOptions = {
    headerTitle: ' 1$ list Win '
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    }
});
