import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seu Carrinho</Text>
      <Text style={styles.item}>1x Camiseta Preta - R$ 59,90</Text>
      <Button title="Finalizar Compra" onPress={() => alert('Compra finalizada!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  item: { fontSize: 18, marginBottom: 10 },
});
