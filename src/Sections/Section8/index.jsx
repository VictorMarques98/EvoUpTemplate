import React from 'react'

import { Container8, Title8,  Button } from './style'

const Section8 = () => {
    return (
        <Container8 name="contato">
            <Title8>O que você está esperando para evoluir sua empresa?</Title8>
            <Button>
                <span>Destrave seu negócio</span>
                <a href="www.google.com.br" ><i className="fab fa-facebook-f"></i></a>
                <a href="www.google.com.br" ><i className="fab fa-whatsapp"></i></a>
                <a href="www.google.com.br" ><i className="fab fa-instagram"></i></a>
                <a href="www.google.com.br" ><i className="fab fa-linkedin-in"></i></a>
            </Button>
        </Container8>
    )
}

export default Section8;