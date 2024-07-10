import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
const { height, width } = Dimensions.get('window');

const SplashScreen = ({ onAnimationFinish }) => {
    return (
        <View style={styles.splashContainer}>
            <LottieView
                style={styles.splash}
                source={require('../../assets/Animations/SplashScreen.json')}
                autoPlay
                loop={false}
                onAnimationFinish={onAnimationFinish}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        width: width,
        height: 200,
        backgroundColor: "#ffffff"
    },
    splash: {
        flex: 1,
        borderWidth: 1,
        borderColor: "black"
    },
})
export default SplashScreen