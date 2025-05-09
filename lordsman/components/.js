import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

export default function Tela1() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 10 }}>Tela 1</Text>
      <Image source={require('../assets/tela1.png')} style={{ width: '100%', height: 300, resizeMode: 'contain' }} />
    </ScrollView>
  );
}