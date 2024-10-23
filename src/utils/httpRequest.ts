import IBorrower from "../models/Iborrower.js";

const url1 = "https://jsonplaceholder.typicode.com/users";


async function getData(url1: string): Promise<IBorrower[]> {
  
  try {
    const response = await fetch(url1);    

    if (!response.ok ) {
      throw new Error(`HTTP error! status: ${response.status}`);   }
   
    const data = await response.json();    
    return data;
  } 
  catch (error) {
    const errorMsg = error instanceof Error ? error.message : "Valami gáz van";
    console.log(errorMsg);
    return [];
  }
  
}
export const clients =  await getData(url1);