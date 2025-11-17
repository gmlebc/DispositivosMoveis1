import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },

  contenttop: {
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#FFF8F0',
  },
  top: {
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    backgroundColor: "#ffa07a",
  },

  contentbottom: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: '#f0807f',
  },
  middle: {
    // middle is a small input area in portrait
    minHeight: 56,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f07f7e",
  },
  bottom: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "#fe6347",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },

});
