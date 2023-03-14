import { useLayoutEffect, useRef } from "react";

export const CatFactList = ( { data, loading } ) => {

    const pRef = useRef()

    useLayoutEffect(() => {
      
      console.log( pRef.current?.getBoundingClientRect() )
    }, [data])

    return (
      <ol>
        {loading === false ? (
          data.data.map((fact, index) => (
          <li key={index}>
              {" "}
              <img src="src\assets\paws.png" alt="" className="cat-paw" />
              <p>{fact.fact}</p>{" "}
            </li>
          ))
        ) : (
          <p ref={ pRef } className="alert alert-info text-center">Loading...</p>
        )}
      </ol>
    );
};
