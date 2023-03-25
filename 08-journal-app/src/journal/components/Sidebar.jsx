import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material'
import { useJournalStore } from '../../stores'
import { useAuthStore } from '../../stores/useAuthStore'
import { SideBarItem } from './SideBarItem'

export const Sidebar = ({ drawerWidth = 240 }) => {
  const { displayName } = useAuthStore((state) => state.userAuth)
  const notes = useJournalStore((state) => state.notes)

  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant='permanent'
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap component={'div'}>
            {displayName}
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          {notes.map((note) => (
            <SideBarItem note={note} key={note.id} />
          ))}
        </List>
      </Drawer>
    </Box>
  )
}
