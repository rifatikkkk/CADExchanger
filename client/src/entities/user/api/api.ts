import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query"
import { BASE_URL } from "../constants/constants"

const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_URL}/api`,
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 })

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
})
