import React from "react";
import { Animated, Button, StyleSheet, Text, View } from "react-native";

export class NadProcess03 extends React.Component {
  state = {
    animation: new Animated.Value(0)
  };

  numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  render() {
    const transformStyle = {
      transform: [{
        translateY: this.state.animation
      }]
    };

    return (
      <View style={styles.container}>
        <Button title="start " onPress={this.startAnimation}/>
        <Button title="rest " onPress={this.resetAnimation}/>
        <View style={styles.numberBox}>
          <Animated.View style={[transformStyle]}>
            {this.numbers.map(num => (
              <Text key={num} style={{ height: 40 }}>{num}</Text>
            ))}
          </Animated.View>
        </View>
      </View>
    );
  }

  private startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: -310,
      duration: 1000
    }).start();
  };

  private resetAnimation = () => {
    this.setState({
      animation: new Animated.Value(0)
    });
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  numberBox: {
    width: 40,
    height: 40,
    backgroundColor: ("#2E7D32"),
    overflow: "hidden"
  }
});