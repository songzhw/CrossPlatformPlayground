import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";
import Svg, { Circle, Defs, Use, Text } from "react-native-svg";

interface IProps extends ViewProps {
}

export const SvgCanvas5Pie = (props: IProps) => {

  return (
    <View>
      <Svg width={200} height={200} style={{backgroundColor: "gray"}}>
        <Defs>
          <Circle id="shape" cx="100" cy="100" r="80" fill="none" strokeWidth={28}/>
        </Defs>

        {/*越长的环, 越要在下方; 要是在上亠, 就会遮住其它环*/}
        <Use href="#shape" x={0} y={0} stroke={"green"} strokeDasharray="600 3000"/>
        <Use href="#shape" x={0} y={0} stroke={"red"} strokeDasharray="210 3000"/>
        <Use href="#shape" x={0} y={0} stroke={"blue"} strokeDasharray="100 3000"/>

        <Text x="50%" y="50%" fontSize={40} fill={"blue"} textAnchor={"middle"}>Pie</Text>
      </Svg>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});