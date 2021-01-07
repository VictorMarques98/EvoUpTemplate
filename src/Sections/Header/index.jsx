import React from 'react';

//styled
import { Container, Logo, Nav } from './style'

//Images
import LogoLight from '../../assets/images/logo_light.webp'
import LogoDark from '../../assets/images/logo_dark.webp'

//Scroll
import { Link } from 'react-scroll'

const Header = ({ change }) => {
    return (
        <Container change={change}>
            <Logo change={change}>
                <img src={change ? LogoDark : LogoLight} alt="logo-evoup-fundo-preto" />
            </Logo>
            <Nav change={change}>
                <ul>
                    <li>
                        <Link to="section1" spy={true} smooth={true} duration={800}>Home</Link>
                    </li>
                    <li>
                        <Link to="section2" spy={true} smooth={true} duration={800}>Sobre</Link>
                    </li>
                    <li>
                        <Link to="services" spy={true} smooth={true} duration={800}>Serviços</Link>
                    </li>
                    <li>
                        <Link to="portfolio" spy={true} smooth={true} duration={800}>Portfólio</Link>
                    </li>
                    <li>
                        <Link to="time" spy={true} smooth={true} duration={800}>Equipe</Link>
                    </li>
                    <li>
                        <Link to="contato" spy={true} smooth={true} duration={800}>Contato</Link>
                    </li>
                </ul>
            </Nav>
        </Container>
    )
}

export default Header;