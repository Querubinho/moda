import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProductCard({ name, price, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#eee',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  name: { fontSize: 18, fontWeight: '500' },
  price: { fontSize: 16, color: 'gray' },
});
