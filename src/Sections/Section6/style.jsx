import styled from 'styled-components'

import image1 from '../../assets/images/Cremolito.webp'
import image2 from '../../assets/images/Fonte.webp'
import image3 from '../../assets/images/SDI.webp'

import { Container } from '../Section1/style'
import{ Title, Subtitle } from '../Section5/style'
import { Division } from '../Section7/style'
import { Default } from '../../Pages/Home/style'

export const Container6 = styled(Container)`
background:white;
padding-top:50px;

@media(max-width:480px){
    padding: 60px 20px;
}
`

export const Title6 = styled(Title)`
color:#353535;
`

export const Subtitle6 = styled(Subtitle)`
color:#353535;
`

export const Division6 = styled(Division)``

export const Portfolio = styled(Default)`
justify-content:center;
margin-top:50px;
`

export const Line1 = styled.ul`
display:flex;
justify-content:center;
height:350px;
@media(max-width:480px){
    flex-direction: column;
    height: max-content;
}
`

export const Card = styled.li`
display:flex;
flex-direction:column;
justify-content:flex-end;
flex:1;
height:350px;
min-height:350px;
max-width:300px;
min-width:300px;
margin-right:20px;
padding:20px;
border-radius:10px;
color:white;
background-image: linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(0,0,0,.9) 100%), url(${image1});
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
box-shadow: 0px 25px 20px -10px #1f1f1fe0;

transition:all .4s ease;
overflow:hidden;

&:nth-child(2){

background-image: linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(0,0,0,.9) 100%), url(${image2});
}
&:nth-child(3){

background-image: linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(0,0,0,.9) 100%), url(${image3});
}

    i{
        font-size:34px;
        transition:all .4s ease;
        transform:translateY(90px);
        
    }
    span:nth-child(2)
    {
        font-weight:700;
        font-size: 20px;
        margin: 20px 0;
        transition:all .4s ease;
        position:relative;
        transform:translateY(90px);
    }

    span:nth-child(3)
    {
        position:relative;
        transform:translateY(100px);
        transition:all .4s ease;
        max-width:250px;
        font-size:15px;
    }

@media(min-width:480px){

    &:hover{
        background-image: linear-gradient(to bottom,rgba(0,0,0,0),#ff5433 100%), url(${image1});
        margin-top:-20px;

        
&:nth-child(2){

background-image: linear-gradient(to bottom,rgba(0,0,0,0),#ff5433 100%), url(${image2});
}
&:nth-child(3){

background-image: linear-gradient(to bottom,rgba(0,0,0,0),#ff5433 100%), url(${image3});
}

    span:nth-child(2), i
    {
        transform:translateY(-10px);
        letter-spacing:-0.5px;
    }

    span:nth-child(3)
    {
        transform:translateY(0px);
        position:relative;
    }
}
}

@media(max-width:480px){
    margin: 0 0 40px 0;
    max-width:260px;
    span:nth-child(2), i
    {
        transform:translateY(-10px);
        letter-spacing:-0.5px;
    }

    span:nth-child(3)
    {
        transform:translateY(0px);
        position:relative;
    }
}
`