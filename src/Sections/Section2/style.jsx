import styled from 'styled-components'
import Section2 from '../../assets/background/Section2.webp'

//styled
import { Container } from '../Section1/style'

export const Container2 = styled(Container)`
background-image:url(${Section2});
padding:0;


&>span,li{
    opacity:0;
    animation: ${({animation})=> animation ? 'fadeInUp 1s ease-in-out 0s forwards':""};
}
`

export const Text = styled.span`
font-weight: 300;
width:100%;
max-width:780px;
font-size:20px;
line-height:1.5;
text-align:center;
color:#313131;
`

export const Description = styled.ul`
display:flex;
justify-content:center;
width:100%;
margin-top:80px;
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
    height:100px;
    
}

path{
    animation:${({animation,time}) => animation ? `animate ${time}s linear forwards`:""};
}


`