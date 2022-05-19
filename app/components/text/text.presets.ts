import { TextStyle } from "react-native"
import { color, typography } from "../../theme"

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  fontFamily: typography.primary,
  color: color.text,
  fontSize: 15,
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  /**
   * The default text styles.
   */
  default: BASE,

  /**
   * size 12 height 14
   */
  "body-12-14": { ...BASE, fontSize: 12, lineHeight: 14 } as TextStyle,

  /**
   * size 14 height 16
   */
  "body-14-16": { ...BASE, fontSize: 14, lineHeight: 16 } as TextStyle,

  /**
   * size 16 height 20
   */
  "body-16-20": { ...BASE, fontSize: 16, lineHeight: 20 } as TextStyle,

  /**
   * size 10 height 12
   */
  "header-10-12": { ...BASE, fontSize: 10, lineHeight: 12, fontWeight: "500" } as TextStyle,

  /**
   * size 14 height 18
   */
  "header-14-18": { ...BASE, fontSize: 14, lineHeight: 18, fontWeight: "600" } as TextStyle,

  /**
   * size 16 height 20
   */
  "header-16-20": { ...BASE, fontSize: 16, lineHeight: 20, fontWeight: "500" } as TextStyle,

  /**
   * size 20 height 22
   */
  "header-20-22": { ...BASE, fontSize: 20, lineHeight: 22, fontWeight: "500" } as TextStyle,

  /**
   * size 20 height 28
   */
  "header-20-28": { ...BASE, fontSize: 20, lineHeight: 28, fontWeight: "600" } as TextStyle,

  /**
   * size 26 height 32
   */
  "header-26-32": { ...BASE, fontSize: 26, lineHeight: 32, fontWeight: "600" } as TextStyle,

  /**
   * size 28 height 30
   */
  "header-28-30": { ...BASE, fontSize: 28, lineHeight: 30, fontWeight: "600" } as TextStyle,

  /**
   * size 18 height 22
   */
  "button-18-22": { ...BASE, fontSize: 18, lineHeight: 22, fontWeight: "500" } as TextStyle,
}

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets
