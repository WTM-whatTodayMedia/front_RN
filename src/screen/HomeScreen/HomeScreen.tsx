import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { S } from "./Style";
import { useQuery } from "react-query";
import { fetchList } from "../../api/api";
import { listProps } from "../../types/list";
import ListBox from "../../components/ListBox";

function HomeScreen() {
  const { data } = useQuery("posts", fetchList);
  const list: listProps[] = data?.results;

  return (
    <View style={S.Wrapper}>
      <ScrollView
        style={S.List}
        contentContainerStyle={{
          flexDirection: "column",
          flexWrap: "wrap",
        }}
      >
        {list && list.length > 0 ? (
          list.map((i, index) => (
            <ListBox
              key={index}
              cover={i.cover}
              title={i.properties.Name.title[0]?.text.content}
              category={i.properties.Category.multi_select}
            />
          ))
        ) : (
          <Text>없음</Text>
        )}
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
