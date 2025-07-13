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
import Hero3 from '../components/Hero3';

const NewHome = () => {
  const [expanded, setExpanded] = useState(false);
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [descriptionVisibleSM, setDescriptionVisibleSM] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const toggleDescription = () => {
    setDescriptionVisible(!descriptionVisible); 
  };
  const toggleDescriptionSM = () => {
    setDescriptionVisibleSM(!descriptionVisibleSM); 
  };

  const description = `A popular tourist attraction could be the Sundarbans, a vast mangrove
forest and UNESCO World Heritage site in Bangladesh...`; 

  const descriptinSB = `The Sundarbans is the largest contiguous mangrove forest in the world......making it important to balance conservation efforts with human needs.`;

  const descriptionSM = `St. Martin's Island, Bangladesh's only coral island, is a serene paradise in the Bay of Bengal, known for its natural beauty and tranquil atmosphere. Located about 9 km south of the Cox's Bazar-Teknaf peninsula, it's a small island, shrinking to about 5 square kilometers during high tide. The island offers a peaceful escape with its clear blue waters, coconut trees, and opportunities for swimming, snorkeling, and exploring its unique coral formations. `

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
            <Text style={styles.heading2}>Explore More about Sundarbans</Text>
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

          {/* third Container */}
          <View style={styles.secondContainer}>
            <Text style={styles.heading2}>St.Martin</Text>
            <Text style={styles.secPara}>
              Discover the beauty of the Sundarbans and other amazing destinations.
            </Text>
            <Text style={styles.text} numberOfLines={descriptionVisibleSM ? undefined : 1}>
              {descriptionSM}
            </Text>
            <TouchableOpacity onPress={toggleDescriptionSM}>
              <Text style={styles.toggleTextSM}>
                {descriptionVisibleSM ? 'See Less ▲' : 'See More ▼'}
              </Text>
            </TouchableOpacity>
            <Hero3 style={styles.secConImg}/>
          </View>
        </ScrollView>
        <Footer />

        
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
  toggleTextSM: {
    color: '#007BFF',
    paddingHorizontal: 20,
    marginBottom: 10,
  },  
  
});

export default NewHome;
