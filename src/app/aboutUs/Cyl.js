"use client";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
export default function Cyl(){
    let text=useTexture("/combine1.jpg");
    let cyl=useRef(null);
    useFrame((state,delta)=>{
        cyl.current.rotation.y+=delta
    })
    return(
        <>
           <group rotation={[0,1.4,0.5]}>
             <mesh ref={cyl}>
                    <cylinderGeometry   args={[1,1,1,30,30,true]}/>
                    <meshBasicMaterial transparent  map={text} side={THREE.DoubleSide}/>
                </mesh>
            </group>
        
        </>
    )
}