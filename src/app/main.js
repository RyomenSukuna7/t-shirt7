"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import './page.css'
import { useRouter } from "next/navigation"
import Link from "next/link"


export default function Main(){

    let route=useRouter();

    useGSAP(()=>{
        let tm=gsap.timeline();
        tm.from("nav ul li",{
            y:-100,
            opacity:0,
            duration:2,
            stagger:0.1
        })

        tm.from("h1",{
            y:-100,
            opacity:0,
            duration:2,
            stagger:0.3
        })
    })
    return(

        <>
            <nav>
                <ul id="menu">
                    <li className="menus">Home</li>
                    {/* <li className="menus"><Link href="./aboutUs" style={{color:"white",textDecoration:"none"}}>About</Link></li> */}
                    <li className="menus"><Link href="./contact" style={{color:"white",textDecoration:"none"}}>Contact</Link></li>
                    <li className="menus"><Link href="./login" style={{color:"white",textDecoration:"none"}}>Login</Link></li>
                </ul>
            </nav>

            <h1 className="same1">Thread Symphony</h1>
            <h1 id="h11"><button id="firstButton" onClick={()=>route.push("/t_shirtData")}>click</button></h1>
        
        </>
    )
}