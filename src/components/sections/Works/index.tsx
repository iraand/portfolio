import './index.scss'
import { useRef, useLayoutEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Adds from './Adds'
import WorksWord from './WorksWord'

const RichMediaAdds = () => {    
    const container = useRef(null);

    useLayoutEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }
        
        const st2 = ScrollTrigger.create({
            trigger: container.current,
            start: "top top",
            scrub: true
        })


    return () => {
        st2.kill();
    };

    }, []);

    useLayoutEffect(() => {
        ScrollTrigger.refresh();
    })

    return (
        <section className="works"> 
            <div className="works__wrapper" ref={container}> 
                <WorksWord />  
                <Adds />               
            </div>  
        </section>
    )
}

export default RichMediaAdds


