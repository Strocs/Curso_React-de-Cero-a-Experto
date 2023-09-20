import {
  DeleteOutline,
  SaveOutlined,
  UploadOutlined
} from '@mui/icons-material'
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import { useEffect, useMemo, useRef } from 'react'
import { useForm } from '../../hooks/useForm'
import { useJournalStore } from '../../stores'
import { ImageGallery } from '../components'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

export const NoteView = () => {
  const active = useJournalStore((store) => store.active)
  const messageSaved = useJournalStore((store) => store.messageSaved)
  const isSaving = useJournalStore((store) => store.isSaving)
  const setActiveNote = useJournalStore((store) => store.setActiveNote)
  const saveNote = useJournalStore((store) => store.saveNote)
  const uploadFiles = useJournalStore((store) => store.uploadFiles)
  const deleteNote = useJournalStore((store) => store.deleteNote)

  const { body, title, date, onInputChange, formState } = useForm(active)

  const newDate = useMemo(() => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' }
    const newDate = new Date(date)
    return newDate.toLocaleDateString('es-ES', options)
  }, [date])

  const fileInputRef = useRef(null)

  useEffect(() => {
    setActiveNote(formState)
  }, [formState])

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('Nota actualizada', messageSaved, 'success')
    }
  }, [messageSaved])

  const onSaveNote = () => {
    saveNote()
  }

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return
    uploadFiles(target.files)
  }

  const onDelete = () => {
    deleteNote()
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
        <input
          ref={fileInputRef}
          type='file'
          multiple
          onChange={onFileInputChange}
          style={{ display: 'none' }}
        />
        <IconButton
          color='primary'
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}
        >
          <UploadOutlined />
        </IconButton>
        <Button
          disabled={isSaving}
          onClick={onSaveNote}
          color='primary'
          sx={{ padding: 2 }}
        >
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

      <Grid container justifyContent='end'>
        <Button onClick={onDelete} sx={{ mt: 2 }} color='error'>
          <DeleteOutline />
          Borrar
        </Button>
      </Grid>
      <ImageGallery images={active.imageUrls} />
    </Grid>
  )
}
