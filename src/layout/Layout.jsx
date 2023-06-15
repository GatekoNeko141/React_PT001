import { Grid, Box, Typography } from '@mui/material'

const Layout = ({children}) => {
  let LayoutHTML = (<>
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
          <Typography variant='h5' color="default.main" className='t-center'>Prueba Tecnica</Typography>
          <Typography variant='subtitle1' color="default.main" className='t-center'>John Eymar Rodríguez Arteaga</Typography>
        </Box>
      </Grid>

      <Grid item
        className=''
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