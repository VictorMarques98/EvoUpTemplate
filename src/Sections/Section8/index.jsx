import React from 'react'

import { Container8, Title8,  Button } from './style'

const Section8 = () => {
    return (
        <Container8 name="contato">
            <Title8>O que você está esperando para evoluir sua empresa?</Title8>
            <Button>
                <span>Destrave seu negócio</span>
                <a href="https://www.facebook.com/Agenciaevoup" ><i className="fab fa-facebook-f"></i></a>
                <a href="https://api.whatsapp.com/send?phone=554891320921&text=Ol%C3%A1%2C%20gostaria%20de%20alavancar%20meu%20neg%C3%B3cio" ><i className="fab fa-whatsapp"></i></a>
                <a href="https://www.instagram.com/evo.up/" ><i className="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/company/75089915" ><i className="fab fa-linkedin-in"></i></a>
            </Button>
        </Container8>
    )
}

export default Section8;