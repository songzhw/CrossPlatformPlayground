/*
@Deprecated: 根本不行
整个页面只显示一个"Refresing..."的MyRefreshControl.
根本没有ListView显示出来.
 */

import React, { useState } from "react";
import { FlatList, ListRenderItemInfo, RefreshControlProps, StyleSheet, Text, View, ViewProps } from "react-native";
import { Tea } from "../ListPojo";

export const PtrDemo3 = () => {
  return <View/>
}



//
// interface IProps extends ViewProps {
// }
//
//
//
// const MyRefreshControl = (props: RefreshControlProps) => {
//   return (
//     <Text>Refreshing...</Text>
//   );
// };
//
// export const PtrDemo3 = (props: IProps) => {
//   const [isRefreshing, setIsRefreshing] = useState(false);
//   const [data, setData] = useState<Tea[]>([{ id: 100, name: "乌龙" }, { id: 101, name: "龙井" },
//     { id: 102, name: "魁龙珠" }, { id: 103, name: "猴魁" }, { id: 104, name: "毛尖" }]);
//
//   function renderRow(itemWrapper: ListRenderItemInfo<Tea>) {
//     const item = itemWrapper.item;
//     return (
//       <View style={{ height: 150, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
//         <Text>{item.id} -- {item.name}</Text>
//       </View>
//     );
//   }
//
//   function renderDivider() {
//     return <View style={styles.divider}/>;
//   }
//
//   function onRefreshList() {
//     setIsRefreshing(true);
//     setTimeout(() => setIsRefreshing(false), 3000);
//   }
//
//   function renderRefreshControl() {
//     return (
//       <MyRefreshControl
//         refreshing={isRefreshing}
//         onRefresh={onRefreshList}
//         colors={["#ff0000", "#00ff00", "#0000ff"]}
//         progressBackgroundColor={"#000"}
//       />);
//   }
//
//   return (
//     <View>
//       <FlatList
//         keyExtractor={(item, index) => index + "" + item.id}
//         data={data}
//         renderItem={renderRow}
//         ItemSeparatorComponent={renderDivider}
//         refreshControl={renderRefreshControl()}
//       />
//     </View>
//   );
// };
//
//
// const styles = StyleSheet.create({
//   container: {},
//   divider: {
//     //不写width就是divider全屏
//     height: 1,
//     backgroundColor: "black"
//   }
// });