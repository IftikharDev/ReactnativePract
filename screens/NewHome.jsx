import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Navbar from '../components/Navbar';
import Heroo from '../components/Hero';
import Footer from '../components/Footer';
import Hero2 from '../components/Hero2';

const NewHome = () => {
  const [expanded, setExpanded] = useState(false);
  const [descriptionVisible, setDescriptionVisible] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const toggleDescription = () => {
    setDescriptionVisible(!descriptionVisible); 
  };

  const description = `A popular tourist attraction could be the Sundarbans, a vast mangrove
forest and UNESCO World Heritage site in Bangladesh...`; 

  const descriptinSB = `The Sundarbans is the largest contiguous mangrove forest in the world......making it important to balance conservation efforts with human needs.`;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Navbar />
          <Text style={styles.heading}>Welcome to the TravelerHUB!</Text>
           {/* First Container */}

          <View style={styles.descriptionContainer}>
            <Text style={styles.text} numberOfLines={expanded ? undefined : 3}>
              {description}
            </Text>
            <TouchableOpacity onPress={toggleExpanded}>
              <Text style={styles.toggleText}>
                {expanded ? 'See Less ▲' : 'See More ▼'}
              </Text>
            </TouchableOpacity>
            <Heroo />
          </View>

          {/* Second Container */}

          <View style={styles.secondContainer}>
            <Text style={styles.heading2}>Explore More</Text>
            <Text style={styles.secPara}>
              Discover the beauty of the Sundarbans and other amazing destinations.
            </Text>
            <Text style={styles.text} numberOfLines={descriptionVisible ? undefined : 1}>
              {descriptinSB}
            </Text>
            <TouchableOpacity onPress={toggleDescription}>
              <Text style={styles.toggleText}>
                {descriptionVisible ? 'See Less ▲' : 'See More ▼'}
              </Text>
            </TouchableOpacity>
            <Hero2 style={styles.secConImg}/>
          </View>
        </ScrollView>

        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#333',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
    backgroundColor: 'black',
  },
  heading2: {
    paddingHorizontal: 20,
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#fff',
  },
  heading: {
    paddingHorizontal: 20,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#fff',
  },
  text: {
    padding: 20,
    fontSize: 16,
    lineHeight: 24,
    color: '#ccc',
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
  
});

export default NewHome;
