import styled,{createGlobalStyle} from 'styled-components'

export const Loader = styled.div`
width: 100vw;
height: 100vh;
position: absolute;
left: 0;
top: 0;
display: flex;
justify-content: center;
align-items: center;
background: #151515;

div{
    position: absolute;
    border: 4px solid #e3e621;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

div:nth-child(2) {
    animation-delay: -0.5s;
}

@keyframes lds-ripple {
  0% {
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: calc(50% - 36px);
    left: calc(50% - 36px);
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
`

export const Global = createGlobalStyle`

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:"Open Sans";

}

body{

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius:5px;
}

::-webkit-scrollbar-track {
  background: black;
}

&:hover{
  ::-webkit-scrollbar-thumb {
  background: rgba(90, 90, 90);
  border-radius:5px;
  }
}
}
`

export const Default = styled.div`
display:flex;
flex-direction:column;
align-items:center;

`

