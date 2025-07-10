import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FaqItem = ({ question, answer }) => {
  console.log(answer);

  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleOpen} style={styles.questionBox}>
        <Text style={styles.question}>{question}</Text>
      </TouchableOpacity>
      {open && <Text style={styles.answer}>{answer}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    backgroundColor: '#333',
    padding: 16,
    borderRadius: 10,
  },
  questionBox: {
    paddingVertical: 10,
  },
  question: {
    color: '#44CC7B',
    fontSize: 16,
    fontWeight: '600',
  },
  answer: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 8,
    lineHeight: 20,
  },
});

export default FaqItem;
