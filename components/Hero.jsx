import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';

const MyComponent = () => {
  return (
    <View>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: 'https://porompath.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-03-at-21.16.45_320124bd.jpg' }} />
       
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: '1',
    height: 'full',
    margin: 16,
  },
});

export default MyComponent;
