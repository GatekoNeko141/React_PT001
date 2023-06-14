import { Grid, Box, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFF',
    },
    secondary: {
      main: blue[500],
      medium: blue[700],
      dark: blue[900],
    },
  },
})

const Layout = ({children}) => {
  let LayoutHTML = (<ThemeProvider theme={theme}>
    <Grid container
      className={`h-100vh`}
      direction="column"
    >
      <Grid item
        alignItems="center"
        justifyContent="flex-start"
      >
        <Box
          sx={{
            backgroundColor: 'secondary.dark'
          }}
        >
          <Typography variant='h5' color="primary" className='t-center'>Prueba Tecnica</Typography>
          <Typography variant='subtitle1' color="primary" className='t-center'>John Eymar Rodríguez Arteaga</Typography>
        </Box>
      </Grid>

      <Grid item
        className=''
      >
        {children}
      </Grid>
    </Grid>
  </ThemeProvider>)

  return LayoutHTML
}

Layout.defaultProps = {
  component: 'e'
}

export default Layout