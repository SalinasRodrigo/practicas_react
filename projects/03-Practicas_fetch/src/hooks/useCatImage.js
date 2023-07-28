import { useState, useEffect } from "react";

const URL_PREFIC = "https://cataas.com/";

export const useCatImage = ({ fact }) => {
  const [url, setUrl] = useState();

  useEffect(() => {
    if (!fact) return;
    const palabras = fact.split(" ", 3).join(" ");
    fetch(`https://cataas.com/cat/says/${palabras}?&json=true`)
      .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        setUrl(url);
      });
  }, [fact]);

  return { url:`${URL_PREFIC}${url}` };
}