import { useState, useEffect, useRef } from "react";

export const useSearch = () => {
  const [inpt, setInpt] = useState("");
  const [error, setError] = useState(null);
  const isFirstInpt = useRef(true)

  useEffect(() => {
    if(isFirstInpt.current){
      isFirstInpt.current = inpt === ""
      return
    }
    if (inpt === "") {
      setError("No se puede buscar una pelicula vacia");
      return;
    }

    if (inpt.match(/^\d+$/)) {
      setError("No se puede encontrar una pelicula con solo numeros");
      return;
    }

    if (inpt.length < 3) {
      setError("La busqueda necesita al menos tres caracteres");
      return;
    }

    setError(null)
  }, [inpt]);

  return {inpt, setInpt, error}
}
