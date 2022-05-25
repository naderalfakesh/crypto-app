import { ViewStyle, TextStyle } from "react-native"
import { color } from "../../theme"

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
  paddingVertical: 14,
  paddingHorizontal: 32,
  borderRadius: 18,
  justifyContent: "center",
  alignItems: "center",
}

const BASE_TEXT: TextStyle = {
  textTransform: "capitalize",
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets: Record<string, ViewStyle> = {
  /**
   * A smaller piece of secondard information.
   */
  primary: { ...BASE_VIEW, backgroundColor: color.palette.orange } as ViewStyle,

  success: { ...BASE_VIEW, backgroundColor: "rgba(69, 182, 141, 1)" } as ViewStyle,

  danger: { ...BASE_VIEW, backgroundColor: "rgba(232, 80, 58, 1)" } as ViewStyle,

  /**
   * A button without extras.
   */
  link: {
    ...BASE_VIEW,
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignItems: "flex-start",
  } as ViewStyle,
}

export const textPresets: Record<ButtonPresetNames, TextStyle> = {
  primary: { ...BASE_TEXT, color: color.palette.white } as TextStyle,
  link: {
    ...BASE_TEXT,
    color: color.text,
    paddingHorizontal: 0,
    paddingVertical: 0,
  } as TextStyle,
}

/**
 * A list of preset names.
 */
export type ButtonPresetNames = keyof typeof viewPresets
