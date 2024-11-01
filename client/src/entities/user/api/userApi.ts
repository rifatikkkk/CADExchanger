import { api } from "./api"
import type { OutputUser, User } from "../types/typeUser"

export const userApi = api.injectEndpoints({
  endpoints: builder => ({
    sendUser: builder.mutation<OutputUser, User>({
      query: userData => ({
        url: "/user",
        method: "POST",
        body: userData,
      }),
    }),
  }),
})

export const { useSendUserMutation } = userApi

export const {
  endpoints: { sendUser },
} = userApi
