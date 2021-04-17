import React, { useEffect } from 'react'
import { Container } from './style'

import LogoEvo from '../../assets/images/logo-agradecimento.png'

const Redirect = () => {

    useEffect(() => {
        const timer = setTimeout(() => {
            window.location = 'https://api.whatsapp.com/send?phone=554891320921&text=Ol%C3%A1%2C%20gostaria%20de%20alavancar%20meu%20neg%C3%B3cio'
        }, 3000);
        return () => clearTimeout(timer)
    }, []);

    return (
        <Container>
            <span className="Title">Muito Obrigado!</span>
            <div className="loader">Loading...</div>
            <span>Você está sendo redirecionado para nosso atendimento!</span>
            <div>
                <img src={LogoEvo} alt="" />
            </div>
        </Container >
    )
}

export default Redirect;