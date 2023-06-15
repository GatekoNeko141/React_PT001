import { Button } from '@mui/material'
import { Delete as DeleteIcon } from '@mui/icons-material'


const Delete = ({row}) => {
  const handleDelete = () => {
    console.log(row.id)
  }

  const DeleteHTML = (<>
    <Button variant="outlined" color='danger' onClick={handleDelete}>
      <DeleteIcon />
    </Button>
  </>)
  
  return DeleteHTML
}

export default Delete
