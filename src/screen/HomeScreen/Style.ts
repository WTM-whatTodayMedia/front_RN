import { Platform, StyleSheet } from "react-native";
import Constants from "expo-constants";

export const S = StyleSheet.create({
  Wrapper: {
    width: "100%",
    height: "100%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    marginTop: Platform.OS === "ios" ? Constants.statusBarHeight : 0,
  },
  List: {
    flex: 1,
    width: "100%",
  },
  StylegridView: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 16,
    justifyContent: "space-between",
    paddingBottom: 80,
  },
  image: {
    width: "100%",
    height: 200,
  },
});
