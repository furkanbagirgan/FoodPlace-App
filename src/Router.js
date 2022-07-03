import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Router() {
  const Tabs=()=>{
    return (
      <Tab.Navigator 
          screenOptions={({ route }) => ({
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "HomeTab") {
                iconName = focused
                  ? "food"
                  : "food-outline";
              } else if (route.name === "FavoritesTab") {
                iconName = focused ? "heart-multiple" : "heart-multiple-outline";
              } else if (route.name === "ProfileTab") {
                iconName = focused ? "account-circle" : "account-circle-outline";
              }

              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
            headerShown: false,
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#fff",
            tabBarActiveBackgroundColor: "#4caf50",
            tabBarInactiveBackgroundColor: "#4caf50",
          })}
        >
          <Tab.Screen name="HomeTab" component={Home} />
          <Tab.Screen name="FavoritesTab" component={Favorites} />
          <Tab.Screen name="ProfileTab" component={Profile} />
        </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={Tabs} options={{headerShown:false}}/>
        <Stack.Screen name="Detail" component={Detail} options={{
          title: "Restaurant Detail",
          headerShadowVisible: false,
          headerTitleAlign: "center",
          headerTintColor: "#4caf50",
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;