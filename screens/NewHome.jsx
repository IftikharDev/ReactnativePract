// screens/Home.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';
import Heroo from '../components/Hero';
import Footer from '../components/Footer';

const NewHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Navbar />
        <Text style={styles.text}>Welcome to the tourist spot!</Text>
        <Heroo />
      </View>
      <Footer />

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // pushes footer to bottom
  },
  content: {
    flexGrow: 1,
  },
  text: {
    padding: 20,
    fontSize: 18,
  },
});

export default NewHome;
