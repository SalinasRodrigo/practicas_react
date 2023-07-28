import "./App.css";
import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";

//const CAT_IMAGE_API = `https://cataas.com/cat/says/`
//hello?&json=true


function App() {  
  const { fact, refreshFact} = useCatFact();
  const { url } = useCatImage({ fact });

  const handleClick = async () => {
    refreshFact()
  };

  return (
    <main>
      <button onClick={handleClick}>Get New fact</button>
      {fact && <p>{fact}</p>}
      <img src={url} alt={`cat image from "${fact}"`} />
    </main>
  );
}

export default App;
