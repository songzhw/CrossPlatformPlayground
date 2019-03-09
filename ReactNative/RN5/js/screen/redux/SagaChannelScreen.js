import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { connect } from "react-redux";
import { getChannelDemoAction } from "../../redux/research/channelDemoReducer";

class SagaChannelScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>SagaChannelScreen Screen</Text>
        <Button title="send action" onPress={() => this.props.dispatch(getChannelDemoAction())}/>
        <Text> {this.props.text2} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});

const mapStateToProps = (state) => {
  let { text } = state.playgroundReducers.channelDemoReducer;
  return { text2: text };
};

export default connect(mapStateToProps)(SagaChannelScreen);