import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../PagesComponent/Home/Home';
import ProductDetails from '../../PagesComponent/ProductDetails/ProductDetails';

const Stack = createNativeStackNavigator();

const StackNavigationScreens = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigationScreens