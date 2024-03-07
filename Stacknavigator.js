import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import Homescreen from './screens/Homescreen';
import MenuScreen from './screens/MenuScreen';
import CartScreen from './screens/CartScreen';
import LoadingScreen from './screens/LoadingScreen';
import OrderScreen from './screens/OrderScreen';

const Stacknavigator  = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homescreen} options={{headerShown:false}} />
        <Stack.Screen name="Menu" component={MenuScreen} options={{headerShown:false}} />
        <Stack.Screen name="Cart" component={CartScreen} options={{headerShown:false}} />
        <Stack.Screen name ="Loading" component={LoadingScreen} options ={{headerShown:false}}/>
        <Stack.Screen name ="Order" component={OrderScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )}
export default Stacknavigator
const styles = StyleSheet.create({})
