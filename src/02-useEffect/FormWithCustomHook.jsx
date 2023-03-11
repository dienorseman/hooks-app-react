import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const { inputValue, onInputChange, inputReset } = useForm({
        username: '',
        password: ''
    }) 

    const { username, password } = inputValue;
    
    const onSubmit = ( event ) => {
        event.preventDefault()
        // console.log( username, password );
    }

    
    return (
        <>
            <form onSubmit={ onSubmit }>
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Username" 
                    name="username"
                    value={ username }
                    onChange={ onInputChange }
                />
                <input 
                    type="password" 
                    name="password"
                    placeholder="Password"
                    className="form-control mt-2"
                    value={ password }
                    onChange={ onInputChange }
                />
                <button 
                    className="btn btn-primary mt-2"
                    onClick={ inputReset }
                >
                    Reset
                </button>
                {/* <input type="submit" value="Submit" className="form-control mt-2"/> */}
            </form>
        </>

    );
}
