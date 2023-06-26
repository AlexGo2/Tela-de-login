'use client'
import { Container, Box, Typography, TextField, Button, Link } from '@mui/material'

export default function Home() {
  return (
    <Container sx={{
      maxWidth: 'md',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      height: '100vh',
    }}>
      <Box sx={{marginTop: 10}}>
        <Box>
          <Typography variant='h5' component="h1">Faça o seu Login</Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '20px 0 20px'
        }}>
          <TextField variant="outlined" type="text" label="E-mail" fullWidth size='medium' sx={{mb: 1}}/>
          <TextField variant="outlined" type="password" label="Senha" fullWidth size='medium'sx={{mb: 1}}/>
          <Button variant='contained'fullWidth>Entrar</Button>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Typography variant='caption'>Ainda não possui conta?</Typography>
          <Link href="/cadastro" variant="caption">Cadastre-se</Link>
        </Box>
      </Box>
    </Container>
  )
}
