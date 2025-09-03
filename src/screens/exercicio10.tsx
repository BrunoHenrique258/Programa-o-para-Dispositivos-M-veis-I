// src/screens/exercicio10.tsx
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Switch,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const Exercicio10 = () => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [confirmaSenha, setConfirmaSenha] = useState<string>("");
  const [perfil, setPerfil] = useState<string>("manager");
  const [logado, setLogado] = useState<boolean>(false); // novo estado do Switch
  const [resultado, setResultado] = useState<string>("");

  const handleLogin = () => {
    if (senha !== confirmaSenha) {
      setResultado("As senhas não coincidem!");
    } else {
      setResultado(
        `E-mail: ${email} | Senha: ${senha} | Perfil: ${perfil} | Logado: ${
          logado ? "Sim" : "Não"
        }`
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />

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
          secureTextEntry
          maxLength={8}
        />

        {/* Campo Confirmação de Senha */}
        <TextInput
          style={styles.input}
          placeholder="Confirme sua senha"
          value={confirmaSenha}
          onChangeText={setConfirmaSenha}
          secureTextEntry
          maxLength={8}
        />

        {/* Campo Escolha */}
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={perfil}
            onValueChange={(itemValue: string) => setPerfil(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Administrador" value="admin" />
            <Picker.Item label="Gestor" value="manager" />
            <Picker.Item label="Usuário" value="user" />
          </Picker>
        </View>

        {/* Switch */}
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Logado:</Text>
          <Switch
            value={logado}
            onValueChange={setLogado}
            trackColor={{ false: "#e77878", true: "#94df83" }}
            thumbColor={logado ? "#47eb22" : "#ed1111"}
          />
        </View>

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

export default Exercicio10;

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
  pickerContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 12,
    overflow: "hidden",
  },
  picker: { width: "100%", height: 45 },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 12,
  },
  switchLabel: { fontSize: 16, fontWeight: "bold" },
  button: {
    backgroundColor: "#0075d4ff",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 8,
    width: "100%",
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  resultContainer: { marginTop: 20, padding: 10 },
  resultText: { fontSize: 16, fontWeight: "bold", color: "red" },
});
