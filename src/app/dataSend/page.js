import Cards from "../cards";

export default async function DataSend() {
    const response = await fetch("http://localhost:3000/DB");
    const data = await response.json();
  
    return <Cards res={data.data} />;
  }
  