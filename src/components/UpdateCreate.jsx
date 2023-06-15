import { useEffect, useState } from 'react'
import axios from 'axios'

import { useForm } from 'react-hook-form'
import { Button, Grid, Typography, TextField } from '@mui/material'

const UpdateCreate = ({dataRow, getPost, handleClose, setOpenAlert, setAlertText, setTypeAlert}) => {
  const { register, handleSubmit } = useForm()
  const [hasDataRow, setHasDataRow] = useState(null)

  const endpoint = 'https://jsonplaceholder.typicode.com'

  useEffect(() => {
    if(Object.keys(dataRow).length === 0){
      setHasDataRow(false)
    }else{
      setHasDataRow(true)
    }
    // eslint-disable-next-line
  }, [])

  const updateOrCreateRow = (data) => {
    update(data)
  }
  
  const update = async (sendData) => {
    try {
      await axios.put(endpoint + '/posts/'+ dataRow.id, sendData)
      setAlertText('Registro Actualizado')
      setTypeAlert('success')
    } catch (error) {
      setAlertText('Error al actualizar')
      setTypeAlert('danger')
    }
    
    setOpenAlert(true)
    getPost()

    handleClose()
  }

  const UpdateCreateHTML = (<>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      {hasDataRow ? 'Actualizar' : 'Crear'}
    </Typography>
    
    <form onSubmit={handleSubmit(updateOrCreateRow)}>
      <Grid container>
        <Grid item sx={{width: '100%', mt: 2}}>
          <TextField required
            sx={{width: '100%'}}
            id="outlined-required"
            label="Titulo"
            defaultValue={hasDataRow ? '' : dataRow.title}
            {...register("title")}
          />
        </Grid>

        <Grid item sx={{width: '100%', my: 2}}>
          <TextField required
            sx={{width: '100%'}}
            id="outlined-required"
            label="Contenido"
            defaultValue={hasDataRow ? '' : dataRow.body}
            multiline
            maxRows={4}
            {...register("body")}
          />
        </Grid>
      </Grid>

      <Button variant="outlined" type='submit'>Guardar</Button>
    </form>
  </>)
  
  return UpdateCreateHTML
}

UpdateCreate.defaultProps = {
  dataRow: {}
}

export default UpdateCreate
