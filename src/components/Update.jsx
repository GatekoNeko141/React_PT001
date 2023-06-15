import { useState } from 'react'

import { Button, Modal, Box } from '@mui/material'
import { Edit } from '@mui/icons-material'

import { UpdateCreate } from '../components'

const Update = ({row, getPost, setOpenAlert, setAlertText, setTypeAlert}) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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

  const UpdateHTML = (<>
    <Button variant="outlined" color='success' onClick={handleModal}>
      <Edit />
    </Button>

    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <UpdateCreate dataRow={row} getPost={getPost} handleClose={handleClose} setOpenAlert={setOpenAlert} setAlertText={setAlertText} setTypeAlert={setTypeAlert}/>
      </Box>
    </Modal>
  </>)
  
  return UpdateHTML
}

export default Update
