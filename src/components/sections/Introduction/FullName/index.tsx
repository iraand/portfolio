import { useState, useLayoutEffect, useRef } from 'react'
import './index.scss'
import gsap from "gsap";
import useGsapContext from '../../../../hooks/useGsapContext'

const FullName: React.FC = () => {
    const name = 'Ira'
    const surname = 'Andaral'
    const [letterClass, setLetterClass] = useState('text-animate')

    const refConteiner = useRef<HTMLHeadingElement>(null)
    const refPosition = useRef<HTMLHeadingElement>(null)

    const gsapContext = useGsapContext(refConteiner);

    useLayoutEffect(() => {
        gsapContext.add(() => {
            gsap.fromTo(".intro__text", 
            {
                scale:0,
                opacity:0
            },
            {
                scale:1,
                opacity:1,
                stagger: 0.1,
                ease: "elastic.out(1.1, 0.9)",
                delay: 4.4
                });
        });
        return () => gsapContext.revert();
    }, [gsapContext]);


    useLayoutEffect(() => {

        gsap.timeline()
            .to(refConteiner.current,
                {
                    duration: 1,
                    opacity: 1,
                    delay: 4.4
                })

            .to(refPosition.current,
                {
                    opacity: 1,
                    duration: 1,
                    delay: -0.5
                })

    }, [])

    useLayoutEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    }, [])

    const splitName = name.split('').map((letter, i) =>
    (
        <div 
            key={letter+i+0}
            className={`${letterClass} _${i + 10}  intro__text`}
        > {letter}
        </div>
    ))
    const splitSurname = surname.split('').map((letter, i) =>
    (
        <div
            key={letter+i}
            className={`${letterClass} _${i + 20}  intro__text`}
        > {letter}
        </div>
    ))

    return (
        <div>
            <div className="intro__text-wrapper" ref={refConteiner}>
                <span className='intro__name'>{splitName}</span>
                <span className='intro__surname'>{splitSurname}</span>
            </div>
                <div
                    ref={refPosition}
                    className='intro__position'
                >
                    Digital Designer & Front-&#65279;end&nbsp;Developer
                </div>
        </div>

    )
}

export default FullName
