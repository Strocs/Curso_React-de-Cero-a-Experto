import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import validator from 'validator'
import { useState, useMemo, useEffect } from 'react'
import { useAuthStore } from '../../stores/useAuthStore'

const formData = {
  displayName: '',
  email: '',
  password: ''
}

const formValidations = {
  displayName: [
    (value) => !validator.isEmpty(value),
    'El nombre es obligatorio'
  ],
  email: [(value) => validator.isEmail(value), 'El correo debe ser válido'],
  password: [
    (value) => value.length >= 6,
    'La contraseña debe tener al menos 6 caracteres'
  ]
}

export const RegisterPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const { status, errorMessage } = useAuthStore((state) => state.userAuth)
  const isCheckingAuth = useMemo(() => status === 'checking', [status])

  const startCreatingUserWithEmailAndPassword = useAuthStore(
    (state) => state.startCreatingUserWithEmailAndPassword
  )
  const logout = useAuthStore((state) => state.logout)

  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    nameValid,
    emailValid,
    passwordValid
  } = useForm(formData, formValidations)

  useEffect(() => {
    logout(null)
  }, [])

  const onSubmit = (event) => {
    event.preventDefault()
    setFormSubmitted(true)
    if (!isFormValid) return
    startCreatingUserWithEmailAndPassword(formState)
  }

  return (
    <AuthLayout title='Crear cuenta'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Nombre Completo'
              type='text'
              placeholder='Ignacio Andrés Molina Palominos'
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              error={!!nameValid && formSubmitted}
              helperText={nameValid}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Correo'
              type='email'
              placeholder='correo@google.com'
              name='email'
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
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
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} display={errorMessage ? '' : 'none'}>
            <Alert severity='error'>{errorMessage}</Alert>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button
                disabled={isCheckingAuth}
                type='submit'
                variant='contained'
                fullWidth
              >
                Crear cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
