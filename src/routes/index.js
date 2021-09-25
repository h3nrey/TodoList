import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Details from '../screens/Details';
import Home from '../screens/Home/Index';

const stack = createStackNavigator();

const routes = () => {
    return(
        <NavigationContainer>
            <StackNavigator>
                <Stack.Screen name='Home' components={Home}/>
                <Stack.Screen name='Details' components={Details}/>
            </StackNavigator>
        </NavigationContainer>
    );
}

export default routes;