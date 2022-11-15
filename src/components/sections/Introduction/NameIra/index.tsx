import './index.scss'
import { useLayoutEffect, useRef } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const MorphSVGPlugin = require ('../../../../utils/MorphSVGPlugin.min.js')
const DURATION = 0.5;

const NameIra = () => {
    const refConteiner = useRef(null)
    const refSvg = useRef(null)
    const pathI = useRef<SVGPathElement>(null)
    const pathR = useRef<SVGPathElement>(null)
    const pathA = useRef<SVGPathElement>(null)
    
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const moveSvg = (e:any) => {
  
            gsap.to(refSvg.current, {
                duration:1,
                x:function(i){return (e.clientX/window.innerWidth)/(i+1)*80},
                y:function(i){return i*-20*(e.clientY/window.innerHeight)},
                rotation:Math.random()*0.1,
                overwrite:'auto'
            });
        }
        gsap.to(refConteiner.current, {
            scrollTrigger: {
                trigger: refConteiner.current,
                onUpdate: () => {window.addEventListener('mousemove', moveSvg)},
                onLeave: () => {window.removeEventListener('mousemove', moveSvg)},
            }
        }); 
        gsap.to(refConteiner.current, {
            rotate:20,
            opacity:0,
            scale:1.5,
            duration: 1,
            scrollTrigger: {
                trigger: refConteiner.current,
                start: "center center",
                end: "bottom 10%",
                scrub: true
            }
        });   

        return () => {
        }

    }, []);

    useLayoutEffect(() => {

        gsap.registerPlugin(MorphSVGPlugin);

        gsap.to(refSvg.current, { scale: 2.7, duration: 3.9, delay: 3, opacity: 0.3, yPercent:-8 });

        gsap
            .timeline()
            .fromTo(pathI.current,
                {
                    opacity: 0,
                    scale: 0,
                    immediateRender: false
                },
                {
                    duration: DURATION,
                    opacity: 1,
                    delay: 3,
                    scale: 1,
                    immediateRender: false
                })

            .to(pathI.current,
                {
                    morphSVG: "#letterR",
                    duration: DURATION,
                    opacity: 1,
                    immediateRender: false
                })
            .to(pathI.current,
                {
                    morphSVG: "#letterA",
                    duration: DURATION,
                    opacity: 1,
                    immediateRender: false
                })


        return () => {


        };
    }, []);

    return (
        <div className="letters-conteiner" ref={refConteiner}>
            <svg ref={refSvg} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                <g>
                    <path ref={pathI}
                        className='letter letter--opacity'
                        id='letterI'
                        d="M20.18,10.9V1.48h10.4v9.43H20.18z M20.18,48.93V14.8h10.4v34.12H20.18z"
                    />

                    <path ref={pathR}
                        className='letter letter--opacity'
                        id='letterR'
                        d="M37.61,24.78c-2.51,0-4.79,0.4-6.83,1.2c-2.04,0.8-3.51,1.98-4.42,3.54V50h-10.4V16.27h9.55v6.5
c1.17-2.3,2.69-4.1,4.55-5.4c1.86-1.3,3.81-1.97,5.85-2.02c0.48,0,0.83,0,1.07,0c0.24,0,0.44,0.02,0.62,0.06V24.78z"/>

                    <path 
                        ref={pathA}
                        id='letterA'
                        className='letter letter--opacity'
                        d="M19.07,1.08H31l16.44,47.84H36.12l-3.24-10.71H17.13l-3.24,10.71H2.56L19.07,1.08z M30.57,30.59L25,12.2
          l-5.57,18.39H30.57z"/>
                </g>
            </svg>
        </div>
    )
}

export default NameIra