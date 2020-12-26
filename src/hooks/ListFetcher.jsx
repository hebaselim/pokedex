import { useEffect, useState } from "react";

import {getIdFromUrl} from "../utils/helpers";

//TODO: Remove offset if not used

export const useListFetcher = (api) => {
  const [status, setStatus] = useState("LOADING");
  const [data, setData] = useState({});
  const [error, setError] = useState();
  
  useEffect(() => {
    const key = getIdFromUrl(api);
    let unmounted = false;
    
    if(!localStorage.getItem(key)){
      fetch(api)
        .then((response) => response.json())
        .then((response) => {
          if (!unmounted) {
            setData(response);
            localStorage.setItem(key,JSON.stringify(response))
            setStatus("LOADED");
          }
        })
        .catch((error) => {
          setError(error);
          setStatus("ERROR");
        })
      }else{
        setData(JSON.parse(localStorage.getItem(key)))
        setStatus("LOADED");
      };
    }, [api]);
  return { data, status, error };
};


export default useListFetcher;
