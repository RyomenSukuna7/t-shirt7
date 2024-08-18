import { NextResponse } from "next/server";
import { writeFile } from 'fs/promises';
import mongoose from "mongoose";

if (!mongoose.connection.readyState) {
    mongoose.connect(process.env.DBS);
}

const schema = new mongoose.Schema({
    ImageName: {
        type: String
    },
});

export async function POST(req) {
    try {
        const product = mongoose.models.image || mongoose.model("image", schema);
        const data = await req.formData();
        const file = data.get("file");

        if (!file) {
            return NextResponse.json({ "error": "Your file not uploaded" });
        }

        const datas = await file.arrayBuffer();
        const convert = Buffer.from(datas);
        const path = `./public/${file.name}`;

        const sendDatas = new product({ ImageName: file.name });
        const result = await sendDatas.save();

        await writeFile(path, convert);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: error.message });
    }
}

export async function GET(req) {
    try {
        const product = mongoose.models.image || mongoose.model("image", schema);
        const dataCome = await product.find({});

        return NextResponse.json({ data: dataCome });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: error.message });
    }
}
