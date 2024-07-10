import { StyleSheet, View, Dimensions } from 'react-native'
import React from 'react'
import LoaderKit from 'react-native-loader-kit'
const { height, width } = Dimensions.get('window');

const Loader = () => {
    return (
        <View style={styles.mainContainer}>
            <LoaderKit
                style={styles.loader}
                name={'BallClipRotateMultiple'} // Optional: see list of animations below
                color={'green'} // Optional: color can be: 'red', 'green',... or '#ddd', '#ffffff',...
            />

        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: "100%",
        height:height,
        alignItems: "center"
    },
    loader: {
        height: '100%',
        width: '100%',
    }
})
export default Loader