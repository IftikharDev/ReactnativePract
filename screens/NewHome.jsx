// screens/Home.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';
import Heroo from '../components/Hero';
import Footer from '../components/Footer';
import Hero2 from '../components/Hero2';
import Hero3 from '../components/Hero3';

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
    justifyContent: 'space-between',
  },
  scrollContent: {
    flexGrow: 1,
  },
  text: {
    padding: 20,
    fontSize: 18,
  },
  secPara: {
    paddingHorizontal: 20,
    marginBottom: 2,
    color: '#ccc',

  },
  toggleText: {
    color: '#007BFF',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  descriptionContainer: {
    backgroundColor: '#444',
    borderRadius: 10,
    marginHorizontal: 20,
    padding: 15,
    margin: 20,
  },
  secondContainer: {
    backgroundColor: '#444',
    borderRadius: 10,
    marginHorizontal: 20,
    padding: 15,
    marginBottom: 20,
  },
  desSundarbans: {
    color: '#ccc',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 10,
  },
  toggleTextSM: {
    color: '#007BFF',
    paddingHorizontal: 20,
    marginBottom: 10,
  },  
  
});

export default NewHome;
