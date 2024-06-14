import { Box, Icon, Typography } from "@mui/material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
    return (
        <Box height="160px" mt={10} backgroundColor="#263138">
            <Typography color="#ffffff">Todos os direitos reservados</Typography>
            <Typography color="#ffffff">Contatos:</Typography>
            <Icon src={WhatsAppIcon}/>
            
        </Box>
    )
}

export default Footer