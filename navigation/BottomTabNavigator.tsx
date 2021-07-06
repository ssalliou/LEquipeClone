/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Foundation, Ionicons, AntDesign, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChronoScreen from '../screens/ChronoScreen';
import DirectsScreen from '../screens/DirectsScreen';
import ExploreScreen from '../screens/ExploreScreen';
import LiveScreen from '../screens/LiveScreen';

import HomeStack from './HomeStack';

import { BottomTabParamList, HomeParamList, ChronoParamList, DirectsParamList, ExploreParamList, LiveParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="accueil"
      tabBarOptions={{
        activeTintColor: "black",
        inactiveTintColor: 'grey',
        // activeTintColor: Colors[colorScheme].tint,
        labelPosition: "below-icon",
        // activeBackgroundColor: 'white',
        // inactiveBackgroundColor: 'white',
        labelStyle: { fontSize: 15, fontWeight: "bold" }
      }}
    >
      <BottomTab.Screen
        name="accueil"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => <Foundation name="home" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="chrono"
        component={ChronoNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="access-time" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="directs"
        component={DirectsNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="numeric-2-box" size={24} color="red" />,
        }}
      />
      <BottomTab.Screen
        name="explore"
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="subscriptions" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="live"
        component={LiveNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="video-collection" size={24} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

const ChronoStack = createStackNavigator<ChronoParamList>();

function ChronoNavigator() {
  return (
    <ChronoStack.Navigator>
      <ChronoStack.Screen
        name="ChronoScreen"
        component={ChronoScreen}
        options={{ headerTitle: 'Chrono' }}
      />
    </ChronoStack.Navigator>
  );
}

const DirectsStack = createStackNavigator<DirectsParamList>();

function DirectsNavigator() {
  return (
    <DirectsStack.Navigator>
      <DirectsStack.Screen
        name="DirectsScreen"
        component={DirectsScreen}
        options={{ headerTitle: 'Directs' }}
      />
    </DirectsStack.Navigator>
  );
}

const ExploreStack = createStackNavigator<ExploreParamList>();

function ExploreNavigator() {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{ headerTitle: 'Explore' }}
      />
    </ExploreStack.Navigator>
  );
}

const LiveStack = createStackNavigator<LiveParamList>();

function LiveNavigator() {
  return (
    <LiveStack.Navigator>
      <LiveStack.Screen
        name="LiveScreen"
        component={LiveScreen}
        options={{ headerTitle: 'Live' }}
      />
    </LiveStack.Navigator>
  );
}

// const ChronoStack = createStackNavigator<ChronoParamList>();

// function TabTwoNavigator() {
//   return (
//     <ChronoStack.Navigator>
//       <ChronoStack.Screen
//         name="ChronoScreen"
//         component={ChronoScreen}
//         options={{ headerTitle: 'Tab Two Title' }}
//       />
//     </ChronoStack.Navigator>
//   );
// }
