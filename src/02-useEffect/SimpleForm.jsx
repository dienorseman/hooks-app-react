import { useEffect, useState } from "react";
import { Message } from "./Message"

export const SimpleForm = () => {
    const [ inputValue, setInputValue ] = useState({
        username: 'Karl_MarXxX',
        email: 'Fernando@google.com'
    })

    const { username, email } = inputValue;

    const onInputChange = ( { target } ) => {
        const { name, value } = target
    //    console.log(name, value) 
        setInputValue({
            ...inputValue,
            [ name ]: value
        })
    }

    useEffect(() => {
        // console.log('UseEffect Called')
    }, [])

    useEffect(() => {
        // console.log('formstate changed');
    }, [onInputChange])
    
    const onSubmit = ( event ) => {
        event.preventDefault()
        console.log( inputValue );
    }
    return (
        <>
            <form onSubmit={ onSubmit }>
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Username" 
                    name="username"
                    onChange={ onInputChange }
                />
                <input 
                    type="email" 
                    name="email"
                    placeholder="Email"
                    className="form-control mt-2"
                    onChange={ onInputChange }
                />
            </form>
            { 
                (username === 'Karl_MarXxX') && <Message />
            }
        </>

    );
};
