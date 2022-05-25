import React, { FC } from "react"
import { View, StyleSheet } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { AutoImage, Button, MarketStatsList, Screen, TrendingCoins } from "../../components"
import Balance from "./Balance"
import Header from "./Header"
import { Coin } from "../../models/coin"
import { useGetMainCoinsQuery } from "../../store/mainCoinsSlice"

const bg = require("../../../assets/images/bg.png")

const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

const coinList: Coin[] = [
  {
    id: "bitcoin",
    title: "Bitcoin",
    subtitle: "Btc",
    theme: "purple",
    change: +10.32,
    price: +6780,
    image: "",
    data,
  },
  {
    id: "ethereum",
    title: "Ethereum",
    subtitle: "Eth",
    theme: "blue",
    change: +10.32,
    price: 6780,
    image: "",
    data,
  },
]

export const HomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> = function HomeScreen() {
  const { data: mainCoinList, isError, isFetching, isLoading } = useGetMainCoinsQuery(undefined)
  return (
    <View style={styles.root}>
      <AutoImage source={bg} style={styles.background} />
      <Screen style={styles.root} backgroundColor="transparent" preset="scroll">
        <View style={styles.content}>
          <Header />
          <Balance />
          {mainCoinList && <TrendingCoins coinList={mainCoinList} />}
          <MarketStatsList coinList={[...coinList, ...coinList]} />
          <View style={styles.buttonsContainer}>
            <Button style={styles.button} preset="success" text="Deposit" />
            <Button style={styles.button} preset="danger" text="Withdraw" />
          </View>
        </View>
      </Screen>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    bottom: 0,
    left: 0,
    position: "absolute",
    resizeMode: "stretch",
    right: 0,
    top: 0,
  },
  button: { flex: 1, marginHorizontal: 10 },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  content: {
    paddingBottom: 80,
  },
  root: {
    backgroundColor: "transparent",
    flexGrow: 1,
  },
})
