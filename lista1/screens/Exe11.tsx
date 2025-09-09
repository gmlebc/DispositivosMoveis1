import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import logo from "../assets/fateclogo.png";

export default function exe11() {
  return (
    <>
      <SafeAreaView style={styles.master}>
        <View style={styles.border}>


        <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        </View>
          <Text style={styles.title}>HOME</Text>

          <View style={styles.buttonContainer}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Um</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Dois</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Tres</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Quatro</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Cinco</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Seis</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sete</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Oito</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Nove</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Dez</Text>
              </TouchableOpacity>
            </View>
          </View>
          
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  master: {
    flex: 1,
    backgroundColor: "#DCDCDC",
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
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "80%",
  },

  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    objectFit: 'contain',
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#F6B108",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    flex: 1,
    
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },

  text: {
    color: "black",
    fontSize: 12,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  
});
