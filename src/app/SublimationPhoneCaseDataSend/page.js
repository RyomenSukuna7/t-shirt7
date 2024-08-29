import CardSublimationPhoneCase from "../SublimationPhoneCase/page";

export default async function SublimationPhoneCaseDataSend() {
    const response = await fetch("http://localhost:3000/DB");
    const data = await response.json();

    return <CardSublimationPhoneCase res={data.data}/>

}