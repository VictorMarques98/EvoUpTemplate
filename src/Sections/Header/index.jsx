import React, { useEffect, useState } from 'react';

//styled
import { Container, Logo, Nav, Zap, HbMenu, NavMobile, BlankScreen } from './style'

//Images
import LogoLight from '../../assets/images/logo_light.webp'
import LogoDark from '../../assets/images/logo_dark.webp'

//Scroll
import { Link as Scroll} from 'react-scroll'

//Router
import { Link } from 'react-router-dom'

const Header = ({ change }) => {

    const [sideMenu, setSideMenu] = useState(false)

    const changeSideMenu = () => {
        setSideMenu(!sideMenu)
    }


    const isMobile = () => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return <React.Fragment>
                <HbMenu onClick={() => { changeSideMenu() }} change={change}>
                    <i className="fas fa-bars"></i>
                </HbMenu>
                <NavMobile open={sideMenu} change={change}>
                    <div onClick={() => { changeSideMenu() }} >
                        <i className="fas fa-times"></i>
                    </div>
                    <ul >
                        <li >
                            <Scroll to="inicio" spy={true} smooth={true} duration={800} onClick={() => { changeSideMenu() }}>Início</Scroll>
                        </li>
                        <li >
                            <Scroll to="sobre" spy={true} smooth={true} duration={800} onClick={() => { changeSideMenu() }}>Sobre</Scroll>
                        </li>
                        <li >
                            <Scroll to="lancamento" spy={true} smooth={true} duration={800} onClick={() => { changeSideMenu() }}>Lançamento</Scroll>
                        </li>
                        <li >
                            <Scroll to="servicos" spy={true} smooth={true} duration={800} onClick={() => { changeSideMenu() }}>Serviços</Scroll>
                        </li>
                        <li >
                            <Scroll to="portfolio" spy={true} smooth={true} duration={800} onClick={() => { changeSideMenu() }}>Portfólio</Scroll>
                        </li>
                        <li >
                            <Scroll to="contato" spy={true} smooth={true} duration={800} onClick={() => { changeSideMenu() }}>Contato</Scroll>
                        </li>
                    </ul>
                </NavMobile>
                <BlankScreen open={sideMenu} onClick={() => { changeSideMenu() }} change={change} />
            </React.Fragment>
        }
        else {
            return <React.Fragment>
                <Nav change={change}>
                    <ul>
                        <li>
                            <Scroll to="inicio" spy={true} smooth={true} duration={800}>Início</Scroll>
                        </li>
                        <li>
                            <Scroll to="sobre" spy={true} smooth={true} duration={800}>Sobre</Scroll>
                        </li>
                        <li>
                            <Scroll to="lancamento" spy={true} smooth={true} duration={800}>Lançamento</Scroll>
                        </li>
                        <li>
                            <Scroll to="servicos" spy={true} smooth={true} duration={800}>Serviços</Scroll>
                        </li>
                        <li>
                            <Scroll to="portfolio" spy={true} smooth={true} duration={800}>Portfólio</Scroll>
                        </li>
                        <li>
                            <Scroll to="contato" spy={true} smooth={true} duration={800}>Contato</Scroll>
                        </li>
                    </ul>
                </Nav>
            </React.Fragment>
        }
    }

    return (
        <Container change={change}>
            <Logo change={change}>
                <img src={change ? LogoDark : LogoLight} alt="logo-evoup-fundo-preto" />
            </Logo>
            {isMobile()}
            <Zap>
                <button className="cta">
                    <i className="fab fa-whatsapp"></i>
                    <Link to="/redirect" className="button-text">Fale Conosco</Link>
                    {/* <a
                        href="https://api.whatsapp.com/send?phone=554891320921&text=Ol%C3%A1%2C%20gostaria%20de%20alavancar%20meu%20neg%C3%B3cio"
                        className="button-text"
                        target="_blank"
                        rel="noreferrer">
                        Fale Conosco
                        </a> */}
                </button>
            </Zap>
        </Container>
    )
}

export default Header;