"use client";
import { useState } from 'react';
import './page.css';
import { useRouter } from 'next/navigation';

export default function JayAdmin(){

    const [name,setName]=useState(" ");
    const [password,setPassword]=useState(" ");
    const router=useRouter();

    const checking=(e)=>{
      e.preventDefault();
      if((name==="Threadsymphony7") && (password==="J@¥tπr€@d$¥mphony")){
        console.log("login")
        router.push("/uploadImage");
      }
      else{
        alert("The information you put is not correct please check again");
      }
    }
    return(

        <>

    <div class="container">
      <div class="card">
        <div class="card_title">
            <br/>
          <h1>Thread Symphony</h1>
          <br/>
        </div>
        <div class="form">
        <form action="/register" method="post">
          <input type="text" name="username" id="username" placeholder="UserName" onChange={(e)=>setName(e.target.value)}/>
          <br/>
          <input type="password" name="password" placeholder="Password" id="password" onChange={(e)=>setPassword(e.target.value)}/>
          <br/><br/><br/>
          <button onClick={checking}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
        
        </>
       
       
       
    )
}