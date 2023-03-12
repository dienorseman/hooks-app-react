import { useCounter } from '../hooks/useCounter';

import { useAxios } from '../hooks/useAxios'

export const MultipleCustomHooks = () => {

    const { counter, increment, decrement } = useCounter( 1, 1 );
    const { data, loading } = useAxios( `https://catfact.ninja/facts?page=${ counter }` )

    return (  
        <> 
            <h1>Fun cats</h1>
            <hr />
            <ol>
            { loading === false ? ( 
                data.data.map( ( fact, index ) => ( 
                    <li key={ index }>{ fact.fact }</li>
            ) ) ) : ( <p className='alert alert-info text-center'>Loading...</p> ) }
            </ol>
            <button className="btn btn-primary" onClick={ decrement }>Previous Page</button> 
            <button className="btn btn-primary" onClick={ increment }>Next Page</button>
        </>
    )
}
