import { NextResponse } from "next/server";
import { writeFile } from 'fs/promises';
import mongoose from "mongoose";

if (!mongoose.connection.readyState) {
    mongoose.connect(process.env.DBS, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log("Connected to MongoDB"))
      .catch((error) => console.error("connection error:", error));
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
            return NextResponse.json({ "error": "No file uploaded" });
        }

        const path = `./public/${file.name}`;

        const sendDatas = new product({ ImageName: file.name });
        await sendDatas.save();

        process.nextTick(async () => {
            try {
                const fileBuffer = Buffer.from(await file.arrayBuffer());
                await writeFile(path, fileBuffer);
            } catch (err) {
                console.error("Error writing file:", err);
            }
        });

        
        return NextResponse.json({ success: true, message: "Upload initiated" });
    } catch (error) {
        console.error("POST error:", error);
        return NextResponse.json({ success: false, error: error.message });
    }
}

export async function GET(req) {
    try {
        const product = mongoose.models.image || mongoose.model("image", schema);
        const dataCome = await product.find({});

        return NextResponse.json({ data: dataCome });
    } catch (error) {
        console.error("GET error:", error);
        return NextResponse.json({ success: false, error: error.message });
    }
}
