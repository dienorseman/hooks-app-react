 import { useEffect, useState } from "react"
 import axios from "axios"

 export const useAxios = ( url ) => {

    const [ data, setData ] = useState( null )
    const [ loading, setLoading ] = useState( null )

    const getAxios = async () => {
                setLoading( true )
                try {
                    const resp = await axios.get( url )
                    setData( resp.data )
                } catch ( error ) {
                    console.log( error );
                }
                setLoading( false )
            }  

    useEffect(() => {
        getAxios()
    },  [url])
    
    return { data, loading }
 }