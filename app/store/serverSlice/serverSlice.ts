import { createApi } from "@reduxjs/toolkit/query/react"
import { customBaseQuery } from "../../services/api"
import { ServerStatusResponse } from "./types"

export const serverSlice = createApi({
  reducerPath: "server",
  baseQuery: customBaseQuery(),
  endpoints: (builder) => ({
    serverStatus: builder.query<ServerStatusResponse, undefined>({
      query: () => ({
        url: "/ping",
        method: "GET",
      }),
    }),
  }),
})

export const { useServerStatusQuery } = serverSlice
