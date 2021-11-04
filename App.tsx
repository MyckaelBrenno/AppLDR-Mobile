/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Provider as PaperProvider, TextInput} from 'react-native-paper'
import { LoginScreen } from './app/screens/login/login.screen'
import {BottomNav} from './app/components/bottomNav'


const App = () => {
  
  return (
    <PaperProvider>
      <LoginScreen/>
      <BottomNav/>
      </PaperProvider>
  );
};

export default App;
