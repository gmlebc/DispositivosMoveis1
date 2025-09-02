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
import { Picker } from "@react-native-picker/picker";

export default function exe9() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("user");
  const [savedData, setSavedData] = useState<{
    email: string;
    password: string;
    confirmPassword: string;
    userType: string;
  } | null>(null);

  const handleSave = () => {
    if (email && password && confirmPassword === password) {
      setSavedData({ email, password, confirmPassword, userType });
      Keyboard.dismiss();
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setUserType("user");
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <>
      <SafeAreaView style={styles.master}>
        <TouchableOpacity
          style={StyleSheet.absoluteFill}
          onPress={dismissKeyboard}
          activeOpacity={1}
        />

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

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Tipo de Usuário:</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={userType}
                onValueChange={(itemValue) => setUserType(itemValue)}
                style={styles.picker}
                dropdownIconColor="#fff"
              >
                <Picker.Item label="Administrador" value="admin" />
                <Picker.Item label="Gestor" value="manager" />
                <Picker.Item label="Usuário" value="user" />
              </Picker>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>

          
        </View>
        {savedData && (
            <View style={styles.savedDataContainer}>
              <Text style={styles.text2}>{savedData.email}-</Text>
              <Text style={styles.text2}>{savedData.password}-</Text>
              <Text style={styles.text2}>{savedData.confirmPassword}-</Text>
              <Text style={styles.text2}>{savedData.userType}</Text>
            </View>
          )}
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
  pickerContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    overflow: "hidden",
  },
  picker: {
    height: 50,
    width: "100%",
  },
  button: {
    backgroundColor: "#F6B108",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  text: {
    color: "white",
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    gap: 10,
    justifyContent: "center",
    flexDirection: "row",
  },
  savedDataContainer: {
    flexDirection: "row",
  },
  text2: {
    color: "white",
    fontSize: 16,
    marginBottom: 5,
  },
});
