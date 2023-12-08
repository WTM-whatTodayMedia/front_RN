import { StyleSheet } from "react-native";

export const S = StyleSheet.create({
  Wrapper: {
    width: "100%",
    height: "100%",
    padding: "1%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
  List: {
    flex: 1,
    width: "100%",
    paddingVertical: "2%",
  },
  StylegridView: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 16,
    paddingTop: 50,
    justifyContent: "space-between",
    paddingBottom: 80,
  },
});
