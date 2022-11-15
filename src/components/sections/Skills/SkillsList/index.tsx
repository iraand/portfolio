import './index.scss'
import { useLayoutEffect, useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useGsapContext from '../../../../hooks/useGsapContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const SkillsList = () => {
    const skillsList = useRef(null)    
    const gsapContext = useGsapContext(skillsList);

    useLayoutEffect(() => {
        const timeline = gsap.timeline({ paused:true, defaults: { ease: 'none' } })
            .fromTo(skillsList.current, {opacity:0}, {opacity:1, onStart: ()=> {timelinelist.play(0)}})

        const timelinelist = gsap.timeline({ paused:true, defaults: { duration: 0.5, ease: 'none' } })

        gsapContext.add(() => {
            timelinelist.fromTo('.skills__item',
                {
                    opacity:0,
                    xPercent:100,
                },
                {
                    opacity:1,
                    xPercent:0,
                    stagger: 0.1
                })
        });

        ScrollTrigger.create({
            animation: timeline,
            trigger: skillsList.current,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse", 
            scrub: true,
        });

        return () => gsapContext.revert();
        
    }, [gsapContext]);


    return (
        <ul className ="skills__list" ref={skillsList}>
            <li className="skills__item"><FontAwesomeIcon icon={faCheck} />Photoshop</li>
            <li className="skills__item"><FontAwesomeIcon icon={faCheck} /> Illustrator</li>
            <li className="skills__item"><FontAwesomeIcon icon={faCheck} /> InDesign</li>
            <li className="skills__item"><FontAwesomeIcon icon={faCheck} /> Figma</li> 
            <li className="skills__item"><FontAwesomeIcon icon={faCheck} /> HTML</li>  
            <li className="skills__item"><FontAwesomeIcon icon={faCheck} /> CSS</li>        
            <li className="skills__item"><FontAwesomeIcon icon={faCheck} />JavaScript</li>
            <li className="skills__item"><FontAwesomeIcon icon={faCheck} />GSAP</li>
            <li className="skills__item"><FontAwesomeIcon icon={faCheck} />React</li>
        </ul>
    )
}


export default SkillsList


