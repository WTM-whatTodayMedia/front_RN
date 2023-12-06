import { StyleSheet } from "react-native";
import { theme } from "../../util/color";

export const S = StyleSheet.create({
  Wrapper: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
  Radio: {
    paddingVertical: 23,
    marginVertical: 10,
  },
  List: {
    flex: 8,
    paddingVertical: 10,
    height: 300,
    flexDirection: "column",
  },
  ListItem: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 7,
    borderRadius: 5,
    backgroundColor: theme.mainColor,
  },
  ItemText: {
    fontSize: 20,
    color: "white",
  },
});
