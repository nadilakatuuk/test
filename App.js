import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ComponentScreen from './screens/ComponentScreen';
import Component2Screen from './screens/Component2Screen';

export default function App() {
  return (
    <View style={styles.container}>
      <ComponentScreen/>
      <Component2Screen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
