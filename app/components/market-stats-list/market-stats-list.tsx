import * as React from "react"
import { StyleProp, View, ViewStyle, StyleSheet, TouchableOpacity } from "react-native"
import { Coin } from "../../models/coin"
import { ListItem } from "../list-item/list-item"
import { Text } from "../text/text"

export interface MarketStatsListProps {
  style?: StyleProp<ViewStyle>
  coinList: Coin[]
}

export const MarketStatsList = function MarketStatsList({ style, coinList }: MarketStatsListProps) {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.header}>
        <Text preset="header-20-28">Market Statistics</Text>
        <Text preset="body-16-20">All ❯</Text>
      </TouchableOpacity>
      {coinList.map(({ id, theme, data, title, subtitle, price, change }) => (
        <>
          <ListItem
            key={id}
            theme={theme}
            data={data}
            title={title}
            subtitle={subtitle}
            price={price}
            change={change}
          />
          <View style={styles.divider} />
        </>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 32 },
  header: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  divider: {
    marginVertical: 8,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    height: 2,
  },
})
