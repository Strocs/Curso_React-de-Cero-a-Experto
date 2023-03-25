import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { getFormatDate } from '../../helpers'
import { useJournalStore } from '../../stores'
import { ImageGallery } from '../components'

export const NoteView = () => {
  const active = useJournalStore((store) => store.active)
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
          {getFormatDate(active.date)}
        </Typography>
      </Grid>
      <Grid item>
        <Button color='primary' sx={{ padding: 2 }}>
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
          label={active.title}
          sx={{ border: 'none', mb: 1 }}
        />
        <TextField
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder='¿Qué sucedió el día de hoy?'
          label={active.body}
          minRows={5}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  )
}
