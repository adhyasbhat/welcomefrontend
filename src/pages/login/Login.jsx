import LoginForm from '../../components/loginform/LoginForm'
import {useNavigate} from 'react-router-dom'
import {loginUser} from '../../services/ApiServices'
import { useState } from 'react';
function Login (){

    const [error,setError] = useState(false)
    const navigate = useNavigate()

    const handleLogin = async (formData) => {
        const {name,password} = formData
        try{
            const response = await loginUser(name,password)
            if(response)
            {
                navigate("/profile",{ state: { user: response.data } });
                setError(false)
            }
            else{
                setError(true)
            }
        }
        catch(error){
            console.log('Login error',error)
            setError(true)
        }
    };
return (
    <LoginForm onSubmit={handleLogin}/>
)
}
export default Login