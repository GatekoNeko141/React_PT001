import { TextField } from '@mui/material'
import style from '../assets/css/Page.module.css'

const Page = () => {
  document.title = 'React Template - Page'

  const PageHTML = (<>
    <div className={`${style.pageContainer}`}>
      <h1>Page</h1>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </div>
  </>)
  
  return PageHTML
}

export default Page