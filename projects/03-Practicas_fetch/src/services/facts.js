const CAT_RANDOM_FACT_END_POINT = `https://catfact.ninja/fact`;

export const getRamdonFact = async () => {
  const res = await fetch(CAT_RANDOM_FACT_END_POINT);
  const data = await res.json();
  const { fact } = data;
  return fact;
};
