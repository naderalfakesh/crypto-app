import React, { FC } from "react"
import { ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { AutoImage, Avatar, Screen, Text } from "../../components"
import { color, spacing, typography } from "../../theme"
import Balance from "./Balance"
import Header from "./Header"

const bg = require("../../../assets/images/bg.png")

const ROOT: ViewStyle = {
  backgroundColor: "transparent",
  flex: 1,
}

const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
}

const BOLD: TextStyle = { fontWeight: "bold" }

const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[4] + spacing[1],
  paddingHorizontal: 0,
}

const HEADER_TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}

const backgroundStyle: ImageStyle = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  resizeMode: "stretch",
}

export const HomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> = function HomeScreen() {
  return (
    <View style={ROOT}>
      <AutoImage source={bg} style={backgroundStyle} />
      <Screen style={ROOT} backgroundColor="transparent" preset="fixed">
        <Header />
        <Balance />
      </Screen>
    </View>
  )
}
