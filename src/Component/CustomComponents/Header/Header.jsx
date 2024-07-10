import { StyleSheet, Keyboard, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Searchbar } from 'react-native-paper';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [keyboardStatus, setKeyboardStatus] = useState('');
    const [inputLoader, setInputLoader] = useState(false);
    const searchProduct = () => {
        console.log("search");
        // setSearchQuery('');
    }
    useEffect(() => {
        if (searchQuery) {
            setInputLoader(true);
            console.log("in the if condition:", Boolean(searchQuery))
            searchProduct();
        } else {
            setInputLoader(false);
        }
    }, [searchQuery])
    // useEffect(() => {
    //     const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
    //         setKeyboardStatus('Keyboard Shown');
    //     });
    //     const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
    //         setKeyboardStatus('Keyboard Hidden');
    //         if (searchQuery) {
    //             console.log("in the if condition:", Boolean(searchQuery))
    //             searchProduct();
    //         }
    //     });
    // }, []);

    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={['#88dae0', '#98e1d6', '#9ee4d4']}
            style={styles.container}
        >
            <Searchbar
                style={styles.inputStyle}
                placeholder="Search Scalenow's Product...."
                onChangeText={setSearchQuery}
                value={searchQuery}
                loading={inputLoader ? true : false}
            />
        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        elevation: 8,
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