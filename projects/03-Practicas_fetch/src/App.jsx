import { useEffect, useState } from "react";
import "./App.css";
import { getRamdonFact } from "./services/facts";

//const CAT_IMAGE_API = `https://cataas.com/cat/says/`
//hello?&json=true
const URL_PREFIC = "https://cataas.com/";

function useCatImage({ fact }) {
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

  return { url };
}

function App() {
  const [fact, setFact] = useState();
  const { url } = useCatImage({ fact });

  useEffect(() => {
    getRamdonFact().then(setFact);
  }, []);

  const handleClick = async () => {
    const newFact = await getRamdonFact();
    setFact(newFact);
  };

  return (
    <main>
      <button onClick={handleClick}>Get New fact</button>
      {fact && <p>{fact}</p>}
      <img src={`${URL_PREFIC}${url}`} alt={`cat image from "${fact}"`} />
    </main>
  );
}

export default App;
