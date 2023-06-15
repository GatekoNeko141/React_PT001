import { Grid, Box, Typography } from '@mui/material'

const Layout = ({children}) => {
  let LayoutHTML = (<>
    <Grid container
      direction="column"
    >
      <Grid item
        alignItems="center"
        justifyContent="flex-start"
        sx={{
          position: 'fixed',
          width: '100%',
          zIndex: 1
        }}
      >
        <Box
          sx={{
            backgroundColor: 'secondary.dark'
          }}
        >
          <Typography variant='h5' color="default.main" className='t-center'>Prueba Tecnica</Typography>
          <Typography variant='subtitle1' color="default.main" className='t-center'>John Eymar Rodríguez Arteaga</Typography>
        </Box>
      </Grid>

      <Grid item
        sx={{marginY: 10}}
      >
        {children}
      </Grid>
    </Grid>
  </>)

  return LayoutHTML
}

Layout.defaultProps = {
  component: 'e'
}

export default Layout