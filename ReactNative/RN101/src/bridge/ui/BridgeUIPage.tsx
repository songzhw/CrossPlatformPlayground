import React from "react";
import { View, ViewProps, Text, StyleSheet, SafeAreaView } from "react-native";
import { RippleBgView } from "../bridges";

interface IProps extends ViewProps  {}

export const BridgeUIPage = (props: IProps) => {

  return (
    <SafeAreaView>
      <RippleBgView style={{width:140, height: 150}}/>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {}
});