import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';

const ProductList = ({ item, index, navigation }) => {
    useEffect(() => {
        console.log(item);
    }, [item]);

    return (
        <Animatable.View animation={'fadeInUp'} duration={2000} style={styles.productBox}>
            <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { details: item })} style={styles.btn}>
                <Image source={{ uri: item.image2, cache:'only-if-cached' }} style={styles.productImage} key={item.id} />
                <View style={styles.cardTextView}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.priceMainView}>
                        <Text style={styles.title}><Text style={{ fontSize: 15 }}>₹</Text>{item.price}</Text>
                        <Text style={[styles.title, { textDecorationLine: "line-through", color: "#B2BEB5" }]}><Text style={{ fontSize: 15 }}>₹</Text>{item.previous_price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Animatable.View>
    )
}


const styles = StyleSheet.create({
    productBox: {
        height: 200,
        width: '46%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#E0EAEF",
        justifyContent: 'space-between',
        margin: '2%',
        backgroundColor: "#FFF",
        shadowRadius: 10,
    },
    btn: {
        // borderWidth: 1,
        height: "100%",
        width: "100%",
        flexDirection: "column",
        // padding: 14,
        gap: 5,
        alignSelf: "center",
    },
    productImage: {
        // borderWidth: 1,
        height: '50%',
        width: '100%',
        // objectFit: 'contain',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    cardTextView: {
        paddingHorizontal: 10,
        // borderWidth: 1,
        width: "100%",
        height: "50%",
        flexDirection: 'column',
        gap: 9,
    },
    title: {
        fontSize: 15,
        fontFamily: "MontserratAlternates-Regular",
        color: "black",
    },
    priceMainView: {
        flexDirection: "row",
        gap: 10,
        width: "100%"
    },
})
export default ProductList