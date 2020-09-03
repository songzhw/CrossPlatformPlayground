import React, { useState } from "react";
import { View, ViewProps, Text, StyleSheet, TouchableOpacity, LayoutAnimation } from "react-native";

interface IProps extends ViewProps {
}

export const LayoutAnimDemo = (props: IProps) => {
  const [size, setSize] = useState(90);

  const click1 = () => {
    // LayoutAnimation.configureNext({
    //   duration: 12000,
    //   create: {
    //     type: LayoutAnimation.Types.linear,
    //     property: LayoutAnimation.Properties.scaleXY,
    //     springDamping: 3
    //   },
    //   update: {
    //     type: LayoutAnimation.Types.linear,
    //     property: LayoutAnimation.Properties.scaleXY,
    //     springDamping: 3
    //   }
    // })
    LayoutAnimation.spring();
    const newSize = size === 90 ? 220 : 90;
    setSize(newSize);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={click1}>
        <View style={[styles.circle, { width: size, height: size, borderRadius: size / 2 }]}/>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  circle: {
    backgroundColor: "#f76260",
    borderColor: "white"
  }
});