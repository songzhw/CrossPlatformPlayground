import React from "react";
import {Button} from 'react-native'

import {createStackNavigator} from 'react-navigation'

import HomeScreen from '../screen/HomeScreen'
import LoginScreen from '../screen/LoginScreen'
import SessionDetailScreen from '../screen/SessionDetailScreen'
import ScheduleScreen from '../screen/ScheduleScreen'
import FirstScreen from '../screen/FirstScreen'
import ChallengeOneScreen from "../screen/ChallengeOneScreen";
import SetStatePitfallScreen from "../screen/SetStatePitfallScreen";
import LoadingListScreen from "../screen/LoadingListScreen";
import ActionSheetDemo from "../screen/ActionSheetDemo";
import GestureAnimScreen from "../screen/GestureAnimScreen";
import DynamicTitleScreen from "../screen/navigation/DynamicTitleScreen";
import FelaDemo2 from "../screen/fela_demo/FelaDemo2";
import ContextDemo from "../screen/ContextDemo";
import FelaDemo1 from "../screen/fela_demo/FelaDemo1";
import FelaDemo3 from "../screen/fela_demo/FelaDemo3";
import FelaDemo4 from "../screen/fela_demo/FelaDemo4";
import FelaDemo5 from "../screen/fela_demo/FelaDemo5";
import FelaDemo6 from "../screen/fela_demo/FelaDemo6";
import FelaDemo7 from "../screen/fela_demo/FelaDemo7";
import MyDrawerDemoScreen from "../screen/drawer/MyDrawerDemoScreen";
import AxiosScreen from "../screen/AxiosScreen";


const HomeStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {headerTitle: 'Home'},
    },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {headerTitle: 'Log In'},
    },
    ScheduleScreen: {
      screen: ScheduleScreen,
      navigationOptions: {headerTitle: 'Schedule'},
    },
    SessionDetailScreen: {
      screen: SessionDetailScreen,
      navigationOptions: {headerTitle: 'Session Detail'},
    },
    FirstScreen: {
      screen: FirstScreen,
      navigationOptions: {headerTitle: 'First Screen'},
    },
    LoadingListScreen: {
      screen: LoadingListScreen,
      navigationOptions: {headerTitle: 'Loading More + Refresh'},
    },
    SetStatePitfallScreen: {
      screen: SetStatePitfallScreen,
      navigationOptions: {headerTitle: 'setState() pitfall'},
    },
    ChallengeOneScreen: {
      screen: ChallengeOneScreen,
      navigationOptions: {headerTitle: 'Challenge One'}
    },
    ActionSheetDemo: {
      screen: ActionSheetDemo,
      navigationOptions: {headerTitle: 'Custom ActionSheet'}
    },
    GestureAnimScreen: {
      screen: GestureAnimScreen,
      navigationOptions: {headerTitle: 'gesture + animation'}
    },
    DynamicTitleScreen: {
      screen: DynamicTitleScreen,
      navigationOptions: (props) => {
        const {navigation} = props
        const {params} = navigation.state
        return {
          title: params.title ? params.title : "Static Title",
          headerRight: (
            <Button
              title={params.mode === 'edit' ? "save" : "edit"}
              onPress={() => navigation.setParams({mode: params.mode === 'edit' ? "" : "edit"})}
            />
          )
        }
      }
    },
    FelaDemo1: {
      screen: FelaDemo1,
      navigationOptions: {headerTitle: 'fela demo 1'}
    },
    FelaDemo2: {
      screen: FelaDemo2,
      navigationOptions: {headerTitle: 'fela demo 2'}
    },
    FelaDemo3: {
      screen: FelaDemo3,
      navigationOptions: {headerTitle: 'fela demo 3'}
    },
    FelaDemo4: {
      screen: FelaDemo4,
      navigationOptions: {headerTitle: 'fela demo 4'}
    },
    FelaDemo5: {
      screen: FelaDemo5,
      navigationOptions: {headerTitle: 'fela demo 5'}
    },
    FelaDemo6: {
      screen: FelaDemo6,
      navigationOptions: {headerTitle: 'fela demo 6'}
    },
    FelaDemo7: {
      screen: FelaDemo7,
      navigationOptions: {headerTitle: 'fela demo 7'}
    },
    ContextDemo: {
      screen: ContextDemo,
      navigationOptions: {headerTitle: 'new Context API'}
    },
    MyDrawerDemoScreen: {
      screen: MyDrawerDemoScreen,
      navigationOptions: {headerTitle: 'My Drawer Demo'}
    },
    AxiosScreen: {
      screen: AxiosScreen,
      navigationOptions: {headerTitle: 'Axios Demo'}
    },
  },
  {
    headerMode: 'screen',
    gesturesEnabled: true,
  },
)

export default HomeStack