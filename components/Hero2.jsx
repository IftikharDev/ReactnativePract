import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Card } from 'react-native-paper';

export default function Hero2() {
  return (
    <View>
      <Card style={styles.card}>
        <Card.Cover
          source={{
            uri: 'https://picsum.photos/700',
          }}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
   
    flex: 1,
    height: 'full',
    margin: 16,
    }
});
