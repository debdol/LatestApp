import { StatusBar, StyleSheet, Text, View, LogBox } from 'react-native'
import React, { useState, useEffect } from 'react'
import NetInfo from "@react-native-community/netinfo"
import { Snackbar } from 'react-native-paper';
LogBox.ignoreAllLogs()
import StackNavigationScreens from './src/Component/NavigationScreens/StackNavigationScreens/StackNavigationScreens';
import SplashScreen from './src/Component/SplashScreen/SplashScreen';

const App = () => {
  const [visible, setVisible] = useState(true);
  const onDismissSnackBar = () => setVisible(false);

  const [loaded, setLoaded] = useState(false);
  const [cunnectionStatus, setCunnectionStatus] = useState(false);

  const handleAnimationFinish = () => {
    setLoaded(true);
  };

  useEffect(() => {
    const networkStatuds = NetInfo.addEventListener(state => {
      if (state.isConnected) {
        setCunnectionStatus(true)
      }
    });

    return () => {
      networkStatuds();
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={'#9ee4d4'} barStyle={'dark-content'} />
      {cunnectionStatus ? loaded ? <StackNavigationScreens /> : <SplashScreen onAnimationFinish={handleAnimationFinish} /> :
        <View style={styles.container}>
          <Snackbar
            visible={visible}
            onDismiss={onDismissSnackBar}
            action={{
              label: 'Exit',
            }}>
            Hey there! You are not connected to any network
          </Snackbar>
        </View>}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
})
export default App