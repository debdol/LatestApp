import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';

const ProductList = ({ item, index, navigation }) => {
    return (
        <Animatable.View animation={'fadeInUp'} duration={2000}  style={styles.productBox}>
            <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { details: item })} style={styles.btn}>
                <Image source={{ uri: item.image }} style={styles.productImage} />
                <View style={styles.cardTextView}>
                    <Text style={styles.title}>{item.category}</Text>
                    <Text style={styles.title}><Text style={{ fontSize: 15 }}>₹</Text>{item.price}</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.title}>Ratings : </Text>
                        <Text style={styles.title}>{item.rating.rate}</Text>
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
        height: "100%",
        width: "100%",
        flexDirection: "column",
        padding: 14,
        gap: 19,
        alignSelf: "center"
    },
    productImage: {
        height: '50%',
        width: '100%',
        objectFit: 'contain',
        borderRadius: 9,
    },
    cardTextView: {
        width: "100%",
        flexDirection: 'column',
        justifyContent: "center",
        gap: 3,
    },
    title: {
        fontSize: 15,
        fontFamily: "MontserratAlternates-Regular",
        color: "black",
    },
})
export default ProductList