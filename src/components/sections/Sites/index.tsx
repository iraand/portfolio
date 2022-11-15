import './index.scss'
import { useRef, useLayoutEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Site2 from '../../../assets/images/works/site2.png'
import LP from '../../../assets/images/works/lp1.png'
import useGsapContext from '../../../hooks/useGsapContext'

const Sites = () => {    
    const container = useRef(null);
    const sites = useRef(null);
    const gsapContext = useGsapContext(sites);

    useLayoutEffect(() => {
        const timeline2 = gsap.timeline({ paused:true })
        gsapContext.add(() => {
            timeline2            
                .to(".site",
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
            start: "top top",
        })


    return () => {
        st2.kill();
    };

    }, [gsapContext]);

    useLayoutEffect(() => {
        ScrollTrigger.refresh();
    })

    return (
        <section className="sites__section"> 
            <div className="sites__wrapper" ref={container}> 
                <p className='works__title'>Web sites, Landing&nbsp;pages</p> 
                <p className='stack'>
                    <FontAwesomeIcon icon={faCheck} className="icon-check"/>&#65279;HTML
                    <FontAwesomeIcon icon={faCheck} className="icon-check"/>&#65279;CSS 
                    <FontAwesomeIcon icon={faCheck} className="icon-check"/>&#65279;Wordpress    
                </p>                              
                <div className='sites'  ref={sites}>                  
                    <img className='site site1' src={LP} alt="site"/>
                    <img className='site site2' src={Site2} alt="site"/>
                </div>
            </div>
        </section>
    )
}

export default Sites

