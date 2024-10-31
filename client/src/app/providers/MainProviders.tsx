import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"
import { AppRouter } from "../routers"
import { store } from "../stores"
import { ThemeProvider } from "@mui/material"
import { theme } from "../../shared/themes"

export const MainProviders = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={AppRouter} />
      </Provider>
    </ThemeProvider>
  )
}
