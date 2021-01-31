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
                        <span>Caio Portela</span><br />
                        <span>Gestor de Tráfego e Lançamento</span>
                    </Description>
                </Card>
                <Card>
                    <Image >
                        <div style={{backgroundImage:`url(${Member2})`}}/>
                    </Image>
                    <Description>
                        <span>Mitchell Henrique</span><br />
                        <span>Social Media e Copywriter</span>
                    </Description>
                </Card>
                <Card style={{marginRight:'0px'}}>
                    <Image >
                        <div style={{backgroundImage:`url(${Member3})`}}/>
                    </Image>
                    <Description>
                        <span>Victor Marques</span><br />
                        <span>Design e Desenvolvedor</span>
                    </Description>
                </Card>
            </Team>
        </Container7>
    )
}

export default Section7;