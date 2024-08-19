"use client";
// import { useState } from 'react';
// import './page.css';
// import { useRouter } from 'next/navigation';

import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

// export default function JayAdmin(){

//     const [name,setName]=useState(" ");
//     const [password,setPassword]=useState(" ");
//     const router=useRouter();

//     const checking=(e)=>{
//       e.preventDefault();
//       if((name==="Threadsymphony7") && (password==="J@¥tπr€@d$¥mphony")){
//         console.log("login")
//         router.push("/uploadImage");
//       }
//       else{
//         alert("The information you put is not correct please check again");
//       }
//     }
//     return(

//         <>

//     <div class="container">
//       <div class="card">
//         <div class="card_title">
//             <br/>
//           <h1>Thread Symphony</h1>
//           <br/>
//         </div>
//         <div class="form">
//         <form action="/register" method="post">
//           <input type="text" name="username" id="username" placeholder="UserName" onChange={(e)=>setName(e.target.value)}/>
//           <br/>
//           <input type="password" name="password" placeholder="Password" id="password" onChange={(e)=>setPassword(e.target.value)}/>
//           <br/><br/><br/>
//           <button onClick={checking}>Sign Up</button>
//           </form>
//         </div>
//       </div>
//     </div>
        
//         </>
       
       
       
//     )
// }



export default function QR(){
  const [change,setchange]=useState();

  const data=`upi://pay?pa=nishantadvani724@okicici%26am=1%26tn=${change}`;
  const link=`https://chart.googleapis.com/chart?chs=200&cht=qr&chl=${data}`;
  return(
    <>

    <input type="number" onChange={(e)=>setchange(e.target.value)}></input>
    
      <QRCodeSVG value={link}></QRCodeSVG>
    
    </>
  )
}
