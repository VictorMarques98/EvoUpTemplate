import React from 'react';

//styled
import { Container, Title, Button, Video} from './style'

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
                    <iframe title="evo-intro" src="https://www.youtube.com/embed/iB02s-PCo68?autoplay=1&mute=1&enablejsapi=1&controls=0&loop=1&playlist=iB02s-PCo68&showinfo=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
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
            <Button>
                <Link to="sobre" spy={true} smooth={true} duration={800}>Entenda</Link>
            </Button>
        </Container >
    )
}

export default Section1;