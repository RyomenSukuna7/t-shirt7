import Cards from "../cards";

export default async function DataSend() {
    const response = await fetch("https://threadsymphony7.vercel.app/DB");
    const data = await response.json();
  
    return <Cards res={data.data} />;
  }
  
