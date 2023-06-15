import { Collapse, Alert  } from '@mui/material'
import { Close } from '@mui/icons-material'

const Alerts = ({openAlert, setOpenAlert, text, type}) => {
  const AlertsHTML = (<>
    <Collapse in={openAlert}>
      <Alert
        severity={type}
        action={
          <Close
            aria-label="close"
            color={type}
            size="small"
            onClick={() => {
              setOpenAlert(false)
            }}
          />
        }
        sx={{ mb: 2 }}
      >
        {text}
      </Alert>
    </Collapse>
  </>)
  
  return AlertsHTML
}

export default Alerts
