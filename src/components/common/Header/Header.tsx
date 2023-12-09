import { Text, View } from "react-native";
import { S } from "./Style";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { useState } from "react";
import { theme } from "../../../util/color";

function Header() {
  const [category, setCategory] = useState("");
  const onChangeText = (payload: string) => setCategory(payload);

  return (
    <View style={S.container}>
      <Text style={S.HeaderText}>WTM</Text>
      <SegmentedControl
        style={S.Radio}
        selectedIndex={0}
        tintColor={theme.mainColor}
        values={["전체", "영화", "드라마"]}
        fontStyle={{ fontSize: 20 }}
        backgroundColor={"#1F2326"}
        onValueChange={onChangeText}
      />
    </View>
  );
}

export default Header;
