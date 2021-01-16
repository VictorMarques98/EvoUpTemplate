import styled from 'styled-components'

import { Container } from '../Section1/style'
import { Title } from '../Section7/style'

import Section6 from '../../assets/background/Section6.webp'


export const Container8 = styled(Container)`
background-image:linear-gradient(rgba(0, 0, 0, 0.364), rgba(0, 0, 0, 0.43)),url(${Section6});
padding:0;
`

export const Title8 = styled(Title)``

export const Button = styled.div`
    width: 280px;
    height: 60px;
    background: #dfe6e9;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 50px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    transition: .3s linear;
    margin-top: 60px;

&:hover{
  transform: scale(1.1);
}
& span{
  position: absolute;
  width: 100%;
  height: 100%;
  background: #32b64c;
  color: #f1f1f1;
  text-align: center;
  line-height: 60px;
  z-index: 999;
  transition: .6s linear;
  border-radius: 40px;
  text-transform:uppercase;
  font-weight:800;
  letter-spacing:1px;
  font-family: Quicksand;
 
}
&:hover span{
  transform: translateX(-100%);
  transition-delay: .3s;
}
& a {
  flex: 1;
  font-size: 26px;
  margin-right: 20px;
  color: #2d3436;
  text-align: center;
  transform: translateX(-100%);
  opacity: 0;
  transition: .3s linear;
}
&:hover a {
  opacity: 1;
  transform: translateX(0);
}
& a:nth-of-type(1){
  transition-delay: 1s;
}
& a:nth-of-type(2){
  transition-delay: .8s;
}
& a:nth-of-type(3){
  transition-delay: .6s;
}
& a:nth-of-type(4){
  transition-delay: .4s;
}

i:hover{
  color:#00ff1e;
  animation:color .5s ease;
}
`