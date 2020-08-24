import React, { useState } from "react";
import { View, ViewProps, Text, StyleSheet, TouchableOpacity, LayoutAnimation } from "react-native";

interface IProps extends ViewProps {
}

export const LayoutAnimDemo = (props: IProps) => {
  const [size, setSize] = useState(90);

  const click1 = () => {
    LayoutAnimation.configureNext({
      duration: 2000,   //持续时间
      create: {
        type: LayoutAnimation.Types.spring,
        property: 'opacity',
      },
      update: {
        type: 'spring',
        springDamping: 0.4,
      }
    });
    const newSize = size === 90 ? 220 : 90;
    setSize(newSize);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={click1}>
        <View style={[styles.circle, { width: size, height: size, borderRadius: size/2 }]}/>
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
    borderColor: "white",
  }
});