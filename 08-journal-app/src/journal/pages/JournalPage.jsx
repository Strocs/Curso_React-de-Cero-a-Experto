import { AddOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useJournalStore } from '../../stores/useJournalStore'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView } from '../view/NoteView'
import { NothingSelectedView } from '../view/NothingSelectedView'

export const JournalPage = () => {
  const addNewEmptyNote = useJournalStore((state) => state.addNewEmptyNote)
  const isSaving = useJournalStore((state) => state.isSaving)
  const active = useJournalStore((state) => state.active)
  const onClickNewNote = () => {
    addNewEmptyNote()
  }
  return (
    <JournalLayout>
      {!!active ? <NoteView /> : <NothingSelectedView />}
      <IconButton
        disabled={isSaving}
        onClick={onClickNewNote}
        size='large'
        sx={{
          color: 'white',
          backgroundColor: isSaving ? 'green' : 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 40,
          bottom: 40
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  )
}
