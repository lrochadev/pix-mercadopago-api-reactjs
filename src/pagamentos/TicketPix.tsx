import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { postCriarPix } from '../api/service';
import { useState } from 'react';
import { Box } from '@mui/material';

export default function TicketPix() {

    const [ticketUrl, setTicketUrl] = useState("");

    const MOCK_BODY = {
        transaction_amount: 3.40,
        description: "Pagamento de teste v05",
        paymentMethodId: "pix",
        email: "gersoncafilho2@gmail.com",
        identificationType: "CPF",
        number: "12345678909"
    }

    const handlePost = () => {
        postCriarPix(MOCK_BODY).then(
            response => {
                console.log("response")
                setTicketUrl(
                    response.data.point_of_interaction.transaction_data.ticket_url)
            }
        )
    }

    return (
        <Box display="flex" gap={4} flexDirection="column" height="100vh">
            <Card sx={{ width: 440, minHeight: 360 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="https://ogimg.infoglobo.com.br/in/22945566-c56-658/FT1086A/760/Big-Mac.png"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        BigMac
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {MOCK_BODY.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Valor: <strong>R${MOCK_BODY.transaction_amount}</strong>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Pagamentos disponiveis: <strong>{` ${MOCK_BODY.paymentMethodId}`}</strong>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Seu e-mail: <strong>{MOCK_BODY.email}</strong>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        CPF: <strong>{MOCK_BODY.number}</strong>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={handlePost} variant="contained" size="small">Pagar com Pix</Button>

                </CardActions>

            </Card>
            {
                ticketUrl &&
                <Card sx={{ width: 440, height: 820 }}>
                    <iframe src={ticketUrl} width="100%" height="100%" />
                </Card>
            }
        </Box>
    );
}
