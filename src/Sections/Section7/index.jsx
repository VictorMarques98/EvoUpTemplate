import React from 'react';

import { Container7, Title, Division, Subtitle, Team, Card, Image, Description } from './style'

import Member1 from '../../assets/fundadores/Caio.webp'
import Member2 from '../../assets/fundadores/Mitchell.webp'
import Member3 from '../../assets/fundadores/Victor.webp'

const Section7 = () => {

    return (
        <Container7 name="time">
            <Title>Equipe</Title>
            <Division>
                <div/>
                <div/>
                <div/>
            </Division>
            <Subtitle>Somos em três pessoas na equipe, cada um contando com uma especialização diferente e nichada para o setor de marketing, afim de termos os melhores resultados possíveis em nossas ações.
            </Subtitle>
            <Team>
                <Card>
                    <Image >
                        <div style={{backgroundImage:`url(${Member1})`}}/>
                        {/* <div>
                            <a href="www.gooogle.com">
                                <i className="fab fa-instagram"/>
                            </a>
                            <a href="www.gooogle.com">
                                <i className="fab fa-linkedin" style={{marginRight:'0px'}} />
                            </a>
                        </div> */}
                    </Image>
                    <Description>
                        <span>Caio Portela</span><br />
                        <span>Gestor de Tráfego e Lançamento</span>
                    </Description>
                </Card>
                <Card>
                    <Image >
                        <div style={{backgroundImage:`url(${Member2})`}}/>
                        {/* <div>
                            <a href="www.gooogle.com">
                                <i className="fab fa-instagram"/>
                            </a>
                            <a href="www.gooogle.com">
                                <i className="fab fa-linkedin" style={{marginRight:'0px'}} />
                            </a>
                        </div> */}
                    </Image>
                    <Description>
                        <span>Mitchell Henrique</span><br />
                        <span>Social Media</span>
                    </Description>
                </Card>
                <Card style={{marginRight:'0px'}}>
                    <Image >
                        <div style={{backgroundImage:`url(${Member3})`}}/>
                        {/* <div>
                            <a href="www.gooogle.com">
                                <i className="fab fa-instagram" />
                            </a>
                            <a href="www.gooogle.com">
                                <i className="fab fa-linkedin" style={{marginRight:'0px'}} />
                            </a>
                        </div> */}
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