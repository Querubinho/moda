import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProductScreen({ route, navigation }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Button title="Adicionar ao Carrinho" onPress={() => navigation.navigate('Cart')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  name: { fontSize: 24, marginBottom: 10 },
  price: { fontSize: 20, color: 'gray', marginBottom: 20 },
});
