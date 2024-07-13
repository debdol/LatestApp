import { StyleSheet, Text, View, Keyboard, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { Searchbar } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedProductData } from '../../../Redux/Action';
import ProductList from '../../CustomComponents/ProductList/ProductList';

const SearchedProductPage = ({ navigation }) => {
    const dispatch = useDispatch();
    const apiData = useSelector((state) => state.getApiDataReducer) || [];
    const searchedData = useSelector((state) => state.getSearchedDataReducer) || [];
    const [searchedDataLocal, setSearchedDataLocal] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [inputLoader, setInputLoader] = useState(false);
    const [isFocused, setIsFocused] = useState(true);


    const filterByName = (arr, name) => {
        return arr.filter((item) => {
            const firstName = item.title.split(' ')[0];
            const filteredValue = item.title.split(' ')[0].toLowerCase().includes(name.toLowerCase())
            if (filteredValue === true) {
                return item;
            }
        })
    }

    useEffect(() => {
        // console.log("searched_data_in_searchProductpage:", searchedData)
        if (searchedData.length != 0) {
            setSearchedDataLocal(searchedData)
        } else {
            setSearchedDataLocal([])
        }
    }, [searchedData])

    useEffect(() => {
        if (searchQuery) {
            const filteredValue = filterByName(apiData[0].data, searchQuery);
            dispatch(getSearchedProductData(filteredValue))
            setInputLoader(true);
        } else {
            setInputLoader(false);
            dispatch(getSearchedProductData([]))
        }
    }, [searchQuery]);


    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={['#88dae0', '#98e1d6', '#9ee4d4']}
                style={styles.container}
            >
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <AntDesign name='left' style={styles.icon} size={23} />
                </TouchableOpacity>
                <Searchbar
                    style={styles.inputStyle}
                    placeholder="Search Product's name ...."
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                    loading={inputLoader ? true : false}
                    onSubmitEditing={Keyboard.dismiss}
                    placeholderTextColor={'black'}
                    autoFocus={isFocused}
                />
            </LinearGradient>
            <View style={styles.productMainView}>
                {searchedDataLocal.length != 0 ?
                    <FlatList
                        numColumns={2}
                        contentContainerStyle={styles.productList}
                        style={{ flexGrow: 1 }}
                        data={searchedDataLocal}
                        renderItem={({ item, index }) =>
                            <ProductList item={item} index={item.id} navigation={navigation} />
                        }
                        keyExtractor={(item, index) => item.id}
                        showsVerticalScrollIndicator={false}
                    /> : null}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        padding: 10,
    },
    icon: {
        color: "black"
    },
    inputStyle: {
        width: "90%",
        borderWidth: 2,
        elevation: 5,
        borderColor: "#a1bcc0",
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        color: 'black'
    },
    productMainView: {
        flex: 1
    },
    productList: {
        width: "100%",
    },
})

export default SearchedProductPage