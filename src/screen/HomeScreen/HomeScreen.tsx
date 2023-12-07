import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";
import { S } from "./Style";
import { useQuery } from "react-query";
import { fetchList } from "../../api/api";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";
import { listProps } from "../../types/list";

type RootStackParamList = {
  Detail: {
    id: number;
  };
};

type DetailsScreenNavigationProp = NavigationProp<RootStackParamList>;

function HomeScreen() {
  const { data } = useQuery("posts", fetchList);
  const list: listProps[] = data?.results;

  return (
    <View style={S.Wrapper}>
      <ScrollView style={S.List}></ScrollView>
    </View>
  );
}

export default HomeScreen;
