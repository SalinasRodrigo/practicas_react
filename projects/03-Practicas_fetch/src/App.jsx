import { useEffect, useState } from "react";
import "./App.css";

//const CAT_IMAGE_API = `https://cataas.com/cat/says/`
//hello?&json=true
const CAT_RANDOM_FACT_END_POINT = `https://catfact.ninja/fact`;
const URL_PREFIC = "https://cataas.com/";

function App() {
  const [fact, setFact] = useState("");
  const [url, setUrl] = useState();

  useEffect(() => {
    fetch(CAT_RANDOM_FACT_END_POINT)
      .then((response) => response.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      });
  }, []);

  useEffect(() => {
    const palabras = fact.split(" ", 3).join(" ");
    fetch(`https://cataas.com/cat/says/${palabras}?&json=true`)
      .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        setUrl(url);
      });
  }, [fact]);

  return (
    <main>
      {fact && <p>{fact}</p>}
      <img src={`${URL_PREFIC}${url}`} alt={`cat image ${fact}`} />
    </main>
  );
}

export default App;
