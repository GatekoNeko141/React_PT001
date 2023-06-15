import { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'

import { Delete, Update } from '../components'
//import style from '../assets/css/Page.module.css'

const Page = () => {
  const [post, setPost] = useState([])
  const [loader, setLoader] = useState(true)
  
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
          <Delete row={params}/>
          <Update row={params.row}/>
        </>)
      },
      flex: 2
    }
  ]
  
  useEffect(() => {
    (async () => {
      const rp_post = await axios.get(endpoint + '/posts')
      
      setPost(rp_post.data)
      setLoader(false)
    })()
    
    // eslint-disable-next-line
  },[])

  document.title = 'Prueba Técnica - John Eymar Rodríguez Arteaga'

  const PageHTML = (<>
    <Container>
      <h1>Page</h1>
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