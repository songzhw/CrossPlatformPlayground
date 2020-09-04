import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";
import Svg, { Circle, Defs, Use, Text } from "react-native-svg";

export interface IPieData {
  percentage: number; //30 means "30%"
  name: string;
  color?: string;
}

interface IProps extends ViewProps {
  radius: number;
  size: number;
  pieWidth: number;
  data: IPieData[]; // all of their `percentage` should sum up to be 100
  title: string;
}

export const PieChart = (props: IProps) => {
  const { size, radius, pieWidth, data, title } = props;

  const circumference = Math.PI * 2 * radius;
  let previousLength = 0;
  const pieData: IPieData[] = data.map(datum => {
    const length = circumference * datum.percentage / 100;
    previousLength += length;
    const color = datum.color ? datum.color : "black"; //TODO 改随机颜色
    return { percentage: previousLength, name: datum.name, color: color };
  });


  return (
    <View style={props.style}>
      <Svg width={size} height={size} viewBox="0 0 100 100" style={{ backgroundColor: "gray" }}>
        <Defs>
          <Circle id="shape" cx="50" cy="50" r={radius} fill="none" strokeWidth={pieWidth}/>
        </Defs>

        {/*越长的环, 越要在下方; 要是在上方, 就会遮住其它环*/}
        {pieData.map(datum =>
          <Use href="#shape" x={0} y={0} stroke={datum.color} strokeDasharray={`${datum.percentage} 3000`}/>
        )}

        <Text x="50" y="50" fontSize={18} fill={"blue"} textAnchor={"middle"}>{title}</Text>
      </Svg>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});