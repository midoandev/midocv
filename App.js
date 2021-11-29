import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import LearnSomething from './src/LearnSomething';
// import ViewOnMobile from './src/ViewOnMobile';
// import ViewOnWeb from './src/ViewOnWeb'; 
export default function App() {
  return <LearnSomething/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

  // if (Platform.OS === 'web'){
  //   return (
  //     <ViewOnMobile/>
  //   );
  // } else {
  //   return (
  //     <ViewOnWeb/>
  //   );

  // }