import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Navbar from '../components/Navbar';
import FaqItem from '../components/FaqItem';
import data from '../assets/data.json';
import Footer from '../components/Footer';

const FaqScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
    <View style={styles.viewContainer}>
      
      <ScrollView>
      <Navbar />
      <Text style={styles.text}>Here are some frequently asked questions.</Text>

      {data.faqs.map((item, index) => {
        console.log(item.answer);
        return (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        );
      })}

      </ScrollView>
      
      <Footer />
      
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: { 
    flex: 1,
    backgroundColor: '#222',
  },
  viewContainer: {
    flex: 1,  
  },
  text: { 
    padding: 20, 
    color: '#ccc',
    fontSize: 18 },
});

export default FaqScreen;
