import { StyleSheet, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { Searchbar } from 'react-native-paper';
import { getSearchApi } from '../../../Redux/Action';
import { useDispatch } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');
    const [keyboardStatus, setKeyboardStatus] = useState('');
    const [inputLoader, setInputLoader] = useState(false);

    useEffect(() => {
        if (searchQuery) {
            setInputLoader(true);
            dispatch(getSearchApi())
        } else {
            setInputLoader(false);
        }
    }, [searchQuery]);

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
                onSubmitEditing={Keyboard.dismiss}
                placeholderTextColor={'black'}
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