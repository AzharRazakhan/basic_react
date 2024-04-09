import { useState,useContext } from "react"
import UserContext from "../context/UserContext"

function Login (){
    const [name,setName]= useState('')
    const [password,setPassword] = useState('')
    const {setUser}  = useContext(UserContext)

    const  handleSubmit = (e) => {
        e.preventDefault()
        setUser({name,password})
    }
    return(
        <div>
            <h2>LogIn</h2>
            <input type="text" name="username" 
            value={name} 
            placeholder='enter name'
             onChange={(e) => setName(e?.target?.value)} />
            <input type="password" name="password" 
            placeholder="enter password"
            value={password} onChange={(e) => setPassword(e?.target?.value)}/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login