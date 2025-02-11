import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ProfilScreen from "../screens/ProfilScreen";
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import CommunityScreen from '../screens/CommunityScreen';
import JournalingScreen from '../screens/JournalingScreen';
import ResourcesScreen from '../screens/ResourcesScreen';
import DashboardScreen from '../screens/DashboardScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} />
	  <Stack.Screen name="Profil" component={ProfilScreen} />
	  <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
	  <Stack.Screen name="Community" component={CommunityScreen} />
	  <Stack.Screen name="Journaling" component={JournalingScreen} />
	  <Stack.Screen name="Resources" component={ResourcesScreen} />
	  <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

