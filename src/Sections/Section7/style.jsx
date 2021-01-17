import styled from 'styled-components'
import { Container } from '../Section1/style'
import { Default } from '../../Pages/Home/style'

export const Container7 = styled(Container)`
background:#1b1b1b;
padding-top:50px;

@media(max-width:480px)
{
    padding: 50px 20px 0 20px;
}
`

export const Title = styled.span`
font-size: 42px;
color: white;
letter-spacing: -0.3px;
font-weight: 700;
`

export const Subtitle = styled.span`
color: grey;
max-width: 540px;
text-align: center;
font-size: 16px;
line-height: 1.5;
`

export const Division = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin:20px 0;

div:nth-child(2)
{
    height:10px;
    width:10px;
    background:#ffe100;
    margin:0 10px;
}

div:nth-child(1),
div:nth-child(3)
{
    width:70px;
    height:1px;
    background:#8f8f8f;
}
`

export const Team = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top:80px;

@media(max-width:480px){
    flex-direction:column;
}
`

export const Card = styled(Default)`
justify-content:center;
margin-right:60px;

@media(max-width:480px){
    margin:0 0 40px 0;
}
`

export const Image = styled(Default)`
justify-content:center;
overflow:hidden;


div:nth-child(1){
height: 200px;
width: 200px;
border-radius: 50%;
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
}

div:nth-child(2){
    transform:translate(200px,-150px);
    transition:all .3s linear;
i{
    font-size:50px;
    color:white;
    margin-right:20px;
}
}

`

export const Description = styled.div`
    margin-top:20px;
    text-align:center;

    span:nth-child(1)
    {
    color: white;
    font-weight: 800;
    font-size: 20px;
    letter-spacing: .8px;
    }

    span:nth-child(3)
    {
        color: #d3d3d3;
        font-size:14px;
    }
`