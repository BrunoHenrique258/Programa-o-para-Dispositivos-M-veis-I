// src/screens/exercicio7.tsx
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";

const Exercicio7 = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [resultado, setResultado] = useState("");

  const handleLogin = () => {
    setResultado(`E-mail: ${email} | Senha: ${senha}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />

      {/* Campo E-mail */}
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        keyboardType="email-address"
      />

      {/* Campo Senha */}
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
        maxLength={8}
      />

      {/* Botão Azul */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Logar</Text>
      </TouchableOpacity>

      {/* Resultado */}
      {resultado !== "" && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{resultado}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Exercicio7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "80%",
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#0075d4ff",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
  },
  resultText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
