import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity>
        <Image source={require('../assets/home.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/loud.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/plus.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/message.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/list.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flex: '1',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1D1D1D',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#44CC7B',
  },
});

export default Footer;
