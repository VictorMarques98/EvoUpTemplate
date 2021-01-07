import React from 'react';

//styled
import { Container, Title, Button } from './style'

//Scroll    
import { Link } from 'react-scroll'

const Section1 = () => {


    return (
        <Container name="section1">
            <Title>
                <h1>
                    <p>Somos a conexão entre você e o seu público ideal.</p>
                </h1>
            </Title>
            <Button>
                <Link to="section2" spy={true} smooth={true} duration={800}>Entenda</Link>
            </Button>
        </Container>
    )
}

export default Section1;