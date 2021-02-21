import styled from 'styled-components'

//styled
import { Container,Button } from '../Section1/style'
import { Default } from '../../Pages/Home/style'
import { Division } from '../Section7/style'
import Section3 from '../../assets/background/Section3.webp'


export const Container3 = styled(Container)`
flex-direction:row;
background-image:linear-gradient(180deg, rgba(0,0,0,.8) 0%, rgba(0,0,0,.8) 100%),url(${Section3});
padding:60px 20px;
span{
    font-family:"Open Sans";
}
&>div{
    opacity:1;
    animation:none;
}

@media(max-width:480px){
    flex-direction: column;
    height: max-content;

    &>div{
    flex-direction: column;
    margin-top: 35px;
    }
}
`

export const Left = styled(Default)`
justify-content:center;
max-width:400px;
padding:0 20px;
height:100%;
color: white;

svg{
    height:180px;
    margin-top:46px;
    fill: #dcdcdc;
}



span:nth-child(1)
{
    font-size: 30px;
    font-weight: 800;
    line-height: 1;
    letter-spacing: 1px;
    text-align:center;
    text-transform: uppercase;
    width:100%;
}

span:nth-child(3)
{
    text-align:center;
    font-size:16px;
    color:grey;
    max-width:80%;
}
`

export const Right = styled.div`
display:flex;
max-width:850px;
flex-wrap:wrap;
`
export const CardSection = styled.div`

@media(min-width:480px){

&:hover,
&>div:hover{

    &>div{

    margin-top: -10px;
    background: linear-gradient(to right, #ff9966, #ff5e62);
    box-shadow: 0 0 20px 6px #0000007a;
    span{
        color: white;
        fill:white;
    }
    }
}
}


`

export const Card = styled(Default)`
justify-content:center;
max-width: 240px;
height: 240px;
border-radius: 10px;
padding: 30px 30px;
margin: 10px;
background:#d8d8d8;
transition: all 0.4s ease;

svg{
    height: 50px;
    width: 100%!important;
}

span:nth-child(2)
{
    font-size: 18px;
    font-weight: 700;
    margin: 20px 0;
    text-align:center;
}

span:nth-child(3)
{
    color: #636363;
    font-size:14px;
    text-align:center;
}

`

export const Division3 = styled(Division)`
`

export const Button3 = styled(Button)`
    width: 200px;
    text-transform: uppercase;
    font-weight: 600;
    padding: 10px;
    height: max-content;
    color: white;
    background: #1d8e15;
    letter-spacing: .3px;
    cursor:pointer!important;

    &:hover{
        background:#00aeff;
    }

    @media(max-width:480px)
    {
        width:100%;
    }
`