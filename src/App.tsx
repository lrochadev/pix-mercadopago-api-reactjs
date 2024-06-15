import { Box } from '@mui/material'
import './App.css'
import TicketPix from './pagamentos/TicketPix'
import CartaoCredito from './pagamentos/CartaoCredito'
import CartaoCreditoVideo from './pagamentos/CartaoCreditoVideo'

function App() {

  return (
    <Box
      display="flex"
      width="100vw"
      // height="100vh"
      py={4}
      justifyContent="center"
      alignItems="center"
      bgcolor="#4a46"
      gap={2}
      flexDirection="column"
    >

      <CartaoCreditoVideo />
      {/* <CartaoCredito /> */}
      {/* <TicketPix /> */}
    </Box>
  )
}

export default App
