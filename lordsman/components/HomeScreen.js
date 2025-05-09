import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import ProductCard from './ProductCard';
const products = [
  { id: '1', name: 'Camiseta Preta', price: 'R$ 59,90' },
  { id: '2', name: 'Calça Jeans', price: 'R$ 129,90' },
  { id: '3', name: 'Blazer', price: 'R$ 199,90' },
];

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Loja de Roupas</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            name={item.name}
            price={item.price}
            onPress={() => navigation.navigate('Product', { product: item })}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
