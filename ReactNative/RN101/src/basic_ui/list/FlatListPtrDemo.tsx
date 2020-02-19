import React, { useState } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, Text, View, ViewProps } from "react-native";
import { Tea } from "./ListPojo";

interface IProps extends ViewProps {
}

export const FlatListPtrDemo = (props: IProps) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [data, setData] = useState<Tea[]>([{ id: 100, name: "乌龙" }, { id: 101, name: "龙井" },
    { id: 102, name: "魁龙珠" }, { id: 103, name: "猴魁" }, { id: 104, name: "毛尖" }]);

  function renderRow(itemWrapper: ListRenderItemInfo<Tea>) {
    const item = itemWrapper.item;
    return (
      <View style={{ height: 150, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
        <Text>{item.id} -- {item.name}</Text>
      </View>
    );
  }

  function renderDivider() {
    return <View style={styles.divider}/>;
  }

  function onRefreshList() {
    console.log(`szw refresh`);
  }

  function renderRefreshControl() {
    return <Text style={{ backgroundColor: "#ccc" }}> Ad Ad here </Text>;
  }

  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => index + "" + item.id}
        data={data}
        renderItem={renderRow}
        ItemSeparatorComponent={renderDivider}
        refreshing={isRefreshing}
        onRefresh={onRefreshList}
        refreshControl={renderRefreshControl}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {},
  divider: {
    //不写width就是divider全屏
    height: 1,
    backgroundColor: "black"
  }
});
