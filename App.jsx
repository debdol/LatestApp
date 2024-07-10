import { StatusBar, StyleSheet, Text, View, LogBox } from 'react-native'
import React, { useState } from 'react'
LogBox.ignoreAllLogs()
import StackNavigationScreens from './src/Component/NavigationScreens/StackNavigationScreens/StackNavigationScreens';
import SplashScreen from './src/Component/SplashScreen/SplashScreen';

const App = () => {
  const [loaded, setLoaded] = useState(false);

  const handleAnimationFinish = () => {
    setLoaded(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={'#9ee4d4'} barStyle={'dark-content'} />
      {loaded ? <StackNavigationScreens /> : <SplashScreen onAnimationFinish={handleAnimationFinish} />}
    </View>
  )
}


const styles = StyleSheet.create({})
export default App