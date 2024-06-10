import { Box } from '@mui/material'
import './App.css'
import TicketPix from './pagamentos/TicketPix'

function App() {

  return (
    <Box
      display="flex"
      width="100vw"
      height="100vh"
      py={4}
      justifyContent="center"
      alignItems="center"
      bgcolor="#4a4648">
      <TicketPix />
    </Box>
  )
}

export default App
