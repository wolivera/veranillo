import React  from 'react';
import { StackNavigator } from 'react-navigation';
import { HeaderBackButton } from 'react-navigation';
import HomeScreen from '../Home';
import MemberScreen from '../Member';

const AppNavigator = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerStyle: {
          height: 0,
          marginTop: Expo.Constants.statusBarHeight
        }
      }
    },
    Member: {
      screen: MemberScreen,
      navigationOptions: {
        headerStyle: {
          marginTop: Expo.Constants.statusBarHeight
        }
      }
    }
  },
  {
    initialRouteName: 'Home',
  }
)

export default AppNavigator;
