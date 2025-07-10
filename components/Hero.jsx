import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';

const MyComponent = () => {
  return (
    <View>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
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
