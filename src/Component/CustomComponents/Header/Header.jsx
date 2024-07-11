import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { Searchbar } from 'react-native-paper';

const Header = ({ item, index, navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');


    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={['#88dae0', '#98e1d6', '#9ee4d4']}
            style={styles.container}
        >
            <Searchbar
                style={styles.inputStyle}
                placeholder="Search Product's name ...."
                onChangeText={setSearchQuery}
                value={searchQuery}
                placeholderTextColor={'black'}
                onFocus={() => navigation.navigate('SearchedProductPage')}
            />
        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    inputStyle: {
        borderWidth: 2,
        elevation: 5,
        borderColor: "#a1bcc0",
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
    }
})
export default Header