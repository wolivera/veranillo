import React from 'react';
import { Icon } from 'react-native-elements'
import { TabNavigator } from "react-navigation";

import PeopleScreen from '../People';
import AboutScreen from '../About';
import QuotesScreen from '../Quotes';

const MainScreenNavigator = TabNavigator({
  'Veranillo': {
    screen: AboutScreen,
    navigationOptions: {
      tabBarLabel: 'Veranillo',
      tabBarIcon: () => <Icon name="wb-sunny" color="white" />
    }
  },
  'Epico': {
    screen: QuotesScreen,
    navigationOptions: {
      tabBarLabel: 'Épico',
      tabBarIcon: () => <Icon name="book" color="white" />
    }
  },
  'Equipo': {
    screen: PeopleScreen,
    navigationOptions: {
      tabBarLabel: 'El equipo',
      tabBarIcon: () => <Icon name="group" color="white" />
    }
  },
},
{
  swipeEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    activeTintColor: '#ffffff',
    inactiveTintColor: '#ffffff',
    inactiveBackgroundColor: '#353539',
    activeBackgroundColor: '#353539',
    indicatorStyle: {
      borderBottomColor: '#ffffff',
      borderBottomWidth: 2,
    },
    labelStyle:{
      fontSize: 11,
      justifyContent: 'center',
      alignItems: 'center',
    },
    style:{
      backgroundColor: '#353539',
    },
    tabStyle: {
      justifyContent: 'center',
      alignItems: 'center',
    }
  }
});

export default MainScreenNavigator;
