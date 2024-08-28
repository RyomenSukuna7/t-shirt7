"use client";
import Link from "next/link";
import { useTypewriter } from "react-simple-typewriter";
import Partical from "./app/partical";


export default function Message() {

  const [typeEffect]=useTypewriter({
    words:[" Do you like any of these designs? If so, DM us."],
    loop:{},
    typeSpeed:60,
    deleteSpeed:30
  })


  return (
    <>
    <Partical/>
      <Link
        href="#"
        style={{ display: "flex", justifyContent: "center", backgroundColor: "black", color: "white", padding: "10px 10px", textDecoration: "none",position:"absolute" ,left:"10%"}}
      >
        <span>
        DM your custom design . <span style={{color:"red"}}>{typeEffect}</span>
        </span>
      </Link>
      <Link href="https://www.instagram.com/threadsymphony7/" style={{ display: "flex", justifyContent: "center", backgroundColor: "transparent", color: "white", padding: "10px 10px",position:"absolute",top:"20%" ,left:"20%"}}>
        Click to order
      </Link>
      <br/><br/><br/><br/><br/><br/>
      <marquee><h3 style={{ color: "red" }}>The prices are not fixed. They depend on your design.</h3></marquee>
    </>
  );
}