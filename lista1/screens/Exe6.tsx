import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
} from "react-native";

export default function Exe6() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [savedData, setSavedData] = useState<{
    name: string;
    age: string;
  } | null>(null);

  const handleSave = () => {
    if (name && age) {
      setSavedData({ name, age });
      Keyboard.dismiss();
    }
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <>
    <View style={styles.master}>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Nome:</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Digite seu nome"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Idade:</Text>
              <TextInput
                style={styles.input}
                value={age}
                onChangeText={setAge}
                placeholder="Digite sua idade"
                keyboardType="numeric"
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>

            {savedData && (
              <View>
                <Text style={styles.text}>Dados Salvos:</Text>
                <Text style={styles.text}>Nome: {savedData.name}</Text>
                <Text style={styles.text}>Idade: {savedData.age} anos
                </Text>
              </View>
            )}
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  master: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#2F2F2F",
    padding: 10,
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
    backgroundColor: "#2396F1",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});
