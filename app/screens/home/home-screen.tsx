import React, { FC } from "react"
import { ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { AutoImage, Avatar, Header, Screen, Text } from "../../components"
import { color, spacing, typography } from "../../theme"

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

const userImage = require("../../../assets/images/user.png")
export const HomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> = function HomeScreen() {
  return (
    <View style={ROOT}>
      <AutoImage source={bg} style={backgroundStyle} />
      <Screen style={ROOT} backgroundColor="transparent" preset="scroll">
        {/* <Header headerTx="welcomeScreen.poweredBy" style={HEADER} titleStyle={HEADER_TITLE} /> */}
        <View
          style={{ paddingHorizontal: 20, flexDirection: "row", justifyContent: "space-between" }}
        >
          <View>
            <Text preset="body-16-20" style={{ color: "rgba(255,255,255,0.6)" }}>
              Good morning
            </Text>
            <Text preset="header-28-30">Nader!</Text>
          </View>
          <Avatar source={userImage} />
        </View>
      </Screen>
    </View>
  )
}
