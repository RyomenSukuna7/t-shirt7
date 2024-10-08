import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req){
    let register=await req.json();


    try{

        await mongoose.connect(process.env.REGISTER)

    }catch(errors){
        console.log(error.message)
    }


    let stores=new mongoose.Schema({
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true
        },
        message:{
            type:String,
            require:true
        }
    })


    let modelss=mongoose.models.t___shirtRegister || mongoose.model("t___shirtRegister",stores);

    let send=new modelss(register);
    await send.save();

    return NextResponse.json({"success":true})
}