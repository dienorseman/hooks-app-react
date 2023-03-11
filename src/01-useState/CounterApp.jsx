import { useState } from "react"

export const CounterApp = () => {

    const [count, setCount] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })

    const addOne = () => {
        setCount({
            ...count,
            counter1: count.counter1 + 1,
        })
    }

  return (
    <>
        <h1>Counter 1: { count.counter1 }</h1> 

        <h1>Counter 2: { count.counter2 }</h1> 

        <h1>Counter 3: { count.counter3 }</h1> 

        <hr />

        <button className="btn" onClick={ addOne }>+1</button>
    </>
  )
}
