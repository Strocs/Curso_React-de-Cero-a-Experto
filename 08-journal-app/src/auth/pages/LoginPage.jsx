import { useAuthStore } from '../../stores/useAuthStore'
import { Link as RouterLink } from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { useForm } from '../../hooks'
import { AuthLayout } from '../layout/AuthLayout'
import { useMemo, useEffect } from 'react'

export const LoginPage = () => {
  const { email, password, onInputChange } = useForm({
    email: '',
    password: ''
  })

  const startEmailAndPasswordSignIn = useAuthStore(
    (state) => state.startEmailAndPasswordSignIn
  )
  const startGoogleSignIn = useAuthStore((state) => state.startGoogleSignIn)
  const logout = useAuthStore((state) => state.logout)
  const { status, errorMessage } = useAuthStore((state) => state.userAuth)

  const isCheckingAuth = useMemo(() => status === 'checking', [status])

  useEffect(() => {
    logout(null)
  }, [])

  const onSubmit = (event) => {
    event.preventDefault()
    startEmailAndPasswordSignIn({ email, password })
  }

  const onGoggleSignIn = () => {
    startGoogleSignIn()
  }

  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Correo'
              type='email'
              name='email'
              value={email}
              onChange={onInputChange}
              placeholder='correo@google.com'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Contraseña'
              type='password'
              name='password'
              value={password}
              onChange={onInputChange}
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} display={errorMessage ? '' : 'none'}>
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isCheckingAuth}
                type='submit'
                variant='contained'
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid onClick={onGoggleSignIn} item xs={12} sm={6}>
              <Button disabled={isCheckingAuth} variant='contained' fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to='/auth/register'>
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
