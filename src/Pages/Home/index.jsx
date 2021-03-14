import React, { useState, useEffect, lazy, Suspense } from 'react';
import LogoLight from '../../assets/images/logo_light.webp'

//styled
import { Global, Default, Loader } from './style'


//Components
const Header = lazy(() => import('../../Sections/Header'))
const Section1 = lazy(() => import('../../Sections/Section1'))
const Section2 = lazy(() => import('../../Sections/Section2'))
const Section3 = lazy(() => import('../../Sections/Section3'))
const Section4 = lazy(() => import('../../Sections/Section4'))
const Section6 = lazy(() => import('../../Sections/Section6'))
const Section8 = lazy(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return import("../../Sections/Section8")
    }
    else {
        return Promise.all([
            import("../../Sections/Section8"),
            new Promise(resolve => setTimeout(resolve, 2500))
        ])
            .then(([moduleExports]) => moduleExports);
    }
});

const Home = () => {

    const [changeHeader, setHeader] = useState(false)
    const [animation, setAnimation] = useState(false)

    //Scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    const handleScroll = (event) => {
        let bodyRect = document.body.getBoundingClientRect();
        let top = (bodyRect.top) * (-1);
        let height = event.path[1].innerHeight

        if (top >= height - 100) {
            setHeader(true)
            setAnimation(true)

        }
        else {
            setHeader(false)
        }
    }

    return (
        <>
            <Suspense fallback={<Loader>
                <div className="pai-loader">
                    <div className="flex-center white-loading">
                        <img src={LogoLight} alt="evoup-logo-loader" />
                        <span className="animated-background"></span>
                    </div>
                </div>
            </Loader>}>
                <Global />
                <Default >
                    <Header change={changeHeader} />
                    <Section1 />
                    <Section2 animation={animation} />
                    <Section3 />
                    <Section4 />
                    <Section6 />
                    <Section8 />
                </Default>
            </Suspense>
        </>
    )
}

export default Home;