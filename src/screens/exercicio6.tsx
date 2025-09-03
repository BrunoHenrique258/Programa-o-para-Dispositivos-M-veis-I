// src/screens/exercicio6.tsx
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from "react-native";
import Constants from "expo-constants";

const Exercicio6 = () => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [resultado, setResultado] = useState("");

  const handleSalvar = () => {
    setResultado(`Nome: ${nome} | Idade: ${idade}`);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      {/* Campo Nome */}
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      {/* Campo Idade */}
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric"
      />

      {/* Botão Azul */}
      <TouchableOpacity style={styles.button} onPress={handleSalvar}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      {/* Resultado */}
      {resultado !== "" && <Text style={styles.resultado}>{resultado}</Text>}
    </View>
  );
};

export default Exercicio6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "80%",
    height: 40,
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
  resultado: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
});
