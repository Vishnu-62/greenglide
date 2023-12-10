import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage';
import Riding from './Riding';
import TotalVehicles from './TotalVehicles';
import Stationed from './Stationed';
import VehicleDetails from './VehicleDetails';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"  screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomePage} options={{ title: 'Home' }} />
        <Stack.Screen name="Riding" component={Riding} options={{ title: 'Riding' }} />
        <Stack.Screen name="TotalVehicles" component={TotalVehicles} options={{ title: 'TotalVehicles' }} />
        <Stack.Screen name="Stationed" component={Stationed} options={{ title: 'Stationed' }} />
        <Stack.Screen name="VehicleDetails" component={VehicleDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
