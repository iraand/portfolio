import './index.scss'
import { useRef, useLayoutEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Banner1 from '../../../assets/images/works/banner1.png'
import Banner2 from '../../../assets/images/works/banner2.png'
import Banner3 from '../../../assets/images/works/banner3.png'
import Banner4 from '../../../assets/images/works/banner4.png'
import Banner5 from '../../../assets/images/works/banner5.png'

import useGsapContext from '../../../hooks/useGsapContext'

const Banners = () => {    
    const container = useRef(null);
    const banners = useRef(null);
    const gsapContext = useGsapContext(banners);

    useLayoutEffect(() => {
        const timeline2 = gsap.timeline({ paused:true })
        gsapContext.add(() => {
            timeline2            
                .to(".banner",
                    {
                        rotationY:15,
                        rotationX:15,
                        yoyo:true,
                        repeat:1,
                        ease: 'none',
                        duration:2,
                        stagger:0.2
                    });
        })     

        const st2 = ScrollTrigger.create({
            animation: timeline2,
            toggleActions: "play none none reverse", 
            trigger: container.current,
            //pin: true,
            start: "top top"
        })


    return () => {
        st2.kill();
    };

    }, [gsapContext]);

    useLayoutEffect(() => {
        ScrollTrigger.refresh();
    })

    return (
        <section className="banners__section"> 
            <div className="banners__wrapper" ref={container}> 
                <p className='works__title'>Ads Banners</p> 
                <p className='stack'>
                    <FontAwesomeIcon icon={faCheck} className="icon-check"/>GSAP
                    <FontAwesomeIcon icon={faCheck} className="icon-check"/>HTML
                    <FontAwesomeIcon icon={faCheck} className="icon-check"/>CSS  
                </p> 
                
                
                <div className='banners'  ref={banners}>
                    <div>
                        <a className='demo__link' href="https://demo.mediamenu.ee/idium/2017-11_parketteksperten/html/" target="_blank" rel="noreferrer">
                            <img className='banner' src={Banner1} alt="Ad Banner"/> 
                        </a>
                        <a className='demo__link' href="https://demo.mediamenu.ee/vendemore/banners/2018-01_Dassault/Miele/html/" target="_blank" rel="noreferrer">
                            <img className='banner' src={Banner5} alt="Ad Banner"/> 
                        </a>                     
                        
                    </div>
                    <div>
                        <a className='demo__link' href="https://demo.mediamenu.ee/vendemore/banners/2017-11_Jeeves/html/" target="_blank" rel="noreferrer">
                            <img className='banner' src={Banner4} alt="Ad Banner"/> 
                        </a>
                        <a className='demo__link' href="https://demo.mediamenu.ee/idium/2017-12_Rovent/html/" target="_blank" rel="noreferrer">
                            <img className='banner' src={Banner2} alt="Ad Banner"/> 
                        </a>
                          <a className='demo__link' href="https://demo.mediamenu.ee/optimal/optimal/2018-01_Krogsveen/set1/html/" target="_blank" rel="noreferrer">
                            <img className='banner' src={Banner3} alt="Ad Banner"/> 
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banners

