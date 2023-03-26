import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { useEffect, useMemo } from 'react'
import { useForm } from '../../hooks/useForm'
import { useJournalStore } from '../../stores'
import { ImageGallery } from '../components'

export const NoteView = () => {
  const active = useJournalStore((store) => store.active)
  const setActiveNote = useJournalStore((store) => store.setActiveNote)
  const saveSaving = useJournalStore((store) => store.saveSaving)
  const { body, title, date, onInputChange, formState } = useForm(active)

  const newDate = useMemo(() => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' }
    const newDate = new Date(date)
    return newDate.toLocaleDateString('es-ES', options)
  }, [date])

  useEffect(() => {
    setActiveNote(formState)
  }, [formState])

  const onSaveNote = () => {
    saveSaving()
  }
  return (
    <Grid
      className='animate__animated animate__fadeIn animate__faster'
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight='light'>
          {newDate}
        </Typography>
      </Grid>
      <Grid item>
        <Button onClick={onSaveNote} color='primary' sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type='text'
          variant='filled'
          fullWidth
          placeholder='Ingrese un título'
          label='Título'
          sx={{ border: 'none', mb: 1 }}
          name='title'
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder='¿Qué sucedió el día de hoy?'
          minRows={5}
          name='body'
          value={body}
          onChange={onInputChange}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  )
}
