import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from 'expo-constants';


export default function Um() {
  return (
    <>
    {/* <StatusBar hidden /> */}
      <View style={styles.master}>

        <View style={styles.container1}>
        

            <View style={styles.container3}>
              <Text>333333333333333333333!</Text>
            </View>

            <View style={styles.container4}>
              <Text>444444444444444444444!</Text>
            </View>
        </View>

        <View style={styles.container2}>
          <Text>222222222222222222222!</Text>
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
    flexDirection:"row",
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

  container3: {
    flex: 0.5,
    width: "100%",
    backgroundColor: "lime",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },

  container4: {
    flex: 0.5,
    width: "100%",
    backgroundColor: "aquamarine",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
}
);
