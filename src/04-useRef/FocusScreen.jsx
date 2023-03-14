import { useRef } from "react";


export const FocusScreen = () => {
    const ref = useRef();
    console.log( ref );
    return (
        <>
            <h1>Focus screen</h1>
            <hr />

            <input 
                ref={ ref }
                type="text" 
                placeholder="Ingrese su nombre"
                className="form-control"
            />

            <button className="btn btn-primary mt-2">
                Set focus 
            </button>
        </>
  );
};
