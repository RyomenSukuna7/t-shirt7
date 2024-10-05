import Link from 'next/link'
import './page1.css'
import Image from 'next/image'
export default function Contact(){
    return(
        <>
        <Link href="/" style={{textDecoration:"none",fontSize:"20px",color:"white"}}>Back</Link>
            <div id="coming">
                <Image src="/coming1.jpeg"  width="300" height="300" id='image'/>
                <h1 id='comings' style={{color:"white"}}>Coming Soon</h1>
            </div>
        </>
    )
}