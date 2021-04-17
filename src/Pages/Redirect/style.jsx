import styled from 'styled-components'

export const Container = styled.div`
height: 100vh;
width: 100vw;
position: absolute;
top: 0;
left: 0;
background: #242122;
color: white;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

.loader,
.loader:before,
.loader:after {
  border-radius: 50%;
}
.loader {
  color: #ffffff;
  font-size: 11px;
  text-indent: -99999em;
  margin: 55px auto;
  position: relative;
  width: 10em;
  height: 10em;
  box-shadow: inset 0 0 0 1em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.loader:before,
.loader:after {
  position: absolute;
  content: '';
}
.loader:before {
  width: 5.2em;
  height: 10.2em;
  background: #242122;
  border-radius: 10.2em 0 0 10.2em;
  top: -0.1em;
  left: -0.1em;
  -webkit-transform-origin: 5.1em 5.1em;
  transform-origin: 5.1em 5.1em;
  -webkit-animation: load2 2s infinite ease 1.5s;
  animation: load2 2s infinite ease 1.5s;
}
.loader:after {
  width: 5.2em;
  height: 10.2em;
  background: #242122;
  border-radius: 0 10.2em 10.2em 0;
  top: -0.1em;
  left: 4.9em;
  -webkit-transform-origin: 0.1em 5.1em;
  transform-origin: 0.1em 5.1em;
  -webkit-animation: load2 2s infinite ease;
  animation: load2 2s infinite ease;
}
@-webkit-keyframes load2 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load2 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

span {
  font-family: Montserrat;
  font-size: 28px;
  font-weight: 600;
  max-width: 500px;
  text-align: center;
  line-height: 45px;
}

div:nth-child(4) {
  margin-top: 15vh;
  position: relative;

  img {
    width: 180px;
  }
}

.Title {
  font-size: 40px;
  font-weight: 800;
  letter-spacing: 1px;
  color: #efca00;
}

@media(max-width: 480px)
{
  padding: 20px;
  width: 100vw;
  span {
    font-size: 20px;
    line-height: 26px;
  }

  .Title {
    line-height: 45px;
  }

  div:nth-child(4) {
    margin-top: 5vh;
  
    img {
      width: 150px;
    }
  }
}

`