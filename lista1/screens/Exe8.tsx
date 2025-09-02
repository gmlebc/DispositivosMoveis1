import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  SafeAreaView,
} from "react-native";

export default function exe8() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [savedData, setSavedData] = useState<{
    email: string;
    password: string;
  } | null>(null);

  const handleSave = () => {
    if (email && password && confirmPassword === password) {
      setSavedData({ email, password });
      Keyboard.dismiss();
    }
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <>
    <SafeAreaView style={styles.master}>
   
        <View style={styles.border}>
          <Text style={styles.title}>CADASTRE-SE</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Digite seu email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect={false}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Senha:</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Digite sua senha"
              secureTextEntry={true}
              maxLength={8}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirmar Senha:</Text>
            <TextInput
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Digite sua senha"
              secureTextEntry={true}
              maxLength={8}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>

          {savedData && (
            <View>
              <Text style={styles.text}>Dados Salvos:</Text>
              <Text style={styles.text}>Email: {savedData.email}</Text>
              <Text style={styles.text}>Senha: {savedData.password}</Text>
            </View>
          )}
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  master: {
    flex: 1,
    backgroundColor: "#2F2F2F",
    alignItems: "center",
    justifyContent: "center",
  },

  border: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ffff",
    padding: 15,
    maxWidth: 270,
    width: "100%",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 30,
  },

  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "600",
    color: "white",
  },
  input: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#F6B108",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
  
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  savedDataContainer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: "#3F3F3F",
    borderRadius: 8,
  },
  text: {
    color: "white",
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    gap: 20,
    justifyContent: "center",
    flexDirection: "row",
  },
});
