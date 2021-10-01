import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from "./src/index"
import { Provider } from "react-redux";

import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}
