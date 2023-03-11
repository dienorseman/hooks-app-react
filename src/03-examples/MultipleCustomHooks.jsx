import { useCounter } from '../hooks/useCounter';

import { useAxios } from '../hooks/useAxios'

export const MultipleCustomHooks = () => {
    const { counter, increment, decrement } = useCounter( 1, 1 );
    const { data, loading } = useAxios( `https://catfact.ninja/facts?page=${ counter }` )

    return (  
        <> 
            <h1>Fun cats</h1>
            <hr />
            { loading === false ? ( data.data.map( fact => ( <ul><li key="">{fact.fact}</li></ul> ) )) : ( <p>Loading...</p> )}
            <button className="btn btn-primary" onClick={ decrement }>Previous Page</button> 
            <button className="btn btn-primary" onClick={ increment }>Next Page</button>
        </>
    )
}
