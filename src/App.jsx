import React from 'react'
import { BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { blue } from '@mui/material/colors'

import Layout from './layout/Layout'
import { Page } from './pages'

import './assets/css/App.css'

const theme = createTheme({
  palette: {
    default: {
      main: '#FFF',
    },
    secondary: {
      main: blue[500],
      medium: blue[700],
      dark: blue[900],
    },
  },
})

function App() {
  let AppPage = (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<Layout><Page/></Layout>}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )

  return AppPage
}

export default App
