import React from 'react';

import { Container7, Title, Division, Subtitle, Team, Card, Image, Description } from './style'

import Member1 from '../../assets/fundadores/Caio.webp'
import Member2 from '../../assets/fundadores/Mitchell.webp'
import Member3 from '../../assets/fundadores/Victor.webp'

const Section7 = () => {

    return (
        <Container7 name="equipe">
            <Title>Idealizadores</Title>
            <Division>
                <div/>
                <div/>
                <div/>
            </Division>
            <Subtitle>A partir da expertise de cada um de nós três a EvoUp surgiu, unindo  especializações diferentes e nichadas para o setor de marketing, afim de termos os melhores resultados possíveis em nossas ações.
            </Subtitle>
            <Team>
                <Card>
                    <Image >
                        <div style={{backgroundImage:`url(${Member1})`}}/>
                    </Image>
                    <Description>
                        <span>Caio Portela</span>
                        <p>Gestor de Tráfego e Lançamento</p>
                    </Description>
                </Card>
                <Card>
                    <Image >
                        <div style={{backgroundImage:`url(${Member2})`}}/>
                    </Image>
                    <Description>
                        <span>Mitchell Henrique</span>
                        <p>Social Media e Copywriter</p>
                    </Description>
                </Card>
                <Card style={{marginRight:'0px'}}>
                    <Image >
                        <div style={{backgroundImage:`url(${Member3})`}}/>
                    </Image>
                    <Description>
                        <span>Victor Marques</span>
                        <p>Design e Desenvolvedor</p>
                    </Description>
                </Card>
            </Team>
        </Container7>
    )
}

export default Section7;