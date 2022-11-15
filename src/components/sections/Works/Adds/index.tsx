import './index.scss'
import { useRef, useLayoutEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Desktop from '../../../../assets/images/works/desktop1.png'
import Desktop1 from '../../../../assets/images/works/desktop7.png'
import Desktop2 from '../../../../assets/images/works/desktop6.png'
import Desktop3 from '../../../../assets/images/works/desktop2.png'
import Desktop4 from '../../../../assets/images/works/desktop4.png'
import Desktop5 from '../../../../assets/images/works/desktop5.png'
import Desktop6 from '../../../../assets/images/works/desktop3.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons'

import Navigation from './Navigation'
import useGsapContext from '../../../../hooks/useGsapContext'

const Adds = () => {    
    const container = useRef(null);
    const images = useRef(null);
    const gsapContext = useGsapContext(container);
    const timeline1 = gsap.timeline({ paused:true });


    useLayoutEffect(() => {
        const images = document.querySelector('.works__image-desktop');
        const demoLinks = document.querySelector('.works__demos');
        const close = document.querySelector('.button__close');
       
        images?.addEventListener('click', (event) => {
            gsap.to(demoLinks, { opacity:1, yPercent:0 })    
        });

        close?.addEventListener('click', (event) => {
            gsap.to(demoLinks, { opacity:0, yPercent:20 })    
        });

    })    

    useLayoutEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        gsapContext.add(() => {
            const images = document.querySelectorAll('.works__image-demo');
            const links = document.querySelectorAll('.demos__links');
            const navs = document.querySelectorAll('.nav');

            timeline1                 
                .to([images[0]], {opacity:1,
                    onStart: () => {
                        navs[0].classList.add('activeNav');
                        navs[5].classList.remove('activeNav');
                        links[0].classList.add('activeLinks');
                        links[5].classList.remove('activeLinks');                        
                    }
                })
                .set([images[1], images[2], images[3], images[4], images[5]], {opacity:0})
                .to([images[1]], {opacity:1, delay:1,
                    onStart: () => {
                        navs[1].classList.add('activeNav');
                        navs[0].classList.remove('activeNav');
                        links[1].classList.add('activeLinks');
                        links[0].classList.remove('activeLinks')                        
                    }
                })
                .set([images[0], images[2], images[3], images[4], images[5]], {opacity:0})
                .to([images[2]], {opacity:1, delay:1,
                    onStart: () => {
                        navs[2].classList.add('activeNav'); 
                        navs[1].classList.remove('activeNav');
                        links[2].classList.add('activeLinks'); 
                        links[1].classList.remove('activeLinks')                        
                    }
                })
                .set([images[0], images[1], images[3], images[4], images[5]], {opacity:0})
                .to([images[3]], {opacity:1, delay:1,
                    onStart: () => {
                        navs[3].classList.add('activeNav');
                        navs[2].classList.remove('activeNav');
                        links[3].classList.add('activeLinks');
                        links[2].classList.remove('activeLinks');                        
                    }
                })
                .set([images[0], images[1], images[2], images[4], images[5]], {opacity:0})
                .to([images[4]], {opacity:1, delay:1,
                    onStart: () => {
                        navs[4].classList.add('activeNav');
                        navs[3].classList.remove('activeNav');
                        links[4].classList.add('activeLinks');
                        links[3].classList.remove('activeLinks')                        
                    }
                })
                .set([images[0], images[1], images[2], images[3], images[5]], {opacity:0})
                .to([images[5]], {opacity:1, delay:1,
                    onStart: () => {
                        navs[5].classList.add('activeNav'); 
                        navs[4].classList.remove('activeNav');
                        links[5].classList.add('activeLinks'); 
                        links[4].classList.remove('activeLinks')                        
                    }
                })
                .to([images[0], images[1], images[2], images[3], images[4]], {duration:0.3, opacity:0})

                
            const st1 = ScrollTrigger.create({
                animation: timeline1,
                toggleActions: "play none none none", 
                trigger: container.current,
                onEnterBack: () => timeline1.play(0),
                start: "top top"
            })

            return () =>  st1.kill();
        });

        return () => gsapContext.revert();

    }, [gsapContext, timeline1]);


    useLayoutEffect(() => {
        const timeline2 = gsap.timeline({ paused:true })
            .to(images.current, {yPercent: 0, ease: 'none'});

        const st2 = ScrollTrigger.create({
            animation: timeline2,
            toggleActions: "play none none reverse", 
            trigger: container.current,
            //pin: true,
            start: "top 10%",
            scrub: true
        })


    return () => {
        st2.kill();
    };

    }, []);

    useLayoutEffect(() => {
        ScrollTrigger.refresh();
    })


    const numDemo = (value:number) => {  
        const images = document.querySelectorAll('.works__image-demo');

        timeline1.pause();
        gsap.to([images[0], images[1], images[2], images[3], images[4], images[5]], { opacity:0, duration:0.5 })    
        document.querySelector('.activeImage')?.classList.remove('activeImage');
        document.querySelector('.activeLinks')?.classList.remove('activeLinks');
         
        document.querySelector(`[data-value="img${value}"]`)?.classList.add('activeImage');
        document.querySelector(`[data-value="links${value}"]`)?.classList.add('activeLinks');

        return value;
    }

    return (
        <div className='works__container' ref={container}> 
            <p className='works__title'>Impactful Rich Media Ads</p> 
                <p className='stack'>
                    <FontAwesomeIcon icon={faCheck} className="icon-check"/>&#65279;JS (JQuary)
                    <FontAwesomeIcon icon={faCheck} className="icon-check"/>&#65279;GSAP
                    <FontAwesomeIcon icon={faCheck} className="icon-check"/>&#65279;HTML
                    <FontAwesomeIcon icon={faCheck} className="icon-check"/>&#65279;CSS    
                </p>             
            
            <div className='images__container' ref={images}>             
                <img className="works__image works__image-desktop" src={Desktop} alt='Rich Media&nbsp;Ads'/>
                <img className="works__image works__image-demo" src={Desktop1} data-value={'img' + 1}  alt='Rich Media Ads'/>
                <img className="works__image works__image-demo" src={Desktop2} data-value={'img' + 2}  alt='Rich Media Ads'/>
                <img className="works__image works__image-demo" src={Desktop3} data-value={'img' + 3}  alt='Rich Media Ads'/> 
                <img className="works__image works__image-demo" src={Desktop4} data-value={'img' + 4}  alt='Rich Media Ads'/>
                <img className="works__image works__image-demo" src={Desktop5} data-value={'img' + 5}  alt='Rich Media Ads'/>
                <img className="works__image works__image-demo" src={Desktop6} data-value={'img' + 6}  alt='Rich Media Ads'/>               
                <Navigation numDemos={6} className='nav' numDemo={numDemo} />                                        
            </div>
            <div className='works__demos'>
                <p>Demos
                    <span className='ads'>Please, turn off Adblock :)</span>
                </p>
                <div className='demos__links__conteiner'>
                    
                    <div className='demos__links activeLinks' data-value={'links' + 1} >
                        <a href="https://insk.in/13198n" target="_blank" rel="noreferrer">Desktop</a>
                        <a href="https://insk.in/q99wvj" target="_blank" rel="noreferrer">Tablet</a>
                        <a href="https://insk.in/p65d81" target="_blank" rel="noreferrer">Smartphone</a>
                    </div> 
                    <div className='demos__links' data-value={'links' + 2} >
                        <a href="https://insk.in/qv1qx6" target="_blank" rel="noreferrer">Desktop</a>
                        <a href="https://insk.in/604129" target="_blank" rel="noreferrer">Tablet</a>
                        <a href="https://insk.in/136o91" target="_blank" rel="noreferrer">Smartphone</a>
                    </div> 
                    <div className='demos__links' data-value={'links' + 3} >
                        <a href="https://insk.in/5tmg75" target="_blank" rel="noreferrer">Desktop</a>
                        <a href="https://insk.in/21ya98" target="_blank" rel="noreferrer">Tablet</a>
                        <a href="https://insk.in/383311" target="_blank" rel="noreferrer">Smartphone</a>
                    </div>
                    <div className='demos__links' data-value={'links' + 4} >
                        <a href="https://insk.in/i8ul8m" target="_blank" rel="noreferrer">Desktop</a>
                        <a href="https://insk.in/j9dp4s" target="_blank" rel="noreferrer">Smartphone</a>
                    </div>
                    <div className='demos__links' data-value={'links' + 5} >
                        <a href="https://insk.in/851j4h" target="_blank" rel="noreferrer">Desktop</a>
                        <a href="https://insk.in/15oql9" target="_blank" rel="noreferrer">Smartphone</a>
                    </div>
                    <div className='demos__links' data-value={'links' + 6} >
                        <a href="https://insk.in/68f10m" target="_blank" rel="noreferrer">Desktop</a>
                        <a href="https://insk.in/tyi29y" target="_blank" rel="noreferrer">Smartphone</a>
                    </div>
                    <div className='button__close'><FontAwesomeIcon icon={faClose} className="icon__close"/></div>                    
                </div> 
            </div>
        </div>
    )
}

export default Adds


