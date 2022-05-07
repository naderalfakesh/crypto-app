import { create, ApisauceConfig, ApiErrorResponse, ApiOkResponse } from "apisauce"
import { DEFAULT_API_CONFIG } from "./api-config"
import { BaseQueryFn } from "@reduxjs/toolkit/query"

export const api = create({
  baseURL: DEFAULT_API_CONFIG.url,
  timeout: DEFAULT_API_CONFIG.timeout,
  headers: {
    Accept: "application/json",
  },
})

export const customBaseQuery = (): BaseQueryFn<
  {
    url: string
    method: ApisauceConfig["method"]
    data?: ApisauceConfig["data"]
    params?: ApisauceConfig["params"]
  },
  ApiOkResponse<any>,
  ApiErrorResponse<any>
> => async ({ url, method, data, params }) => {
  try {
    let result
    switch (method) {
      case "GET":
        result = await api.get(url, params)
        break
      case "POST":
        result = await api.post(url, data)
        break
      case "PATCH":
        result = await api.patch(url, data)
        break
      case "PUT":
        result = await api.patch(url, data)
        break
      case "DELETE":
        result = await api.delete(url, params)
        break
      default:
        result = await api.get(url, params)
        break
    }

    return { data: result.data }
  } catch (apiError) {
    return apiError
  }
}

// /**
//  * Gets a list of users.
//  */
// async getUsers(): Promise<Types.GetUsersResult> {
//   // make the api call
//   const response: ApiResponse<any> = await API.get(`/users`)

//   // the typical ways to die when calling an api
//   if (!response.ok) {
//     const problem = getGeneralApiProblem(response)
//     if (problem) return problem
//   }

//   const convertUser = (raw) => {
//     return {
//       id: raw.id,
//       name: raw.name,
//     }
//   }

//   // transform the data into the format we are expecting
//   try {
//     const rawUsers = response.data
//     const resultUsers: Types.User[] = rawUsers.map(convertUser)
//     return { kind: "ok", users: resultUsers }
//   } catch {
//     return { kind: "bad-data" }
//   }
// }

// /**
//  * Gets a single user by ID
//  */

// async getUser(id: string): Promise<Types.GetUserResult> {
//   // make the api call
//   const response: ApiResponse<any> = await API.get(`/users/${id}`)

//   // the typical ways to die when calling an api
//   if (!response.ok) {
//     const problem = getGeneralApiProblem(response)
//     if (problem) return problem
//   }

//   // transform the data into the format we are expecting
//   try {
//     const resultUser: Types.User = {
//       id: response.data.id,
//       name: response.data.name,
//     }
//     return { kind: "ok", user: resultUser }
//   } catch {
//     return { kind: "bad-data" }
//   }
// }
