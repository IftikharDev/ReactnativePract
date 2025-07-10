import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';
import FaqItem from '../components/FaqItem';
import data from '../assets/data.json';

const FaqScreen = () => {
    
  return (
    <View style={styles.container}>
      <Navbar />
      <Text style={styles.text}>Here are some frequently asked questions.</Text>

 {data.faqs.map((item, index) => {

    console.log(item.answer);
    return (
          <FaqItem
            key={index}
            question={item.question}
            answer={item.answer}
            
          />
        );
 })}

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  text: { padding: 20, fontSize: 18 },
});

export default FaqScreen;