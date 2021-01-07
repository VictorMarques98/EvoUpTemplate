import React from 'react';

//Styled
import { Container6, Title6, Subtitle6, Portfolio, Line1, Card, Division6 } from './style'


const Section6 = () => {
    return (
        <Container6 name="portfolio">
            <Title6>Portfólio</Title6>
            <Division6>
                <div />
                <div />
                <div />
            </Division6>
            <Subtitle6>Veja algum dos clientes que confiaram em nossos serviços.</Subtitle6>
            <Portfolio>
                <Line1>
                    <Card >
                        <i className="fas fa-ice-cream"></i>
                        <span>Cremolito</span>
                        <span>Empresa focada no ramo alimentício que usou a consultoria da EvoUp como escala para aumento de clientes no meio digital</span>
                    </Card>
                    <Card >
                        <i className="fas fa-tshirt"></i>
                        <span>Fonte Fornecedores</span>
                        <span>Lançamento de infoproduto do qual contratou a EvoUp como acessoria, resultando em 4 digitos de faturamento em 7 dias</span>
                    </Card>
                    <Card style={{ marginRight: '0px' }} >
                        <i className="fas fa-funnel-dollar"></i>
                        <span>Método SDI</span>
                        <span>Lançamento de infoproduto que contou com os serviços da EvoUp, resultado em uma grande demanda de clientes e afiliados </span>
                    </Card>
                </Line1>
            </Portfolio>
        </Container6>
    )
}

export default Section6;