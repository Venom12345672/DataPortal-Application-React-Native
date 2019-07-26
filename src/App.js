import React, {Component} from 'react';
import { Image, StyleSheet, View, Text} from 'react-native';

class App extends Component {

    render() {
        return (
            <View style={styles.container}>
               <Text>Hamzah Baig</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#aa2200',
    },

});

export default App