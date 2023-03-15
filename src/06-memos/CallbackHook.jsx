import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {
    const [ counter, setCounter ] = useState( 0 )


    // const increment = () => {
    //     setCounter( counter + 1 )
    // }

    const increment = useCallback(
      ( value ) => {
        setCounter( (c) => c + value )
      },
      [],
    )
    
    return (
        <>
            <h1>use Callback Hook: { counter }</h1>
            <hr />
            <ShowIncrement increment={ increment }/>
        </>
    )
}
