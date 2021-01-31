import styled,{createGlobalStyle} from 'styled-components'

export const Loader = styled.div`
height:100%;
width:100%;


.pai-loader {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;

  img,span{
    position: absolute;
    top: calc(50vh - 25px);
    left: calc(50vw - 82px);
  }

  span{
    height:50px;
    width:170px;
  }
}

.flex-center {
  height: 100%;
  background-color: #151515;
}

@keyframes dashAnimation {
  to {
    stroke-dashoffset: 0px;
  }
}

@keyframes placeHolderShimmer{
  0%{
      background-position: -500px 0px;
  }
  100%{
      background-position: 500px 0px;
  }
}

.animated-background {
  animation-name: placeHolderShimmer;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.55, 0.06, 0.68, 0.19);
  background: #151515;
  background: linear-gradient(-45deg, transparent 70%,#151515 15px, transparent );
  background-size: 500px 500px ;
}

`

export const Global = createGlobalStyle`

/* open-sans-300 - latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  src: url('../../assets/fonts/open-sans-v18-latin-300.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../../assets/fonts/open-sans-v18-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../../assets/fonts/open-sans-v18-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
       url('../../assets/fonts/open-sans-v18-latin-300.woff') format('woff'), /* Modern Browsers */
       url('../../assets/fonts/open-sans-v18-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../../assets/fonts/open-sans-v18-latin-300.svg#OpenSans') format('svg'); /* Legacy iOS */
}
/* open-sans-regular - latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: url('../../assets/fonts/open-sans-v18-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../../assets/fonts/open-sans-v18-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../../assets/fonts/open-sans-v18-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../../assets/fonts/open-sans-v18-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../../assets/fonts/open-sans-v18-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../../assets/fonts/open-sans-v18-latin-regular.svg#OpenSans') format('svg'); /* Legacy iOS */
}
/* open-sans-600 - latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  src: url('../../assets/fonts/open-sans-v18-latin-600.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../../assets/fonts/open-sans-v18-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../../assets/fonts/open-sans-v18-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
       url('../../assets/fonts/open-sans-v18-latin-600.woff') format('woff'), /* Modern Browsers */
       url('../../assets/fonts/open-sans-v18-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../../assets/fonts/open-sans-v18-latin-600.svg#OpenSans') format('svg'); /* Legacy iOS */
}
/* open-sans-700 - latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  src: url('../../assets/fonts/open-sans-v18-latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../../assets/fonts/open-sans-v18-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../../assets/fonts/open-sans-v18-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('../../assets/fonts/open-sans-v18-latin-700.woff') format('woff'), /* Modern Browsers */
       url('../../assets/fonts/open-sans-v18-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../../assets/fonts/open-sans-v18-latin-700.svg#OpenSans') format('svg'); /* Legacy iOS */
}
/* open-sans-800 - latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 800;
  src: url('../../assets/fonts/open-sans-v18-latin-800.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../../assets/fonts/open-sans-v18-latin-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../../assets/fonts/open-sans-v18-latin-800.woff2') format('woff2'), /* Super Modern Browsers */
       url('../../assets/fonts/open-sans-v18-latin-800.woff') format('woff'), /* Modern Browsers */
       url('../../assets/fonts/open-sans-v18-latin-800.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../../assets/fonts/open-sans-v18-latin-800.svg#OpenSans') format('svg'); /* Legacy iOS */
}

*{
margin:0;
padding:0;
box-sizing:border-box;
list-style:outside none none;
font-family:'Open Sans';
cursor:default;
}

a{
  cursor:pointer!important;
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

