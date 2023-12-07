import { StyleSheet } from "react-native";

export const S = StyleSheet.create({
  Wrapper: {
    width: 100,
    height: 200,
    flex: 1,
    flexDirection: "column",
    cursor: "pointer",
    marginVertical: 15,
    transition: "all 0.15s ease-in-out",
    borderRadius: 7,
  },
  image: {
    width: 100,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  Decs: {
    width: "100%",
    height: 80,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: "2%",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.055)",
  },
  Title: {
    fontSize: 1.2,
    fontWeight: "bold",
    color: "white",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  Categorys: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
});
