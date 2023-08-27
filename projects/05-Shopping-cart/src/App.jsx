import { products as inicialProducts } from "./mooks/producs.json";
import { Products } from "./components/Products";
import { Header } from "./components/Header";
import { useFilters } from "./hooks/useFilters";

function App() {

  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(inicialProducts);

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
