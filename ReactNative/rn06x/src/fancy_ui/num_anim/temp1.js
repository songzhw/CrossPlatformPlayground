import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import Ticker from "./temp2";

export class NumberAnimationDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalPeopleNum: 7759287903,
      totalManNum: 3423245321,
      totalWomanNum: 3824245321,
      thisYearBirthNum: 134456432,
      thisYearDieNum: 46675234,
      todayBirthNum: 185432,
      todayDieNum: 72112

    };

    setInterval(() => {
      this.setState({
        totalPeopleNum: this.state.totalPeopleNum + this.getRandomNum(50)

      });
    }, 6000);
  }

  /**
   * 生成一个随机数
   */
  getRandomNum = num => {
    return Math.floor(Math.random() * num);
  };

  addCommas = nStr => {
    nStr += "";
    let x = nStr.split(".");
    let x1 = x[0];
    let x2 = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, "$1" + "," + "$2");
    }
    return x1 + x2;
  };

  render() {

    var totalPeopleNumStr = this.addCommas(this.state.totalPeopleNum);

    return (
      <View style={styles.container}>
        <Text style={styles.text}>全球总人口数量：</Text>
        <Ticker textStyle={styles.text} tickerNum={3} height={26}>
          {totalPeopleNumStr}
        </Ticker>

      </View>
    );
  }
}

const styles = {
  view: {
    alignItems: "center",
    border: "1px solid red",
    marginTop: 50
  },
  text: {
    fontSize: 20,
    color: "#abe333"
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333"
  }
};
