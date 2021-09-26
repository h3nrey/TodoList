import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Details from '../screens/Details';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Details' component={Details}/>
            </Stack.Navigator>
            </NavigationContainer>

    );
}

export default routes;