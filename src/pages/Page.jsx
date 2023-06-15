import { useEffect, useState } from 'react'
import { Container, Grid, Typography } from '@mui/material'

import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'

import { Delete, Update, Create, Alerts } from '../components'
//import style from '../assets/css/Page.module.css'

const Page = () => {
  const [post, setPost] = useState([])
  const [loader, setLoader] = useState(true)
  const [openAlert, setOpenAlert] = useState(false)
  const [alertText, setAlertText] = useState('')
  const [typeAlert, setTypeAlert] = useState('success')
  
  const endpoint = 'https://jsonplaceholder.typicode.com'
  const columns = [
    {field: 'id', headerName: 'ID'},
    {field: 'title', headerName: 'Titulo', flex: 2},
    {field: 'body', headerName: 'Contenido', flex: 6},
    {
      field: 'acciones',
      headerName: 'Acciones',
      renderCell: (params) => {
        return (<>
          <Update row={params.row} getPost={getPost} setOpenAlert={setOpenAlert} setAlertText={setAlertText} setTypeAlert={setTypeAlert}/>
          <Delete row={params} getPost={getPost} setOpenAlert={setOpenAlert} setAlertText={setAlertText} setTypeAlert={setTypeAlert}/>
        </>)
      },
      flex: 2
    }
  ]
  
  useEffect(() => {
    getPost()
    setLoader(false)
    // eslint-disable-next-line
  },[])
  
  const getPost = async () => {
    const rp_post = await axios.get(endpoint + '/posts')
    setPost(rp_post.data)
  }

  document.title = 'Prueba Técnica - John Eymar Rodríguez Arteaga'

  const PageHTML = (<>
    <Container>
      <Alerts openAlert={openAlert} setOpenAlert={setOpenAlert} text={alertText} type={typeAlert} />

      <Grid container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{my: 2}}
      >
        <Grid item>
          <Typography variant="h5" component="h2">Tabla</Typography>
        </Grid>
        <Grid item>
          <Create getPost={getPost} setOpenAlert={setOpenAlert} setAlertText={setAlertText} setTypeAlert={setTypeAlert}/>
        </Grid>
      </Grid>
      {
        !loader ?
        <DataGrid
          rows={post}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          autoHeight
          pageSizeOptions={[5, 10, 15, 20]}
        ></DataGrid> : <></>
      }
    </Container>
  </>)
  
  return PageHTML
}

export default Page