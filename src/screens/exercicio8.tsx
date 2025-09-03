// src/screens/exercicio8.tsx
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

const Exercicio8 = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [resultado, setResultado] = useState("");

  const handleLogin = () => {
    if (senha !== confirmaSenha) {
      setResultado("As senhas não coincidem!");
    } else {
      setResultado(`E-mail: ${email} | Senha: ${senha}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />

      {/* Moldura em volta dos campos */}
      <View style={styles.moldura}>
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

        {/* Campo Confirmação de Senha */}
        <TextInput
          style={styles.input}
          placeholder="Confirme sua senha"
          value={confirmaSenha}
          onChangeText={setConfirmaSenha}
          secureTextEntry={true}
          maxLength={8}
        />

        {/* Botão Azul */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Logar</Text>
        </TouchableOpacity>
      </View>

      {/* Resultado */}
      {resultado !== "" && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{resultado}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Exercicio8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  moldura: {
    width: "100%",
    maxWidth: 270,
    padding: 20,
    borderWidth: 1,
    borderColor: "#0075d4ff",
    borderRadius: 12,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  input: {
    width: "100%",
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
    width: "100%",
    alignItems: "center",
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
    color: "red",
  },
});
