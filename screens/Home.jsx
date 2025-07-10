import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, Button } from 'react-native';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import data from '../assets/data.json';

const Home = ({ navigation }) => {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    setHeroData(data?.hero);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <ScrollView contentContainerStyle={styles.content}>
        {heroData ? (
          <>
            <Hero {...heroData} />
            <Button title="Go to FAQ" onPress={() => navigation.navigate('FAQ')} />
          </>
        ) : (
          <Text>Loading...</Text>
        )}
      </ScrollView>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flexGrow: 1, padding: 16 },
});

export default Home;
