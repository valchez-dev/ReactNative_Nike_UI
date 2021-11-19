import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from './src/screens/home';

const App = () => {
  return <View style={styles.container}>
    <Home/>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
    backgroundColor: ' #ffffff',
  },
});

export default App;
