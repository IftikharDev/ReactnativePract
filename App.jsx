import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  StatusBar,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewHome from './screens/NewHome';
import { NavigationContainer } from '@react-navigation/native';
import FaqScreen from './screens/FaqScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={NewHome} />
        <Stack.Screen name="Faq" component={FaqScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
