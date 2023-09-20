import { TurnedInNot } from '@mui/icons-material'
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import { useMemo } from 'react'
import { useJournalStore } from '../../stores'

export const SideBarItem = ({ note }) => {
  const setActiveNote = useJournalStore((state) => state.setActiveNote)

  const newTitle = useMemo(() => {
    return note.title.length > 17
      ? note.title.substring(0, 17) + '...'
      : note.title
  }, [note.title])
  return (
    <ListItem key={note.id}>
      <ListItemButton onClick={() => setActiveNote(note)}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={note.body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}
