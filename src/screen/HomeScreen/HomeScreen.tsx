import { Text, View, ScrollView } from "react-native";
import { S } from "./Style";
import { useQuery } from "react-query";
import { fetchList } from "../../api/api";
import { listProps } from "../../types/list";
import ListBox from "../../components/ListBox";
import Header from "../../components/common/Header/Header";

function HomeScreen() {
  const { data } = useQuery("posts", fetchList);
  const list: listProps[] = data?.results;

  return (
    <View style={S.Wrapper}>
      <Header />
      <ScrollView style={S.List} horizontal={false}>
        <View style={S.StylegridView}>
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
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
