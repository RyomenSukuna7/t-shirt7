"use client";
import { Canvas } from "@react-three/fiber";
import './page2.css'
import { OrbitControls } from "@react-three/drei";
import Cyl from "./Cyl";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function AboutUs(){
    useGSAP(()=>{
        let tm=gsap.timeline();
        tm.from("#Main1 span",{
            y:200,
            opacity:0,
            duration:1,
            stagger:0.5
        })
    })
    return(
        <div id="Main1">
            <span className="d1">T</span>
            <span className="d1">h</span>
            <span className="d1">r</span>
            <span className="d1">e</span>
            <span className="d1">a</span>
            <span className="d1">d</span>
            &nbsp;
            <span className="d1">S</span>
            <span className="d1">y</span>
            <span className="d1">m</span>
            <span className="d1">p</span>
            <span className="d1">h</span>
            <span className="d1">o</span>
            <span className="d1">n</span>
            <span className="d1">y</span>
            <div id="aboutMain">
                <Canvas camera={{fov:35}}>
                    <OrbitControls/>
                    <ambientLight/>
                    <Cyl/>
                </Canvas>
               
            </div>
        </div>
    )
}