import { Button } from '@mui/material'
import { Edit } from '@mui/icons-material'

const Update = ({row}) => {
  const handleUpdate = () => {
    console.log(row)
  }

  const UpdateHTML = (<>
    <Button variant="outlined" color='success' onClick={handleUpdate}>
      <Edit />
    </Button>
  </>)
  
  return UpdateHTML
}

export default Update
