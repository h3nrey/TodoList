import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import Routes from './routes';
import Home from './screens/Home';
export default function Index() {
  return (
    // <NavigationContainer>
      //<Routes/>
    //* </NavigationContainer> */}

    <View style={styles.container}>
      <Routes/>
    </View>
    // <>
    // <Home/>
    // </>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#444444"
  },
})
