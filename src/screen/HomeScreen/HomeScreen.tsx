import { Text, View, ScrollView } from "react-native";
import { S } from "./Style";
import { useQuery } from "react-query";
import { fetchList, getFilterList } from "../../api/api";
import { listProps } from "../../types/list";
import ListBox from "../../components/ListBox";
import Header from "../../components/common/Header/Header";
import { useEffect, useState } from "react";

function HomeScreen() {
  const { data } = useQuery("posts", fetchList);
  const [list, setList] = useState<listProps[]>(data);

  const onHandleCategoryClick = async (category: string) => {
    if (category === "영화" || category === "드라마") {
      const filterList: listProps[] = await getFilterList(category);
      setList(filterList);
    } else {
      setList(data);
    }
  };

  return (
    <View style={S.Wrapper}>
      <Header onCategoryClick={onHandleCategoryClick} />
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
