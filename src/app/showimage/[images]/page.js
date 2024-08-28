"use client";

import { useSelector } from "react-redux";
import Image from "next/image";

export default function ShowImage({params}){

    const take=useSelector((data)=>data.user);
    return(
        <>


            <button onClick={()=>window.history.back()}>Back</button>
            <h3 style={{color:"red",display:"flex",justifyContent:"center"}}>The Price are not fix. They depends on your design</h3>
            {take.map((n,index)=>(
               
                params.images==n.nid?(
                    
                <div style={{display:"flex",justifyContent:"center"}} key={index}>
                   <Image src={`/${n.image}`} alt="some error come" width="400" height="500"></Image>
                </div>
                ):(
                    null
                )
            ))}
        </>
    )
}