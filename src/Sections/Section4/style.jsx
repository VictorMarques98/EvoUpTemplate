import styled from 'styled-components'

import { Container3,Left,Right,Card } from '../Section3/style'
import { Division3,CardSection } from '../Section3/style'
import Section4 from '../../assets/background/Section4.webp'


export const Container2 = styled(Container3)`
background-image:linear-gradient(180deg, rgba(0,0,0,.8) 0%, rgba(0,0,0,.8) 100%),url(${Section4});
padding:0;
`

export const Left2 = styled(Left)`
order:1;
margin-left:10px;

#gear{
    animation-name: ckw;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    transform-origin: 50% 50%;
    display: inline-block;
    animation-timing-function: linear;
    margin-top:20px;
    filter: invert(70%) sepia(50%) saturate(627%) hue-rotate(9deg) brightness(89%) contrast(93%);
    margin-left: -35px;
}
#gear2{
    animation-name: ccw;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    transform-origin: 50% 50%;
    display: inline-block;
    animation-timing-function: linear;
    margin-top: -35px;
    margin-left: 45px;
    filter: invert(70%) sepia(50%) saturate(627%) hue-rotate(9deg) brightness(89%) contrast(93%);
}

@keyframes ckw {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
@keyframes ccw {
    0% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
`

export const Right2 = styled(Right)`
justify-content: flex-end;`

export const Card2 = styled(Card)`
background: #1d1d1d;
height:250px;

span:nth-child(2){
    color:white;
}

span:nth-child(3){
    color:#909090;
}



&:hover{
    background: linear-gradient(to right,#470f80,#62c3ef);
    span:nth-child(3){
    color:white;
}
}`

export const Division4 = styled(Division3)``


export const CardSection4 = styled(CardSection)``