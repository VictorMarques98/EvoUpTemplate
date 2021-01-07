import styled from 'styled-components'
import { Container } from '../Section1/style'
import { Default } from '../../Pages/Home/style'
import { Division } from '../Section7/style'
import Section5 from '../../assets/background/Section5.webp'


export const Container5 = styled(Container)`
background-image:linear-gradient(180deg, rgba(0,0,0,.8) 0%, rgba(0,0,0,.8) 100%),url(${Section5});
height:100vh;
padding:0;
`

export const Title = styled.span`
font-size: 42px;
color: white;
letter-spacing: -0.3px;
font-weight: 700; 
`

export const Subtitle = styled.span`
color: #b5b4b4;
max-width: 540px;
text-align: center;
font-size: 16px;
line-height: 1.5;
`

export const CardSection = styled.div`
display:flex;
flex-wrap:wrap;
margin-top:60px;`

export const Card = styled(Default)`
justify-content: flex-start;
max-width: 300px;
margin:35px 30px 0 0;


div{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #b8b8b8;

    svg{
        height: 42px;
        fill: black;
    }
}

span:nth-child(2){
    letter-spacing: .2px;
    font-size: 20px;
    font-weight: 700;
    margin: 20px 0 10px 0;
    color: white;
    text-transform:uppercase;
    text-align:center;
    max-width:200px;
}

span:nth-child(3){
    font-size: 14px;
    text-align: center;
    line-height: 1.5;
    color: #b1b1b1;
}

`
export const Division5 = styled(Division)``