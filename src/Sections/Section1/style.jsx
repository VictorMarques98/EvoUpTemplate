import styled from 'styled-components'

export const Container = styled.section`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:100vh;
width:100%;
padding-top:80px;

background-image:none;
background-repeat: no-repeat;
background-size: cover;
background-position: center 10;
background-attachment: fixed;

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

& div:nth-child(2),
&>button
{
    opacity: 0;
    animation: fadeInUp 1s ease-in-out 0s forwards;
}
`

export const Title = styled.div`
width:880px;
animation-delay: 1s;

h1{
    height:max-content;
    text-align:center;

    p{
        font-weight: 700;
        font-size: 42px;
        letter-spacing: 1px;
        line-height: 54px;
        text-align: center;
        text-transform: uppercase;
        color: #ffffff;
        font-family:"Montserrat";
        text-decoration:none;
        cursor:pointer;

        &:nth-child(3){
            font-size:30px;
            font-weight:300;
        }
    }
}
`

export const Button = styled.button`
width:150px;
height:44px;
margin-top:25px;

background-color:#e0c438;
border:none;
border-radius:3px;
outline:none;

transition:all .3s;
animation-delay: 2s;

a
{
    display: inline-block;
    position: relative;
    font-weight: 600;
    transition: 0.3s;
    font-size: 13px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color:white;
    text-decoration:none;
    cursor:pointer;

    &:after{
        font-family: "Font Awesome 5 Free";
        content: "\f063";
        position: absolute;
        opacity: 0;
        top: 3px;
        right: -20px;
        transition: 0.2s;
    }
}

&:hover 
{
    background-color:white;
    a{
        color:#e0c438;
        padding-right: 25px;
    }
}


&:hover a:after{
    opacity: 1;
    right: 0;
}

`

export const Video = styled.div`
  background: #000;
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  z-index: -99;

  .video-foreground,
  iframe{
    position: absolute;
  top: -40px;
  bottom:-70px;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  }

  .video-foreground{
    padding-bottom: 56.25%;
  }

  .background{
    width:100vw;
    height:100vw;
    position:absolute;
    top:0;
    left:0;
    background: linear-gradient(rgb(0 0 0 / 55%),rgb(0 0 0 / 70%));
  }
`