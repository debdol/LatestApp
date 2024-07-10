import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
const { height, width } = Dimensions.get('window');

const ProductDetails = ({ navigation, route }) => {
    let data = route.params.details;
    const [currentIndex, setCurrentIndex] = useState(0);
    const productImages = [
        data.image,
        data.image
    ]
    return (
        <View style={styles.mainContainer}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={['#88dae0', '#98e1d6', '#9ee4d4']}
                style={styles.headingView}
            >
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <AntDesign name='left' style={styles.icon} size={23} />
                </TouchableOpacity>
                <Text style={[styles.txt, styles.headingTxt]}>Product Details</Text>
                <Text></Text>
            </LinearGradient>
            <View style={styles.body}>
                <View style={styles.sliderMainView}>
                    <FlatList
                        style={{
                            flexGrow: 0,
                        }}
                        contentContainerStyle={{ alignItems: "center" }}
                        data={productImages}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index}
                        onScroll={(e) => {
                            const contentOffsetX = e.nativeEvent.contentOffset.x;
                            setCurrentIndex((contentOffsetX / width).toFixed(0));
                        }}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={styles.sliderView}>
                                    <TouchableOpacity style={styles.sliderBtn} disabled={true}>
                                        <Image source={{ uri: item }} style={[styles.sliderBtn, styles.imageStyle]} />
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                    />

                    <View style={styles.sliderDotMainView}>
                        {
                            productImages.map((item, index) => {
                                return (
                                    <View style={{
                                        width: 8,
                                        height: 8,
                                        borderRadius: 4,
                                        backgroundColor: currentIndex == index ? "green" : "grey",
                                    }} key={index}>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
                <View style={styles.sliderBottiomView}>
                    <View style={styles.productNameMainView}>
                        <Text style={[styles.icon, { fontFamily: "MontserratAlternates-Bold" }]}>{data.title}</Text>
                    </View>
                    <View style={styles.desctiptionView}>
                        <View style={styles.priceView}>
                            <View style={styles.discountView}>
                                <AntDesign name='arrowdown' size={20} style={{ color: "green" }} />
                                <Text style={[styles.icon, styles.productDescription, { color: "green", fontWeight: '800' }]}>{data.price}%</Text>
                            </View>
                            <Text style={[styles.icon, styles.productDescription]}><Text>₹</Text>{data.price}</Text>
                        </View>
                        <Text style={[styles.icon, styles.productTitle]}>Free delivery</Text>
                        <Text style={[styles.icon, styles.productTitle]}>Buy & pay in easy EMIs with Scalenow Technosolutions pay Later</Text>
                    </View>
                    <View style={styles.userLocation}>
                        <View style={styles.locationLabel}>
                            <Text style={[styles.icon, styles.productTitle]}>Deliver to: </Text>
                            <Text style={[styles.icon, styles.headingTxt]}>Debdol Sarkar</Text>
                        </View>
                        <Text style={[styles.icon, styles.productTitle]}>Kolkata, West Bengal, India</Text>
                    </View>
                    <View style={styles.deliveryEtaView}>
                        <AntDesign name='car' size={30} style={styles.icon} />
                        <View style={styles.deliveryEtaLeftView}>
                            <View style={styles.freeDeliveryView}>
                                <Text style={{ color: "green", fontSize: 20 }}>FREE Delivery</Text>
                            </View>
                            <Text style={styles.icon}>15 May,Wednesday</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
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

    icon: {
        color: "black"
    },

    txt: {
        fontSize: 20,
    },

    headingTxt: {
        color: "black",
        fontFamily: "MontserratAlternates-Bold"
    },

    body: {
        flex: 1,
        flexDirection: "column",
        gap: 10,
        backgroundColor: "white",
    },

    sliderMainView: {
        height: "55%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },

    sliderView: {
        height: height / 2,
        width: width,
        padding: 19,
        justifyContent: 'center',
        alignItems: 'center',
    },

    sliderBtn: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 9,
    },

    imageStyle: {
        borderRadius: 9,
        objectFit: 'fill',
    },

    sliderDotMainView: {
        flexDirection: "row",
        width: width,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
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

    productDescription: {
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
    }
})
export default ProductDetails