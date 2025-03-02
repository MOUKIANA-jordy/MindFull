import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity,ImageBackground, StyleSheet } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Simule une connexion réussie (remplace ça par un appel API)
    if (email === "test@example.com" && password === "123456") {
      navigation.navigate("Home");
    } else {
      alert("Email ou mot de passe incorrect");
    }
  };

  return (
    <ImageBackground source={require("../atouts/ImageBackground.png")} style={styles.background}  resizeMode="cover">
     <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>

        <View style={styles.linksContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.link}>Créer un compte</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => alert("Mot de passe oublié ?")}>
            <Text style={styles.link}>Mot de passe oublié ?</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ImageBackground>
      );
};

      const styles = StyleSheet.create({
        container: {
        flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 0,
  },
      ImageBackground: {
      position: "absolute h-screen",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
  },
      input: {
        width: "100%",
      padding: 10,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      marginBottom: 10,
      backgroundColor: "#fff",
  },
      button: {
        width: "100%",
      padding: 20,
      backgroundColor: "#4CAF50",
      borderRadius: 8,
      alignItems: "center",
      marginTop: 10,
  },
      buttonText: {
        color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
  },
      linksContainer: {
        flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      marginTop: 15,
  },
      link: {
        color: "#007BFF",
      fontSize: 14,
  },
});

      export default LoginScreen;


