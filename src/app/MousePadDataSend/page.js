import CardMousePad from "../MousePad/page";

export default async function PhoneGlassCaseDataSend() {
    const response = await fetch("https://threadsymphony7.vercel.app/DB");
    const data = await response.json();

    return <CardMousePad res={data.data}/>

}
