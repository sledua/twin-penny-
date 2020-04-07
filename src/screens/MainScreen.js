import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const MainScreen = ({ navigation }) => {

    const goToPost = () => {
        navigation.navigate('List')
    }

    return (
        <View style={ styles.container }>
            <Text>MainScreen</Text>
            <Button title="to penny" onPress={goToPost}/>
        </View>
  )
};

MainScreen.navigationOptions = {
    headerTitle: 'Twin Penny'
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    }
});
