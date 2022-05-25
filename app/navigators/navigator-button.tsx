import { View, StyleSheet } from "react-native"
import React, { Component } from "react"
import { Shadow } from "react-native-shadow-2"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export class NavigatorButton extends Component {
  render() {
    return (
      <Shadow
        startColor="rgba(67, 118, 254, 0.5)"
        finalColor="rgba(67, 118, 254, 0.1)"
        distance={2}
        offset={[0, 1]}
      >
        <View style={styles.button}>
          <MaterialCommunityIcons name="menu" color="white" size={30} />
        </View>
      </Shadow>
    )
  }
}

export default NavigatorButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(67, 118, 254, 1)",
    padding: 8,
    borderRadius: 30,
  },
})
