import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Navbar from '../components/Navbar';
import Heroo from '../components/Hero';
import Footer from '../components/Footer';

const NewHome = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const description = `A popular tourist attraction could be the Sundarbans, a vast mangrove
forest and UNESCO World Heritage site in Bangladesh and India. It's
renowned for its unique ecosystem, diverse wildlife, including the
Bengal tiger, and adventurous boat tours through its intricate
waterways. Visitors can experience the thrill of spotting wildlife in
their natural habitat, explore the mangrove forests, and learn about
the local culture and livelihoods dependent on this unique
environment. The Sundarbans offers a range of activities for tourists,
from wildlife spotting and photography to eco-tours and cultural
experiences. Boat trips are a popular way to navigate the waterways,
offering opportunities to see the diverse flora and fauna, including
various species of birds, deer, and if lucky, the elusive Royal Bengal
Tiger. Visitors can also explore the local villages and learn about
the lives of the people who call the Sundarbans home, gaining insights
into their traditional fishing practices and sustainable living. The
area's unique beauty and biodiversity make it a memorable destination
for nature lovers and adventure seekers alike.`;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Navbar />
          <Text style={styles.heading}>Welcome to the tourist!</Text>

          <Text style={styles.text} numberOfLines={expanded ? undefined : 3}>
            {description}
          </Text>

          <TouchableOpacity onPress={toggleExpanded}>
            <Text style={styles.toggleText}>
              {expanded ? 'See Less ▲' : 'See More ▼'}
            </Text>
          </TouchableOpacity>

          <Heroo />
        </ScrollView>

        <Footer />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  heading: {
    paddingHorizontal: 20,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  text: {
    padding: 20,
    fontSize: 16,
    lineHeight: 24,
  },
  toggleText: {
    color: '#007BFF',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
});

export default NewHome;
