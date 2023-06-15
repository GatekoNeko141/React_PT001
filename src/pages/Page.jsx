import { Container, TextField } from '@mui/material'
//import style from '../assets/css/Page.module.css'

const Page = () => {
  document.title = 'React Template - Page'

  const PageHTML = (<>
    <Container>
      <h1>Page</h1>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Container>
  </>)
  
  return PageHTML
}

export default Page