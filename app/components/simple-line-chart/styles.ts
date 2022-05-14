import { StyleSheet } from "react-native"

export type Theme = "purple" | "blue" | "grey" | "torque" | "green" | "red"

export const getThemeStyles = (color: Theme) => {
  switch (color) {
    case "purple":
      return StyleSheet.create({
        line: { backgroundColor: "rgba(190, 26, 247, 1)" },
        lineShadow: { backgroundColor: "rgba(190, 26, 247, 0.2)" },
      })
    case "blue":
      return StyleSheet.create({
        line: { backgroundColor: "rgba(75, 112, 255, 1)" },
        lineShadow: { backgroundColor: "rgba(75, 112, 255, 0.2)" },
      })
    case "grey":
      return StyleSheet.create({
        line: { backgroundColor: "rgba(69, 69, 99, 1)" },
        lineShadow: { backgroundColor: "rgba(69, 69, 99, 0.2)" },
      })
    case "torque":
      return StyleSheet.create({
        line: { backgroundColor: "rgba(18, 118, 167, 1)" },
        lineShadow: { backgroundColor: "rgba(18, 118, 167, 0.2)" },
      })
    case "green":
      return StyleSheet.create({
        line: { backgroundColor: "rgba(1, 127, 4, 1)" },
        lineShadow: { backgroundColor: "rgba(1, 127, 4, 0.2)" },
      })
    case "red":
      return StyleSheet.create({
        line: { backgroundColor: "rgba(249, 107, 75, 1)" },
        lineShadow: { backgroundColor: "rgba(249, 107, 75, 0.2)" },
      })

    default:
      return StyleSheet.create({
        line: { backgroundColor: "rgba(190, 26, 247, 1)" },
        lineShadow: { backgroundColor: "rgba(190, 26, 247, 0.2)" },
      })
  }
}

export const styles = StyleSheet.create({ container: { flex: 1 } })
