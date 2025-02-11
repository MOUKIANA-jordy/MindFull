import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mon Profil</Text>
      <Text style={styles.text}>Nom : Jordy Moukiana </Text>
      <Text style={styles.text}>Humeur actuelle : Heureux </Text>
      <Text style={styles.text}>Objectif : Méditer 3 fois par semaine</Text>

      <Button title="Modifier le Profil" onPress={() => alert('Modification du profil')} />
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
  text: {
    fontSize: 20,
    marginVertical: 10,
  },
});

