import React from 'react';

//styled
import { Container2, Text, Description, Desc } from './style'

import { Link } from 'react-scroll'


const Section2 = ({ animation }) => {

    return (
        <Container2 animation={animation} name="sobre">
            <Text>Com análise de dados, estratégias comportamentais e de percepções, levamos o seu cliente do ponto A ao ponto B.
            </Text>
            <Description>
            <Desc animation={animation} time={2} >
                    <svg id="Layer_1" enableBackground="new 0 0 512.256 512.256" height="512" viewBox="0 0 512.256 512.256" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m512.256 315.484v-118.713h-52.036c-4.334-14.931-10.3-29.312-17.824-42.969l36.813-36.813-83.942-83.942-36.813 36.813c-13.657-7.524-28.038-13.489-42.97-17.823v-52.037h-118.713v52.037c-14.931 4.333-29.312 10.299-42.969 17.823l-36.813-36.813-83.942 83.942 36.813 36.813c-7.524 13.657-13.489 28.038-17.823 42.969h-52.037v118.713h52.037c4.334 14.931 10.299 29.313 17.823 42.969l-36.813 36.813 83.942 83.942 36.813-36.813c13.657 7.524 28.038 13.489 42.969 17.823v52.037h118.713v-52.037c14.932-4.334 29.313-10.299 42.97-17.823l36.813 36.813 83.942-83.942-36.813-36.813c7.524-13.657 13.49-28.038 17.824-42.969z" fill="#2d69ad" /><path d="m512.256 315.484v-118.713h-52.036c-4.334-14.931-10.3-29.312-17.824-42.969l36.813-36.813-83.942-83.942-36.813 36.813c-13.657-7.524-28.038-13.489-42.97-17.823v-52.037h-59.356v512.256h59.356v-52.037c14.932-4.334 29.313-10.299 42.97-17.823l36.813 36.813 83.942-83.942-36.813-36.813c7.524-13.657 13.49-28.038 17.824-42.969h52.036z" fill="#1b3359" /><circle cx="256.128" cy="256.128" fill="#e0f4ff" r="145.97" /><path d="m256.128 110.158v291.939c80.488 0 145.97-65.482 145.97-145.97s-65.482-145.969-145.97-145.969z" fill="#b7e3ff" /><path d="m325.156 205.918-11.098 11.097c-5.188 5.188-13.629 5.188-18.818 0-5.188-5.188-5.188-13.63 0-18.817l11.098-11.097-21.213-21.214-11.098 11.098c-13.158 13.158-16.059 32.744-8.71 48.741l-39.591 39.591c-15.997-7.349-35.584-4.447-48.742 8.71l-11.097 11.098 21.214 21.213 11.097-11.098c2.513-2.513 5.855-3.897 9.409-3.897 3.555 0 6.896 1.384 9.41 3.897 2.513 2.513 3.897 5.855 3.897 9.409s-1.384 6.896-3.897 9.408l-11.098 11.097 21.213 21.214 11.098-11.098c13.158-13.157 16.059-32.744 8.71-48.741l39.591-39.592c5.733 2.633 11.926 3.953 18.119 3.953 11.09 0 22.18-4.221 30.622-12.664l11.098-11.098z" fill="#fcbf29" /><path d="m325.156 205.918-11.098 11.097c-5.188 5.188-13.629 5.188-18.818 0-5.188-5.188-5.188-13.63 0-18.817l11.098-11.097-21.213-21.214-11.098 11.098c-13.158 13.158-16.059 32.744-8.71 48.741l-9.189 9.189v42.426l30.402-30.402c5.733 2.633 11.926 3.953 18.119 3.953 11.09 0 22.18-4.221 30.622-12.664l11.098-11.098z" fill="#ffa918" /></svg>
                    <span>Prestação de Serviços</span>
                    <span>Realizamos serviços em
                    pontos estratégicos
                    auxiliando os contratantes
                    de forma eficaz a fim de
                    otimizar processos</span>
                    <Link to="servicos" spy={true} smooth={true} duration={800}>Entenda</Link>
                </Desc>
                <Desc animation={animation} time={3}>
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 513.164 513.164"  >
                        <path style={{ fill: "#D5E3EF" }} d="M292.073,361.051L152.436,221.414l114.036-114.036C321.164,52.687,390.982,16.614,466.618,3.814
	l20.945-3.491c1.164,0,2.327,0,3.491,0l0,0C502.691,0.323,512,9.632,512,21.269l0,0c0,1.164,0,2.327,0,3.491l-2.327,22.109
	c-12.8,75.636-48.873,145.455-102.4,198.982L292.073,361.051z"/>
                        <path style={{ fill: "#B0C4D9" }} d="M417.745,153.923l-166.4,166.4l40.727,40.727l114.036-114.036
	c54.691-54.691,89.6-123.345,102.4-198.982l4.655-22.109c0-1.164,0-2.327,0-3.491c0-5.818-2.327-10.473-5.818-13.964
	C489.891,61.996,459.636,112.032,417.745,153.923z"/>
                        <g>
                            <path style={{ fill: "#F79548" }} d="M297.891,471.596c-6.982-6.982-18.618-6.982-25.6,0c-9.309,9.309-15.127,38.4-16.291,39.564
		c0,1.164,0,1.164,0,1.164s1.164,1.164,1.164,0c1.164,0,29.091-5.818,39.564-16.291
		C306.036,489.051,306.036,478.578,297.891,471.596z"/>
                            <path style={{ fill: "#F79548" }} d="M41.891,215.596c-6.982-6.982-18.618-6.982-25.6,0c-9.309,9.309-15.127,37.236-15.127,38.4
		c0,1.164,0,1.164,0,1.164s1.164,1.164,1.164,0c1.164,0,29.091-5.818,39.564-16.291C50.036,233.051,50.036,222.578,41.891,215.596z"
                            />
                            <path style={{ fill: "#F79548" }} d="M124.509,388.978c-20.945-20.945-55.855-20.945-76.8,0C18.618,418.069,1.164,503.014,0,506.505
		c0,2.327,0,3.491,1.164,4.655c2.327,1.164,4.655,1.164,6.982,1.164c3.491-1.164,88.436-17.455,117.527-47.709
		C146.618,443.669,146.618,409.923,124.509,388.978z"/>
                        </g>
                        <path style={{ fill: "#FCBB76" }} d="M121.018,390.141c-10.473-10.473-27.927-10.473-38.4,0c-15.127,15.127-23.273,57.018-23.273,58.182
	c0,1.164,0,2.327,1.164,2.327c1.164,1.164,1.164,1.164,2.327,1.164c2.327,0,44.218-9.309,58.182-23.273
	C131.491,418.069,131.491,400.614,121.018,390.141z"/>
                        <polygon style={{ fill: "#99B4CD" }} points="303.709,419.232 268.8,384.323 338.618,314.505 338.618,384.323 " />
                        <path style={{ fill: "#6C9ABB" }} d="M300.218,376.178l22.109-22.109c10.473-10.473,16.291-24.436,16.291-39.564l0,0L268.8,384.323
	l34.909,34.909l11.636-11.636l-15.127-15.127C295.564,387.814,295.564,380.832,300.218,376.178z"/>
                        <path style={{ fill: "#D5E3EF" }} d="M326.982,489.051l-46.545-46.545l83.782-83.782c5.818-5.818,13.964-9.309,23.273-9.309l0,0
	c18.618,0,32.582,15.127,32.582,32.582l0,0c0,9.309-3.491,17.455-9.309,23.273L326.982,489.051z"/>
                        <path style={{ fill: "#B0C4D9" }} d="M410.764,381.996l-83.782,83.782l-34.909-34.909l-11.636,11.636l46.545,46.545l83.782-83.782
	c5.818-5.818,9.309-13.964,9.309-23.273c0-4.655-1.164-8.145-2.327-11.636C416.582,375.014,414.255,378.505,410.764,381.996z"/>
                        <path style={{ fill: "#99B4CD" }} d="M94.255,326.141L94.255,326.141c8.145-8.145,17.455-13.964,26.764-16.291l19.782-6.982l69.818,69.818
	l-6.982,19.782c-3.491,10.473-9.309,19.782-16.291,26.764l0,0L94.255,326.141z"/>
                        <path style={{ fill: "#6C9ABB" }} d="M140.8,302.869l-17.455,5.818l38.4,38.4c9.309,9.309,11.636,22.109,8.145,33.745l0,0
	c-1.164,4.655-3.491,9.309-6.982,13.964l24.436,24.436c8.145-8.145,13.964-17.455,16.291-26.764l6.982-19.782L140.8,302.869z"/>
                        <polygon style={{ fill: "#99B4CD" }} points="94.255,209.778 129.164,244.687 198.982,174.869 129.164,174.869 " />
                        <path style={{ fill: "#6C9ABB" }} d="M125.673,217.923c-4.655-4.655-4.655-11.636,0-16.291l26.764-26.764h-23.273l-34.909,34.909
	l34.909,34.909l0,0c6.982-6.982,6.982-16.291,0-23.273L125.673,217.923z"/>
                        <path style={{ fill: "#D5E3EF" }} d="M24.436,186.505l46.545,46.545l83.782-83.782c5.818-5.818,9.309-13.964,9.309-23.273l0,0
	c0-17.455-15.127-32.582-32.582-32.582l0,0c-9.309,0-17.455,3.491-23.273,9.309L24.436,186.505z"/>
                        <circle style={{ fill: "#70B7E5" }} cx="326.982" cy="186.505" r="46.545" />
                        <path style={{ fill: "#F04B4D" }} d="M326.982,244.687c-32.582,0-58.182-25.6-58.182-58.182s25.6-58.182,58.182-58.182
	s58.182,25.6,58.182,58.182S359.564,244.687,326.982,244.687z M326.982,151.596c-19.782,0-34.909,15.127-34.909,34.909
	s15.127,34.909,34.909,34.909s34.909-15.127,34.909-34.909S346.764,151.596,326.982,151.596z"/>
                        <path style={{ fill: "#4C9CD6" }} d="M308.364,216.76c-3.491-5.818-4.655-11.636-4.655-18.618c0-19.782,15.127-34.909,34.909-34.909
	c6.982,0,12.8,2.327,18.618,4.655c-6.982-9.309-17.455-16.291-30.255-16.291c-19.782,0-34.909,15.127-34.909,34.909
	C292.073,199.305,299.055,209.778,308.364,216.76z"/>
                        <path style={{ fill: "#F04D4E" }} d="M292.073,361.051l-38.4,38.4c-4.655,4.655-11.636,4.655-16.291,0L114.036,276.105
	c-4.655-4.655-4.655-11.636,0-16.291l38.4-38.4L292.073,361.051z"/>
                        <path style={{ fill: "#DB343F" }} d="M205.964,333.123l-73.309-73.309c-4.655-4.655-12.8-4.655-18.618,0l0,0
	c-4.655,4.655-4.655,11.636,0,16.291l123.345,123.345c4.655,4.655,11.636,4.655,16.291,0l38.4-38.4l-40.727-40.727l-12.8,12.8
	C229.236,342.432,215.273,342.432,205.964,333.123z"/>
                        <rect x="297.123" y="415.573" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 866.2393 538.6636)" style={{ fill: "#F04D4E" }} width="48.872" height="66.327" />
                        <path style={{ fill: "#DB343F" }} d="M350.255,442.505l-16.291,16.291c-6.982,6.982-16.291,6.982-23.273,0l-23.273-23.273l-6.982,6.982
	l46.545,46.545l34.909-34.909L350.255,442.505z"/>
                        <g>
                            <path style={{ fill: "#ECF0F9" }} d="M198.982,215.596c-1.164,0-3.491,0-4.655-1.164c-2.327-2.327-2.327-5.818,0-8.145l58.182-58.182
		c2.327-2.327,5.818-2.327,8.145,0c2.327,2.327,2.327,5.818,0,8.145l-58.182,58.182
		C202.473,215.596,200.145,215.596,198.982,215.596z"/>
                            <path style={{ fill: "#ECF0F9" }} d="M280.436,134.141c-1.164,0-3.491,0-4.655-1.164c-2.327-2.327-2.327-5.818,0-8.145l23.273-23.273
		c2.327-2.327,5.818-2.327,8.145,0s2.327,5.818,0,8.145l-23.273,23.273C283.927,134.141,281.6,134.141,280.436,134.141z"/>
                        </g>
                        <path style={{ fill: "#F04D4E" }} d="M492.218,0.323c-1.164,0-2.327,0-3.491,0l-22.109,3.491c-36.073,5.818-69.818,17.455-102.4,33.745
	c0,0,20.945,20.945,55.855,55.855s55.855,55.855,55.855,55.855c16.291-32.582,26.764-66.327,33.745-102.4l3.491-20.945
	c0-1.164,0-2.327,0-3.491C513.164,9.632,503.855,0.323,492.218,0.323z"/>
                        <g>
                            <path style={{ fill: "#F26A56" }} d="M408.436,48.032c-2.327,0-4.655-1.164-5.818-3.491c-1.164-3.491,0-5.818,3.491-6.982
		c23.273-9.309,46.545-15.127,70.982-19.782c3.491,0,5.818,1.164,6.982,4.655c0,3.491-1.164,5.818-4.655,6.982
		c-23.273,3.491-46.545,10.473-68.655,18.618C409.6,48.032,409.6,48.032,408.436,48.032z"/>
                            <path style={{ fill: "#F26A56" }} d="M326.982,129.487v-1.164c-32.582,0-58.182,25.6-58.182,58.182h1.164
		c5.818,0,10.473-3.491,11.636-9.309c1.164-8.145,5.818-15.127,10.473-20.945c6.982-6.982,15.127-12.8,25.6-15.127
		C323.491,139.96,326.982,135.305,326.982,129.487z"/>
                        </g>
                        <path style={{ fill: "#DB343F" }} d="M326.982,243.523v1.164c32.582,0,58.182-25.6,58.182-58.182H384c-5.818,0-10.473,3.491-11.636,9.309
	c-1.164,8.145-5.818,15.127-10.473,20.945c-6.982,6.982-15.127,12.8-25.6,15.127C330.473,233.051,326.982,237.705,326.982,243.523z"
                        />
                        <path style={{ fill: "#ECF0F9" }} d="M350.255,401.778c-1.164,0-3.491,0-4.655-1.164c-2.327-2.327-2.327-5.818,0-8.145l23.273-23.273
	c2.327-2.327,5.818-2.327,8.145,0c2.327,2.327,2.327,5.818,0,8.145l-23.273,23.273C353.745,401.778,351.418,401.778,350.255,401.778
	z"/>
                        <path style={{ fill: "#B0C4D9" }} d="M154.764,125.996l-83.782,83.782l-34.909-34.909l-11.636,11.636l46.545,46.545l83.782-83.782
	c5.818-5.818,9.309-13.964,9.309-23.273c0-4.655-1.164-8.145-2.327-11.636C160.582,119.014,158.255,122.505,154.764,125.996z"/>
                        <path style={{ fill: "#ECF0F9" }} d="M94.255,145.778c-1.164,0-3.491,0-4.655-1.164c-2.327-2.327-2.327-5.818,0-8.145l23.273-23.273
	c2.327-2.327,5.818-2.327,8.145,0s2.327,5.818,0,8.145l-23.273,23.273C97.745,145.778,95.418,145.778,94.255,145.778z"/>
                        <rect x="41.095" y="159.572" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 248.1529 282.6833)" style={{ fill: "#F04D4E" }} width="48.872" height="66.327" />
                        <g>
                            <path style={{ fill: "#DB343F" }} d="M94.255,186.505l-16.291,16.291c-6.982,6.982-16.291,6.982-23.273,0l-23.273-23.273l-6.982,6.982
		l46.545,46.545l34.909-34.909L94.255,186.505z"/>
                            <path style={{ fill: "#DB343F" }} d="M446.836,120.178l29.091,29.091c16.291-32.582,26.764-66.327,33.745-102.4l3.491-20.945
		c0-1.164,0-2.327,0-3.491c0-5.818-2.327-10.473-5.818-13.964C494.545,48.032,473.6,86.432,446.836,120.178z"/>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                    </svg>
                    <span>Lançamento</span>
                    <span>Estratégia de venda mais avançada que existe.Consiste em uma campanha de vendas de um produto/serviço em escala em um curto período de tempo.</span>
                    <Link style={{marginTop:'32px'}} to="lancamento" spy={true} smooth={true} duration={800}>Entenda</Link>
                </Desc>
                
            </Description>
        </Container2 >
    )
}

export default Section2;