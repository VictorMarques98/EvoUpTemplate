import styled from 'styled-components'
import Section2 from '../../assets/background/Section2.webp'

//styled
import { Container } from '../Section1/style'

export const Container2 = styled(Container)`
background-image:url(${Section2});
padding:0;
height:max-content;
min-height:100vh;

@media(min-width:480px)
{
&>span,li{
    opacity:0;
    animation: ${({animation})=> animation ? 'fadeInUp 1s ease-in-out 0s forwards':""};
}
}

@media(max-width:480px)
{
    padding:50px 20px;
}
`

export const Text = styled.span`
font-weight: 300;
width:100%;
max-width:700px;
font-size:20px;
line-height:1.5;
text-align:center;
color:#313131;

@media(max-width:480px)
{
    margin:60px 0;
    max-width:320px;
}
`

export const Description = styled.ul`
display:flex;
justify-content:center;
width:100%;
margin-top:60px;

@media(max-width:480px)
{
    margin-top: 0;
    flex-direction: column;
    align-items: center;
}
`

export const Desc = styled.li`
display:flex;
flex-direction:column;
align-items:center;
max-width:225px;
margin: 0 40px;
max-width: 300px;
padding: 20px;
border-radius: 20px;
background: white;
box-shadow: 0 30px 17px -15px #0000006e;
border: solid 1px #e0dede;

&:nth-child(1){
    animation-delay: .5s;
}
&:nth-child(2){
    animation-delay: 1.5s;
}
&:nth-child(3){
    animation-delay: 2.5s;
}

span{
    color:#2d2d2d;
    text-align:center;

    &:nth-child(2)
    {
        margin:23px 0;
        font-size:25px;
        font-weight:700;
        letter-spacing:.5px;
        text-transform: uppercase;
        font-weight: 800;
    }

    &:nth-child(3)
    {
        font-size:15px;
        color:#2b2b2b;
        line-height:1.55;
        font-weight:400;
    }
}

svg{
    height:65px;
    width:100%;
}

a{
    text-decoration: none;
    margin-top: 20px;
    background: #1bd01b;
    color: white;
    padding: 10px;
    border-radius: 10px;
    font-weight: 600;
    transition:all .7s;
    text-align:center;
    width:100%;

    &:hover{
        background:#0c690c;
    }
}

@media(max-width:480px)
{

path{
    animation:${({animation,time}) => animation ? `animate ${time}s linear forwards`:""};
}
}

@media(max-width:480px)
{
    margin:0 0 35px 0;
    max-width:280px;
    border: solid 1px #80808073;

    svg{
        height:80px;
    }
}

`