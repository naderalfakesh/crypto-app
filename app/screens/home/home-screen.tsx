import React, { FC } from "react"
import { View, StyleSheet } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { AutoImage, Button, MarketStatsList, Screen, TrendingCoins } from "../../components"
import Balance from "./Balance"
import Header from "./Header"
import { Coin } from "../../models/coin"

const bg = require("../../../assets/images/bg.png")

const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

const coinList: Coin[] = [
  {
    id: "bitcoin",
    title: "Bitcoin",
    subtitle: "Btc",
    theme: "purple",
    change: "+10.32%",
    price: "$6780",
    data,
  },
  {
    id: "ethereum",
    title: "Ethereum",
    subtitle: "Eth",
    theme: "blue",
    change: "+10.32%",
    price: "$6780",
    data,
  },
]

export const HomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> = function HomeScreen() {
  return (
    <View style={styles.root}>
      <AutoImage source={bg} style={styles.background} />
      <Screen style={styles.root} backgroundColor="transparent" preset="scroll">
        <Header />
        <Balance />
        <TrendingCoins coinList={[...coinList, ...coinList, ...coinList]} />
        <MarketStatsList coinList={[...coinList, ...coinList]} />
        <View style={styles.buttonsContainer}>
          <Button style={styles.button} preset="success" text="Deposit" />
          <Button style={styles.button} preset="danger" text="Withdraw" />
        </View>
      </Screen>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "transparent",
    flex: 1,
  },
  background: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    resizeMode: "stretch",
  },
  button: { flex: 1, marginHorizontal: 10 },
  buttonsContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
})
