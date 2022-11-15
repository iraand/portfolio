import './index.scss'
import { useRef, useLayoutEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Email1 from '../../../assets/images/works/email1.png'
import Email2 from '../../../assets/images/works/email2.png'
import useGsapContext from '../../../hooks/useGsapContext'

const Emails = () => {    
    const container = useRef(null);
    const emails = useRef(null);
    const gsapContext = useGsapContext(emails);

    useLayoutEffect(() => {
        const timeline2 = gsap.timeline({ paused:true })
        gsapContext.add(() => {
            timeline2            
                .to(".email",
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
            //scrub: true
        })


    return () => {
        st2.kill();
    };

    }, [gsapContext]);

    useLayoutEffect(() => {
        ScrollTrigger.refresh();
    })

    return (
        <section className="email__section"> 
            <div className="email__wrapper" ref={container}> 
                <p className='works__title'>Email Tamplates</p>  
                <p className='stack'>
                    <FontAwesomeIcon icon={faCheck} className="icon-check"/>HTML
                    <FontAwesomeIcon icon={faCheck} className="icon-check"/>CSS  
                </p> 
                <div className='emails' ref={emails}>           
                    <a href="http://demo.mediamenu.ee/reachad/2018-03_hummingbird/html/" target="_blank" rel="noreferrer">
                        <img className='email email1' src={Email1} alt="Email"/>
                    </a> 
                    <a href="https://demo.mediamenu.ee/reachad/2017-11_wetten/html/" target="_blank" rel="noreferrer">
                        <img className='email email2' src={Email2} alt="Email"/>
                    </a> 
                </div>                         
            </div>
        </section>
    )
}

export default Emails

