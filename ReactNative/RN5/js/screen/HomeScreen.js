import React, { Component } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

class HomeScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.root}>

        <View style={{ height: 8 }}/>
        <Text style={styles.title}>Custom View</Text>
        <HomeButton title="Action Sheet" onPress={() => navigation.navigate("ActionSheetDemo")}/>
        <HomeButton title="Drawer Layout" onPress={() => navigation.navigate("MyDrawerDemo")}/>
        <HomeButton title="Loading List" onPress={() => navigation.navigate("LoadingListScreen")}/>
        <HomeButton title="Component Buttons" onPress={() => navigation.navigate("RadioGroupScreen")}/>


        <View style={{ height: 8 }}/>
        <Text style={styles.title}>React Hooks(RN0.59+)</Text>
        <HomeButton title="heart anim(class)" onPress={() => navigation.navigate("Pulse_Class_Screen")}/>
        <HomeButton title="heart anim(hooks)" onPress={() => navigation.navigate("Pulse_Func_Screen")}/>
        <HomeButton title="state hools trap : async" onPress={() => navigation.navigate("HooksAsyncTrapScreen")}/>
        <HomeButton title="fix state hools trap : async" onPress={() => navigation.navigate("FixHooksAsyncTrapScreen")}/>
        <HomeButton title="[Failed] fix 02? " onPress={()=>navigation.navigate("FixHooksAsyncTrap2")}/>
        <HomeButton title="use callback demo" onPress={()=>navigation.navigate("UseCallbackScreen")}/>
        <HomeButton title="variable scope issue" onPress={()=>navigation.navigate("VariableScopeIssue")}/>


        <View style={{ height: 20 }}/>
        <Text style={styles.title}>RN Tutorial</Text>
        <HomeButton title="setState (partly)" onPress={()=> navigation.navigate("SetStateScreen")}/>
        <HomeButton title="class vs. func" onPress={()=>navigation.navigate("ClassVsFuncScreen")}/>
        <HomeButton title="singleton?" onPress={() => navigation.navigate("Singleton1Screen")}/>
        <HomeButton title="find Node Hanlder method" onPress={() => navigation.navigate("FindNodeHandlerScreen")}/>
        <HomeButton title="Context" onPress={() => navigation.navigate("ContextDemo")}/>
        <HomeButton title="PanResponder" onPress={() => navigation.navigate("GestureAnimScreen")}/>
        <HomeButton title="Toolbar - dynamic title" onPress={() => navigation.navigate("DynamicTitleScreen", { name: "home3" })}/>
        <HomeButton title="pitfall - setState()" onPress={() => navigation.navigate("SetStatePitfallScreen")}/>
        <HomeButton title="[error] native view group component" onPress={() => navigation.navigate("BridgeScrollViewScreen")}/>


        <View style={{ height: 8 }}/>
        <Text style={styles.title}>Saga</Text>
        <HomeButton title="setInterval() in saga" onPress={()=> navigation.navigate("IntervalEventScreen")}/>

        <View style={{ height: 8 }}/>
        <Text style={styles.title}>Animation</Text>
        <HomeButton title="Flip Card" onPress={() => navigation.navigate("FlipCardScreen")}/>

        <View style={{ height: 8 }}/>
        <Text style={styles.title}>Redux Research</Text>
        <HomeButton title="saga channel" onPress={() => navigation.navigate("SagaChannelScreen")}/>
        <HomeButton title="mapStateToProps" onPress={() => navigation.navigate("MapStateToPropsScreen")}/>
        <HomeButton title="burden of Redux" onPress={() => navigation.navigate("ReduxProblemScreen")}/>

        <View style={{ height: 8 }}/>
        <Text style={styles.title}>Layout</Text>
        <HomeButton title="layout - flex?" onPress={() => navigation.navigate("FlexOrNotScreen")}/>
        <HomeButton title="Flex 3 props" onPress={() => navigation.navigate("FlexThreePropsScreen")}/>
        <HomeButton title="Flex Demo: Tourism" onPress={() => navigation.navigate("TourismPriceScreen")}/>



        <View style={{ height: 20 }}/>
        <Text style={styles.title}>3rd library demos</Text>
        <HomeButton title="Axios" onPress={() => navigation.navigate("AxiosScreen")}/>

        <View style={{ height: 20 }}/>
        <Text style={styles.title}>仿制</Text>
        <HomeButton title="F8 App" onPress={() => navigation.navigate("F8LoginScreen")}/>
        <HomeButton title="Ko First" onPress={() => navigation.navigate("KoFirstScreen")}/>


        <View style={{ height: 8 }}/>
        <Text style={styles.title}>Optimization</Text>


      </ScrollView>
    );
  }
}


class HomeButton extends Component {
  render() {
    return (
      <View style={styles.aButton}>
        <Button title={this.props.title} onPress={this.props.onPress} uppercase={false}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  aButton: {
    fontSize: 30,
    color: "red",
    margin: 4
  },
  title: {
    height: 25,
    fontSize: 18,
    textAlign: "center",
    color: "black"
  }
});

export default HomeScreen;
