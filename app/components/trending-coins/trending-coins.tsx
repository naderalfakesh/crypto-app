import * as React from "react"
import { StyleProp, ViewStyle, StyleSheet, ScrollView } from "react-native"
import { Coin } from "../../models/coin"
import { CoinCard } from "../coin-card/coin-card"

export interface TrendingCoinsProps {
  style?: StyleProp<ViewStyle>
  contentContainerStyle?: StyleProp<ViewStyle>
  coinList: Coin[]
}

export const TrendingCoins = function TrendingCoins({
  style,
  contentContainerStyle,
  coinList,
}: TrendingCoinsProps) {
  return (
    <ScrollView
      style={[styles.container, style]}
      contentContainerStyle={[styles.content, contentContainerStyle]}
      showsHorizontalScrollIndicator={false}
      horizontal
    >
      {coinList.map(({ id, theme, data, title, subtitle, price, change, image }, index) => (
        <CoinCard
          style={index && styles.coinCard}
          key={id}
          theme={theme}
          data={data}
          title={title}
          subtitle={subtitle}
          price={price}
          change={change}
          image={image}
        />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  coinCard: { marginLeft: 16 },
  container: { flexGrow: 0, marginBottom: 28, paddingVertical: 6 },
  content: { paddingHorizontal: 16 },
})
