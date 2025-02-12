import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screens/Home";
import Schedule from "../screens/Schedule";
import History from "../screens/History";
import Notification from "../screens/Notification";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// 📌 Stack Navigator cho Home (để có thể mở Profile)
function HomeStack() {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
    }
    }
    >
      <Stack.Screen name="HomeMain" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={Profile} options={{ headerBackTitle: "Back" }} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Schedule") {
              iconName = focused ? "calendar" : "calendar-outline";
            } else if (route.name === "History") {
              iconName = focused ? "time" : "time-outline";
            } else if (route.name === "Notification") {
              iconName = focused ? "notifications" : "notifications-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "rgba(228, 88, 88, 0.91)",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            height: 80,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingBottom: 10,
            paddingTop: 10,
            justifyContent: "center",
            alignItems: "center",
          },
          tabBarIconStyle: {
            width: 30,
            height: 30,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Schedule" component={Schedule} />
        <Tab.Screen name="History" component={History} />
        <Tab.Screen name="Notification" component={Notification} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
