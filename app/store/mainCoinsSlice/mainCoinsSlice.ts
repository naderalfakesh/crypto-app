import { createApi } from "@reduxjs/toolkit/query/react"
import { Coin } from "../../models/coin"
import { customBaseQuery } from "../../services/api"
import { fromAPI } from "./mapper"
import { getResponse } from "./types"

export const mainCoinsSlice = createApi({
  reducerPath: "mainCoins",
  baseQuery: customBaseQuery(),
  endpoints: (builder) => ({
    getMainCoins: builder.query<Coin[], undefined>({
      query: () => ({
        url: "/coins/markets",
        method: "GET",
        params: {
          vs_currency: "usd",
          ids: "bitcoin,ethereum,cardano,shiba-inu,solana",
          sparkline: true,
          price_change_percentage: "24h",
        },
      }),
      transformResponse: (data: getResponse): Coin[] => data.map((item) => fromAPI(item)),
    }),
  }),
})

export const { useGetMainCoinsQuery } = mainCoinsSlice
