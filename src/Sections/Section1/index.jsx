import React from 'react';

//styled
import { Container, Title, Button, Video } from './style'

//Scroll    
import { Link } from 'react-scroll'

const Section1 = () => {

    const isMobile = () => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return ''
        }

        else {
            return <Video>
                <div className="video-foreground">
                    <iframe title="evo-intro" src="https://www.youtube.com/embed/iB02s-PCo68?autoplay=1&mute=1&enablejsapi=1&controls=0&loop=1&playlist=iB02s-PCo68&showinfo=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                </div>
                <div className="background" />
            </Video>

        }

    }

    return (
        <Container name="inicio">
            {isMobile()}
            <Title>
                <h1>
                    <p>Somos a conexão entre <span style={{ color: 'gold' }}>você</span> e o seu público ideal.</p>
                </h1>
            </Title>
            <div style={window.innerWidth <= 480 ? { display: 'flex', flexDirection: 'column', alignItems: 'center' } : {}}>
                <Button color={"#e0c438"}>
                    <Link to="sobre" spy={true} smooth={true} duration={800}>Entenda</Link>
                </Button>
                <Button style={window.innerWidth <= 480 ? { width: '250px',marginTop:'20px' }:{ marginLeft: '20px', width: '250px'}} color={"#25c525"} obj={true}>
                    <a href="https://api.whatsapp.com/send?phone=554891320921&text=Ol%C3%A1%2C%20gostaria%20de%20alavancar%20meu%20neg%C3%B3cio" className="button-text" target="_blank" rel="noreferrer">Destrave seu negócio</a>
                </Button>
            </div>
        </Container >
    )
}

export default Section1;