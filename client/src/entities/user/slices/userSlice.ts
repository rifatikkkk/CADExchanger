import { createSlice } from "@reduxjs/toolkit"
import type { OutputUser } from "../types/typeUser"
import { userApi } from "../api/userApi"
import { RootState } from "../../../app/stores"

interface InitialState {
  user: OutputUser | null
}

const initialState: InitialState = {
  user: null,
}

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      userApi.endpoints.sendUser.matchFulfilled,
      (state, action) => {
        state.user = action.payload
      },
    )
  },
})

export default slice.reducer

export const selectUser = (state: RootState) => state.user.user
