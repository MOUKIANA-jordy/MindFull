import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CommunityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue dans la Communauté</Text>

      <Button title="Rejoindre un groupe" onPress={() => alert('Groupe rejoint')} />
      <Button title="Discuter avec d'autres" onPress={() => alert('Discussion lancée')} />
      <Button title="Voir les événements" onPress={() => alert('Événements affichés')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

