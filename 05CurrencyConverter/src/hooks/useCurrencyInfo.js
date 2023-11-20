import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch currency data");
        }

        const result = await response.json();

        // Check if the data for the selected currency exists in the response
        if (result && result[currency]) {
          setData(result[currency]);
        } else {
          throw new Error("Currency data not found");
        }
      } catch (error) {
        console.error("Error fetching currency data:", error.message);
      }
    };

    fetchData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;


/*

import { useEffect, useState} from "react";

function useCurrencyInfo(currency){

    const [data,setdata]=useState({}) // in case the data not come in these atlist loop will apply on empty object so our app not crash


    //call api
    //i  can use featch but i need to call these api when these hook use

    //so we use useEffect  (callback()={},[dependancy array])
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=> setdata(res[currency]))//if we store data into regular varialble data cant reflect so we need useState
        console.log(data);
    },[currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;

*/