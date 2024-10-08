import CardGamePad from "../GamePad/page";

export default async function PhoneGlassCaseDataSend() {
    const response = await fetch("https://threadsymphony7.vercel.app/DB");
    const data = await response.json();

    return <CardGamePad res={data.data}/>

}
