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
background:#d8d8d8;
box-shadow: 0 0 9px #0000003d;
`:
css`
position:absolute;
flex-direction:column;
`
}

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

div,nav{
    opacity: 0;
    animation: fadeInUp 1s ease-in-out 0s forwards;
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
            color:${({change}) => change ? '#e0c438':'grey'}
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
`