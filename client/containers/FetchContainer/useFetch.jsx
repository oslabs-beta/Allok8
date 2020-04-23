import { useState, useEffect } from "react";

function useFetch(url, options) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    getData();
  }, []);
  return { response, error };
}

export default useFetch;
