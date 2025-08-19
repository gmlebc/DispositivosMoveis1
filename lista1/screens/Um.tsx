import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from 'expo-constants';


export default function Um() {
  return (
    <>
    {/* <StatusBar hidden /> */}
      <View style={styles.master}>

        <View style={styles.container1}>
          <View>
            <Text>1111111111111111111!</Text>
            <StatusBar style="auto" />
          </View>
        </View>

        <View style={styles.container2}>
          <Text>222222222222222222222!</Text>
          <StatusBar style="auto" />
        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  master: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
  },

  container1: {
    flex: 1,
    width: "100%",
    backgroundColor: "crimson",
    alignItems: "center",
    justifyContent: "center",
  },

  container2: {
    flex: 1,
    width: "100%",
    backgroundColor: "salmon",
    alignItems: "center",
    justifyContent: "center",
  },
}

);
