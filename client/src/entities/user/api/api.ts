import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react"
import { VITE_API_URL } from "../constants"

const baseQuery = fetchBaseQuery({
  baseUrl: VITE_API_URL,
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 })

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
})
