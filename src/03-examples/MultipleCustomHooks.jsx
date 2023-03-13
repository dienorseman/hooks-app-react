import { useCounter, useAxios } from "../hooks/";
import { ButtonsNavigation } from "./ButtonsNavigation";
import { CatFactList } from "./CatFactList";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1, 1);
  const { data, loading } = useAxios(
    `https://catfact.ninja/facts?page=${counter}&limit=5`
  );

  return (
    <>
      <h1>Fun cats</h1>
      <hr />
      <CatFactList data={data} loading={loading} />
      <hr />
      <ButtonsNavigation
        loading={loading}
        decrement={decrement}
        increment={increment}
      />
    </>
  );
};
