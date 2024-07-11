import { StyleSheet, View, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import LoaderKit from 'react-native-loader-kit'
const { height } = Dimensions.get('window');

const Loader = () => {
    return (
        <View style={styles.mainContainer}>
            <LoaderKit
                style={styles.loader}
                name={'BallClipRotateMultiple'}
                color={'#88dae0'}
            />

        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: "100%",
        height: height,
        alignItems: "center"
    },
    loader: {
        height: '100%',
        width: '100%',
    }
})
export default Loader