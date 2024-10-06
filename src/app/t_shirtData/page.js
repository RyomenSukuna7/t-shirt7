import T_shirt from "../t_shirt/page";

export default async function DataSend() {
    const response = await fetch("https://threadsymphony7.vercel.app/DB");
    const data = await response.json();


   
  
    return <T_shirt res={data.data} />;
  }
  
