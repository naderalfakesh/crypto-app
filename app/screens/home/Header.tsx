import { View } from "react-native"
import { Avatar, Text } from "../../components"
import React from "react"

const userImage = require("../../../assets/images/user.png")

const Header = () => {
  return (
    <View style={{ paddingHorizontal: 20, flexDirection: "row", justifyContent: "space-between" }}>
      <View>
        <Text preset="body-16-20" style={{ color: "rgba(255,255,255,0.6)" }}>
          Good morning
        </Text>
        <Text preset="header-28-30">Nader!</Text>
      </View>
      <Avatar source={userImage} />
    </View>
  )
}

export default Header
