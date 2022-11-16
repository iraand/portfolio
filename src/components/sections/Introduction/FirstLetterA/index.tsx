import './index.scss'
import { useLayoutEffect, useRef } from 'react'
import gsap from "gsap";
import gsap from "gsap/DrawSVGPlugin";

const FirstLetterA = () => {
  const refConteiner = useRef<HTMLHeadingElement>(null)
  const refLetter = useRef<SVGPathElement>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    gsap
      .timeline()
      .to(refConteiner.current, 
        {
          duration: 1,
          opacity: 1
        })
      .fromTo(refLetter.current,
        {
          drawSVG: '20% 20%',
        },       
        {
        drawSVG: "100%",
        duration: 2
      })
      .to(refConteiner.current, {
        scale:6,
        opacity:0,
        duration: 1.3
      })
  }, [])


  return (
    <div className="letter-conteiner" ref={refConteiner}>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
        <g>
          <path ref={refLetter} className='letter' d="M19.07,1.08H31l16.44,47.84H36.12l-3.24-10.71H17.13l-3.24,10.71H2.56L19.07,1.08z M30.57,30.59L25,12.2
          l-5.57,18.39H30.57z"/>
        </g>
      </svg>
    </div>
  )
}

export default FirstLetterA
