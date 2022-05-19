/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import React from "react"
import { useColorScheme, View } from "react-native"
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeScreen } from "../screens"
import { navigationRef, useBackButtonHandler } from "./navigation-utilities"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { Shadow } from "react-native-shadow-2"

export type NavigatorParamList = {
  home: undefined
}

const Stack = createNativeStackNavigator<NavigatorParamList>()
const Tab = createBottomTabNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="home"
    >
      <Stack.Screen name="home" component={HomeScreen} />
    </Stack.Navigator>
  )
}
const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { borderTopWidth: 0, position: "absolute" },
        tabBarBackground: () => <View />,
        tabBarActiveTintColor: "rgba(67, 118, 254, 1)",
        tabBarInactiveTintColor: "rgba(162, 162, 162, 1)",
      }}
      initialRouteName="home"
    >
      <Tab.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={size} />
          ),
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name="portfolio"
        options={{
          tabBarLabel: "Portfolio",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clock-time-three-outline" color={color} size={size} />
          ),
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name="home2"
        options={{
          tabBarLabelStyle: { display: "none" },
          tabBarIcon: ({ color, size }) => (
            <Shadow
              startColor="rgba(67, 118, 254, 0.5)"
              finalColor="rgba(67, 118, 254, 0.1)"
              distance={2}
              offset={[0, 1]}
            >
              <View
                style={{ backgroundColor: "rgba(67, 118, 254, 1)", padding: 8, borderRadius: 30 }}
              >
                <MaterialCommunityIcons name="menu" color="white" size={30} />
              </View>
            </Shadow>
          ),
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name="prices"
        options={{
          tabBarLabel: "Prices",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="signal-cellular-outline" color={color} size={size} />
          ),
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name="settings"
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-outline" color={color} size={size} />
          ),
        }}
        component={HomeStack}
      />
    </Tab.Navigator>
  )
}

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme()
  useBackButtonHandler(canExit)
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
}

AppNavigator.displayName = "AppNavigator"

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["welcome"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
