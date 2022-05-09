import { View } from "react-native"
import { Text } from "../../components"
import React from "react"

const Balance = () => {
  return (
    <View style={{ paddingHorizontal: 20, marginTop: 24, marginBottom: 20 }}>
      <Text preset="body-16-20" style={{ color: "rgba(255,255,255,0.6)" }}>
        Balance
      </Text>
      <Text preset="header-26-32">
        USD 13220.40
        <Text preset="header-20-22" style={{ color: "background: rgba(81, 174, 111, 1)" }}>
          {` +7.65%`}
        </Text>
      </Text>
    </View>
  )
}

export default Balance
