import CardSublimationPhoneCase from "../SublimationPhoneCase/page";

export default async function SublimationPhoneCaseDataSend() {
    const response = await fetch("https://threadsymphony7.vercel.app/DB");
    const data = await response.json();

    return <CardSublimationPhoneCase res={data.data}/>

}
