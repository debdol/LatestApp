import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-deck-swiper';
const { height, width } = Dimensions.get('window');

const ProductDetails = ({ navigation, route }) => {
    let data = route.params.details;
    console.log("image_in_productdetails:", data.image1, data.image2, data.image3)
    const [currentIndex, setCurrentIndex] = useState(0);
    const productImages = [
        data.image1,
        data.image2,
        data.image3,
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
                {/* <View style={styles.sliderMainView}>
                    <FlatList
                        contentContainerStyle={{ alignItems: "center" ,borderWidth:1}}
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
                                <TouchableOpacity style={styles.sliderBtn} disabled={true}>
                                    <Image source={{ uri: item }} style={[styles.sliderBtn, styles.imageStyle]} />
                                </TouchableOpacity>
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
                </View> */}
                <View style={styles.container}>
                    <Swiper
                        cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
                        renderCard={(card) => {
                            return (
                                <View style={styles.card}>
                                    <Text style={styles.text}>{card}</Text>
                                </View>
                            )
                        }}
                        onSwiped={(cardIndex) => { console.log(cardIndex) }}
                        onSwipedAll={() => { console.log('onSwipedAll') }}
                        cardIndex={0}
                        backgroundColor={'#4FD0E9'}
                        stackSize={3}>
                        {/* <Button
                            onPress={() => { console.log('oulala') }}
                            title="Press me">
                            You can press me
                        </Button> */}
                    </Swiper>
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
        backgroundColor: "white",
    },

    sliderMainView: {
        height: "55%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        // borderWidth:1,
    },

    sliderBtn: {
        height: height / 2,
        width: width,
        // padding:10,
        justifyContent: 'center',
        // alignItems: 'center',
        // borderRadius: 9,
    },

    imageStyle: {
        borderRadius: 9,
        // objectFit: 'content',
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
    },


    container: {
        flex: 1,
        backgroundColor: "#F5FCFF"
    },
    card: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#E8E8E8",
        justifyContent: "center",
        backgroundColor: "white"
    },
    text: {
        textAlign: "center",
        fontSize: 50,
        backgroundColor: "transparent"
    }
})
export default ProductDetails