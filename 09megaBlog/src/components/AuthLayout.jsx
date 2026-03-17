import React , {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export function Protected({children, authentication=true}) {
    const navigate = useNavigate()
    const [loader, setLoder] = useState(true)
    const authStatus = useSelector((state) => state.authStatus)
    useEffect(() => {
        if(authentication && authStatus !== authentication) {
            navigate("/login")
        }else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoder(false)
    }, [authStatus, navigate, authentication])
  return loader ? <h1>Loading...</h1> : <>{children}</>
}

export default Protected