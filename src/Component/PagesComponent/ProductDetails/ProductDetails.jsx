import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Dimensions, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-deck-swiper';
const { height, width } = Dimensions.get('window');

const ProductDetails = ({ navigation, route }) => {
    let data = route.params.details;
    const [decreasePrice, setDecreasePrice] = useState(null);
    const [increasePrice, setIncreasePrice] = useState(null);
    const productImages = [
        data.image1,
        data.image2,
        data.image3,
    ];
    const percentageCalulation = (oldPrices, newPrices) => {
        const oldPrice = Number(oldPrices);
        const newPrice = Number(newPrices);
        if (oldPrice > newPrice) {
            const percentageDecrease = parseInt(((oldPrice - newPrice) / oldPrice) * 100);
            setDecreasePrice(percentageDecrease);
        } else {
            const percentageIncrease = parseInt(((newPrice - oldPrice) / newPrice) * 100);
            setIncreasePrice(percentageIncrease);
        }
    };
    useEffect(() => {
        if (data) {
            percentageCalulation(data.previous_price, data.price);
        }
    }, [data]);

    return (
        <View style={styles.mainContainer}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={['#88dae0', '#98e1d6', '#9ee4d4']}
                style={styles.headingView}
            >
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <AntDesign name='left' style={styles.textColor} size={23} />
                </TouchableOpacity>
                <Text style={[styles.txt, styles.headingTxtFont, styles.textColor]}>Product Details</Text>
                <Text></Text>
            </LinearGradient>
            <View style={styles.body}>
                <View style={styles.sliderMainView}>
                    <Swiper
                        infinite={true}
                        cards={productImages}
                        cardStyle={styles.cardStyle}
                        renderCard={(cardData, cardIndex) => {
                            return (
                                <Image source={{ uri: `${cardData}` }} style={[styles.imageStyle]} />
                            )
                        }}
                        cardIndex={0}
                        backgroundColor={"White"}
                        containerStyle={styles.containerStyle}
                        stackSize={3}>
                    </Swiper>
                </View>
                <View style={styles.sliderBottiomView}>
                    <View style={styles.productNameMainView}>
                        <Text style={[styles.textColor, styles.headingTxtFont]}>{data.name}</Text>
                    </View>
                    <View style={styles.desctiptionView}>
                        <View style={styles.priceView}>
                            {decreasePrice ?
                                <View style={styles.discountView}>
                                    <AntDesign name='arrowdown' size={20} style={styles.greenColorText} />
                                    <Text style={[styles.productPriceText, styles.greenColorText]}>{decreasePrice}%</Text>
                                </View> :
                                <View style={styles.discountView}>
                                    <AntDesign name='arrowup' size={20} style={styles.greenColorText} />
                                    <Text style={[styles.productPriceText, styles.greenColorText]}>{increasePrice}%</Text>
                                </View>
                            }
                            <Text style={[styles.productPriceText, { color: "red", textDecorationLine: 'line-through' }]}><Text>₹</Text>{data.previous_price}</Text>
                            <Text style={[styles.textColor, styles.productPriceText]}><Text>₹</Text>{data.price}</Text>
                        </View>
                        <Text style={styles.textColor}>Free delivery</Text>
                        <Text style={styles.textColor}>Buy & pay in easy EMIs with Scalenow Technosolutions pay Later</Text>
                    </View>
                    <View style={styles.userLocation}>
                        <View style={styles.locationLabel}>
                            <Text style={styles.textColor}>Deliver to: </Text>
                            <Text style={[styles.textColor, styles.headingTxtFont]}>Debdol Sarkar</Text>
                        </View>
                        <Text style={styles.textColor}>Kolkata, West Bengal, India</Text>
                    </View>
                    <View style={styles.deliveryEtaView}>
                        <AntDesign name='car' size={30} style={styles.textColor} />
                        <View style={styles.deliveryEtaLeftView}>
                            <View style={styles.freeDeliveryView}>
                                <Text style={[styles.greenColorText, { fontSize: 20 }]}>FREE Delivery</Text>
                            </View>
                            <Text style={styles.textColor}>15 May,Wednesday</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    textColor: {
        color: "black"
    },
    greenColorText: {
        color: "green"
    },

    mainContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
    },

    headingView: {
        width: "100%",
        height: "8%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },


    txt: {
        fontSize: 20,
    },

    headingTxtFont: {
        fontFamily: "MontserratAlternates-Bold"
    },

    body: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
        backgroundColor: "white",
    },

    sliderMainView: {
        width: "100%",
        height: "55%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },

    cardStyle: {
        width: '100%',  // 80% of the screen width
        height: '100%',  // 60% of the screen height
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: "white",
        position: 'absolute',
        top: 0,
        left: 0
    },

    imageStyle: {
        borderRadius: 9,
        height: '100%',
        width: '100%',
        resizeMode: "cover"
    },

    containerStyle: {
        width: width * 0.9,
        height: '100%',
        width: "100%",
    },

    sliderBottiomView: {
        height: "45%",
        flexDirection: "column",
        justifyContent: "center",
        gap: 19,
        padding: 10,
    },

    productNameMainView: {
        flexDirection: 'column',
        justifyContent: "center",
    },

    desctiptionView: {
        flexDirection: "column",
        gap: 6,
    },

    priceView: {
        flexDirection: "row",
        gap: 6,
        width: "100%",
    },

    discountView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    productPriceText: {
        fontFamily: "MontserratAlternates-Regular",
        fontSize: 20,
    },

    userLocation: {
        flexDirection: "column",
        justifyContent: "center",
        gap: 6
    },

    locationLabel: {
        flexDirection: "row",
        alignItems: "center"
    },

    deliveryEtaView: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },

    deliveryEtaLeftView: {
        flexDirection: 'column',
        justifyContent: "center",
        gap: 5
    },

    freeDeliveryView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10
    },
})
export default ProductDetails