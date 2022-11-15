import './index.scss'
import { useLayoutEffect, useRef } from 'react'
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Cube = () => {
    const dragger = useRef(null)
    const cube = useRef(null)
    
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.set(".dragger__container", { y: '-10vh', x: '50vw'})
        
        gsap.to(".dragger__container", {
            rotate:0,
            y:0,
            x:"5vw",
            duration: 5,
            scrollTrigger: {
                trigger: cube.current,
                start: "top 90%",
                end: "bottom 10%",
                scrub: true
            }
        });
    }, []);

    useLayoutEffect(() => {
        const timeline = gsap.timeline({ paused:true, defaults: { duration: 1, ease: 'none' } })
            .to(cube.current, { rotateX: 0,  rotateY: 0 })
            .to(cube.current, { rotateX: 30,  rotateY: -45 })
            .to(cube.current, { rotateX: 45,  rotateY: -90 })
            .to(cube.current, { rotateX:30, rotateY: -135})
            .to(cube.current, { rotateX: 45, rotateY: -170 })
            .to(cube.current, { rotateX: 0,  rotateY: -210})

        ScrollTrigger.create({
            animation: timeline,
            trigger: cube.current,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse", 
            scrub: true
        });
    })

    useLayoutEffect(() => {    
        let pos = { x:0, y:0 }
        gsap.registerPlugin(Draggable);

        gsap.timeline()
            .set(".face", { // apply transforms to each face of the cube
            rotateY: (i) => [0,90,180,270,0,0][i],
            rotateX: (i) => [0,0,0,0,90,-90][i],
            transformOrigin: "50% 50% -150px",
            z: 150,
            })
            .set(dragger.current, { opacity:0 }) // make the drag layer invisible
            .set(cube.current, { rotationX:10, rotationY: -35 }) // set initial cube position

        Draggable.create(dragger.current,{
        
            onDragStart:(e) => { 
                if (e.touches) {// on mobile, convert the touch x/y
                e.clientX = e.touches[0].clientX;
                e.clientY = e.touches[0].clientY;            
                }
                pos.x = Math.round(e.clientX);
                pos.y = Math.round(e.clientY);

            },
            
            onDrag:(e) => {
                if (e.touches) {// on mobile, convert the touch x/y
                e.clientX = e.touches[0].clientX;
                e.clientY = e.touches[0].clientY;            
                }
                

                let rotationY = gsap.getProperty(cube.current, 'rotationY');

                if (typeof(rotationY) === 'number') {
                    let ry = Math.abs(rotationY%360),
                        rxDir = (ry>90 && ry<270) ? '+=':'-='; // feels more intuitive to invert rotationX when cube is turned backwards
                    
                    gsap.to(cube.current, {
                    rotationX: rxDir + ( Math.round(e.clientY)-pos.y ),
                    rotationY: '+=' + ( (Math.round(e.clientX)-pos.x)%360 )
                    });

                    pos.x = Math.round(e.clientX);
                    pos.y = Math.round(e.clientY);
                }

            },
            
            onDragEnd:()=> { gsap.set(dragger.current, {x:0, y:0});} // reset drag layer
        })
    }, [])

    return (
        <>
            <div className ="dragger__container">
                <div id="cube" ref={cube}>
                    <div className="face">JavaScript</div>
                    <div className="face">React</div>
                    <div className="face">CSS</div>
                    <div className="face">HTML</div>
                    <div className="face">Photoshop</div>
                    <div className="face">Illustrator</div>
                </div>
            </div>
            <div id="dragger" ref={dragger}></div>
        </>
    )
}


export default Cube


