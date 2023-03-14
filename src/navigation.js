//import liraries
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import RestaurantDetail from './screens/RestaurantDetail';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/store'
import OrdersComplete from './screens/OrdersComplete';

// create a component

const store = configureStore()
const Stack = createStackNavigator();
const RootNavigation = () => {
    return (
        <ReduxProvider store={store}>
              <NavigationContainer >
            <Stack.Navigator initialRouteName='home' screenOptions={{
                headerShown:false
            }}>
                <Stack.Screen name ="home" component={Home}>
                </Stack.Screen>
                <Stack.Screen name ="restaurentdetail" component={RestaurantDetail}>
                </Stack.Screen>
                <Stack.Screen name ="ordercomplete" component={OrdersComplete}>
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
        </ReduxProvider>
      
    );
};

// define your styles


//make this component available to the app
export default RootNavigation;
