"use client";
import Link from 'next/link'
import './page1.css'
import Image from 'next/image'
import {  useState } from 'react';
export default function Contact(){
    let [name,setName]=useState();
    let [email,setEmail]=useState();
    let [message,setMessage]=useState();

    async function register(e) {




        let feedbackdata=JSON.stringify({name,email,message});


        if((name=="") || (email=="") || (message=="") ) {alert("enter all the fields please");}

        else{

            try{

                let datas=await fetch("/feedbackuser",{
                    method:"post",
                    body:feedbackdata
                });

                let res=await datas.json();
                if(res.success){
                    alert("Thank you for contact us.");
                }
                
            }catch(error){
                console.log(error.message)

            }

        }
        }
    return(
        <div id='contactMainForm'>
        <Link href="/" style={{textDecoration:"none",fontSize:"20px",color:"black"}}>Back</Link>
            {/* <div id="coming">
                <Image src="/coming1.jpeg"  width="300" height="300" id='image'/>
                <h1 id='comings' style={{color:"white"}}>Coming Soon</h1>
            </div> */}

            <div id='designParent'>
                <div id="design1"></div>
            </div>    

            <br/>

            <div id='contactMain'>
                <div id='contactImg'></div>
                    <div className="wrapper">
                            <form className="form">
                                <div className="pageTitle title">Contact Us </div>
                                <div className="secondaryTitle title">You can fill out this Form to reach us.</div>
                                <input type="text" className="name formEntry" placeholder="Name" onChange={(e)=>setName(e.target.value)} required/>
                                <input type="email" className="email formEntry" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required/>
                                <textarea className="message formEntry" placeholder="Message" onChange={(e)=>setMessage(e.target.value)} required></textarea>
                                {/* <input type="checkbox" className="termsConditions" value="Term"/> */}
                                {/* <label style={{color: "grey"}} htmlFor="terms"> I Accept the <span style={{color: "#0e3721"}}>Terms of Use</span> & <span style={{color: "#0e3721"}}>Privacy Policy</span>.</label><br/> */}
                                <button class="submit formEntry" onClick={register}>Submit</button>
                            </form>
                    </div>
                </div>
            



        </div>
    )
}