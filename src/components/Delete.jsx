import { useState } from 'react'
import axios from 'axios'

import { Button, Modal, Box, Typography, Grid } from '@mui/material'
import { Delete as DeleteIcon } from '@mui/icons-material'


const Delete = ({row, getPost, setOpenAlert, setAlertText, setTypeAlert}) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const endpoint = 'https://jsonplaceholder.typicode.com'

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

  const handleModal = () => {
    handleOpen()
  }

  const handleDelete = async () => {
    try {
      await axios.delete(endpoint + '/posts/' + row.id)
      setAlertText('Registro Eliminado')
      setTypeAlert('error')
    } catch (error) {
      setAlertText('Error al crear')
      setTypeAlert('error')
    }
    
    setOpenAlert(true)
    getPost()

    handleClose()
  }

  const DeleteHTML = (<>
    <Button variant="outlined" color='danger' onClick={handleModal}>
      <DeleteIcon />
    </Button>

    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" className='t-center'>
          ¿Deseas eliminar este registro?
        </Typography>

        <Grid container direction="row" alignItems="center" justifyContent="center">
          <Grid item>
            <Button variant="outlined" color='danger' onClick={() => handleClose()}>Cancelar</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color='success' onClick={() => handleDelete()}>Eliminar</Button>
          </Grid>
        </Grid>

      </Box>
    </Modal>
  </>)
  
  return DeleteHTML
}

export default Delete
