import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter( 0, 1 );

    return (
        <>
            <h1>Counter with hook : { counter }</h1>

            <hr />
            
            <button className="btn btn-primary" onClick={ increment }>+1</button>
            <button className="btn btn-secondary" onClick={ reset }>reset</button>
            <button className="btn btn-primary" onClick={ decrement }>-1</button>
        </>
  )
}
