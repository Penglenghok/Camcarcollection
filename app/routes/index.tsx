import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeContainer from "../screens/Home";
import SearchContainer from "../screens/Search/SearchContainer";
import DealersContainer from "../screens/Dealers/DealersContainer";
import WishlistContainer from "../screens/Wishlist/WishlistContainer";
import ProfileContainer from "../screens/Profile/ProfileContainer";

import Icon from 'react-native-vector-icons/Feather';

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function HOME_STACK() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HOME" component={HomeContainer} />
    </HomeStack.Navigator>
  );
}

function HomeTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#000',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HOME_STACK}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Search" component={SearchContainer}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Dealers" component={DealersContainer}
        options={{
          tabBarLabel: 'Dealers',
          tabBarIcon: ({ color, size }) => (
            <Icon name="shopping-bag" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Wishlist" component={WishlistContainer}
        options={{
          tabBarLabel: 'Wishlist',
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Account" component={ProfileContainer} options={{
        tabBarLabel: 'Account',
        tabBarIcon: ({ color, size }) => (
          <Icon name="user" color={color} size={size} />
        ),
      }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <HomeTab />
    </NavigationContainer>
  );
}
