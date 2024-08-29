import CardMousePad from "../MousePad/page";

export default async function PhoneGlassCaseDataSend() {
    const response = await fetch("http://localhost:3000/DB");
    const data = await response.json();

    return <CardMousePad res={data.data}/>

}