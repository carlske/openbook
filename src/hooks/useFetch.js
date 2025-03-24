import { useState } from "react";
import { Utils } from "../utils";

 function useFetch (url){

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function  fetchData (){  
        setLoading(true)
        try {
            const response = await fetch(`${url}`);
            const data = await response.json();
            
            setData(Utils.getDocs(data))
        } catch (error) {
            setError(error)
        }finally{
            setLoading(false)
        }
    }


    async function  fetchDataAndStorage (cacheName =  "", params = ""){       

        const controller = new AbortController();
        const cachedData = localStorage.getItem(cacheName);
 
        setLoading(true)        

        if (cachedData) {
          setData(JSON.parse(cachedData));
          setLoading(false)
        }
        
        if(!cachedData){
            try {
                const response = await fetch(`${url}${params}`,{signal: controller.signal});
                const data = await response.json();
                console.log(data)
                setData(data)
                localStorage.setItem(cacheName,JSON.stringify(data))
            } catch (error) {
                console.error(error)
                setError(error)
            }finally{
                setLoading(false)
            }
        }
    }

    return { data, loading, error, fetchData, fetchDataAndStorage }; 
}

export default useFetch;
