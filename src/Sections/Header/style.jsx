import styled,{css} from 'styled-components'

export const Container = styled.header`
display:flex;
align-items:center;
padding: 0 70px 0 70px;
transition: all .8s ease;
animation-delay:1s;
z-index: 1;

${({change}) => change ? 
css`
position:fixed;
height:50px;
width:100%;
flex-direction:row;
justify-content:space-between;
background: #fffffff5;
box-shadow: 0 0 9px #00000029;
overflow: initial;
`:
css`
position:absolute;
flex-direction:column;
overflow:hidden;
`
}

@media(min-width:480px){
@keyframes fadeInUp {
  from { 
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

&>div,nav{
    opacity: 0;
    animation: fadeInUp 1s ease-in-out 0s forwards;
}
}

@media(max-width:480px)
{
  flex-direction: row;
  width: 100vw;
  padding:  ${({change}) => change ? '10px 20px':'40px'};
  justify-content:space-between;

}
`

export const Logo = styled.div`
display: flex;
margin: ${({change}) => change ? '0px':'15px 0 30px 0'};
animation-delay: 1s;
transition:all .8s;

img{
    height:${({change}) => change ? '35px':'auto'};
}

@media(max-width:480px){
  margin:0;
  flex: 1;
  justify-content: center;

  img{
    width:${({change}) => change ? 'auto':'130px'};
  }
}
`

export const Nav = styled.nav`
animation-delay: 2s;
ul{
    display:flex;

    li{
        font-weight: 500;
        text-transform: uppercase;
        font-size: 11px;
        margin: 0 20px;
        letter-spacing: 1px;
        list-style:outside none none;
        color: ${({change}) => change ? '#212121':'white'};
        transition:all .8s;
        cursor:pointer;

        :hover{
            color:${({change}) => change ? '#e0c438':'grey'};
            cursor:pointer!important;
        }
    }
}

.active{
  color:#e0c438;
}
`

export const Zap = styled.div`
  position: fixed;
  right: 25px;
  bottom: 25px;
  text-align: center;
  cursor:pointer;
  overflow:hidden;

  .cta {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 2px solid #15ce2a;
  background-color: #15ce2a;
  color: #fff;
  transition: width 0.7s;
  cursor:pointer;
  overflow:hidden;
}
.cta:hover {
  width: 180px;
  transition: width 0.7s;
}

.cta i {
  opacity: 1;
  transition: opacity 0.5s;
  font-size:30px;
}

.cta:hover i {
  opacity: 0;
  transition: opacity 0.5s
}

.cta .button-text {
  opacity: 0;
  transition: opacity .5s;
  position: absolute;
  width: 100%;
  left: 0;
  line-height:30px;
  color:white;
  text-decoration:none;
 }

.cta:hover .button-text {
  opacity: 1;
  transition: opacity 0.5s
}

@media(max-width:480px)
{
  right:10px;
  bottom:10px;
}
`

export const HbMenu = styled.div`
color:#2f2e2e;
font-size:20px;
display:${({change}) => change ? 'block':'none'};
`

export const NavMobile = styled.aside`
height:100vh;
background:white;
width:200px;
position:absolute;
right:-2px;
top:0;
z-index:10;
transform:${(props) => props.open ? 'translateX(0)':'translateX(200px)'};
transition: transform .5s;
padding-left:15px;
color:#484848;
box-shadow: -8px 0 13px #0000001f;

ul{
  display:flex;
  flex-direction:column;
  height:100%;
  width:100%;
  margin-top:20px;

  li{
    padding:20px;
  }

  .active{
  color:#e0c438;
}
}

&>div{
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: solid 1px #9191914d;
  margin-left: -15px;
  padding-left: 15px;
}

@media(min-width:480px)
{
  display:none;
}

`

export const BlankScreen = styled.aside`
background:#000000a1;
width:100vw;
height:100vh;
z-index:9;
position:absolute;
top:0;
left:0;
display:${(props) => props.open ? 'block':'none'};
`