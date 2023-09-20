import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { logoutFirebase } from '../../firebase/providers'
import { useAuthStore } from '../../stores/useAuthStore'

export const Navbar = ({ drawerWidth = 240 }) => {
  const logout = useAuthStore((state) => state.logout)

  const onLogout = () => {
    logout()
    logoutFirebase()
  }

  return (
    <AppBar
      position='fixed'
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` }
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          edge='start'
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Typography variant='h6' noWrap component='div'>
            JournalApp
          </Typography>
          <IconButton onClick={onLogout} color='error'>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
