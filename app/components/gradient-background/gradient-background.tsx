import * as React from "react"
import { ViewStyle } from "react-native"
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient"

const BG_GRADIENT: ViewStyle = { position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }

export interface GradientBackgroundProps extends LinearGradientProps {}

export function GradientBackground(props: GradientBackgroundProps) {
  return <LinearGradient colors={props.colors} style={BG_GRADIENT} />
}
