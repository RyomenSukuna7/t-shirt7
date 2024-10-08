import { NextResponse } from "next/server";
import { writeFile } from 'fs/promises';
import mongoose from "mongoose";
import { type } from "os";


let isConnected = false;
async function connectToDatabase() {
    if (isConnected) return;

    await mongoose.connect(process.env.DBS, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    
    isConnected = true;
}


const ImageSchema = new mongoose.Schema({
    ImageName: {
        type: String,
    }
});


const ImageModel = mongoose.models.image || mongoose.model("image", ImageSchema);


export async function POST(req) {
    await connectToDatabase();

    const data = await req.formData();
    const file = data.get("file");

    if (!file) {
        return NextResponse.json({ error: "Your file was not uploaded" });
    }

    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const filePath = `./public/${file.name}`;

    
    const imageDocument = new ImageModel({ ImageName: file.name });
    const result = await imageDocument.save();

    await writeFile(filePath, fileBuffer);

    return NextResponse.json({ success: "true" });
}


export async function GET(req) {
    await connectToDatabase();

    
    const images = await ImageModel.find({}).select("ImageName").exec();

    return NextResponse.json({ data: images });
}
