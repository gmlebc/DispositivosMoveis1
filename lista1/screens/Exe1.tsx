import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import React from "react";
// import { Image } from 'expo-image';
import Logo from "../assets/adaptive-icon.png";

export default function Um() {
  return (
    <>
      {/* <StatusBar hidden /> */}
      <View style={styles.master}>
        <View style={styles.container1}>
          <View style={styles.container3}>
            <TouchableOpacity onPress={() => {alert('BOA NOITE')}} style={styles.button}>
              <Image source={Logo} style={styles.image} resizeMode="contain" />
            </TouchableOpacity>
          </View>

          <View style={styles.container4}>
            <View style={styles.container5}>
                <TouchableOpacity onPress={() => {alert('BOA NOITE')}} style={styles.button}>
                <Image source={Logo} style={styles.image} resizeMode="contain" />
              </TouchableOpacity>
            </View>
            <View style={styles.container6}>
            <TouchableOpacity onPress={() => {alert('BOA NOITE')}} style={styles.button}>
            <Image source={Logo} style={styles.image} resizeMode="contain" />
          </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.container2}>
          <TouchableOpacity onPress={() => {alert('BOA NOITE')}} style={styles.button}>
            <Image source={Logo} style={styles.image} resizeMode="contain" />
          </TouchableOpacity>
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
    flexDirection: "row",
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

  container5: {
    flex: 0.5,
    width: "100%",
    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },

  container6: {
    flex: 0.5,
    width: "100%",
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 64,
    height: 64,
  },
  
  image: {
    width: 64,
    height: 64,
  },

});