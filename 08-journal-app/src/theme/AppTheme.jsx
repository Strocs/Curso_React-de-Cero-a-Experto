import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import { purpleTheme } from '.'

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}