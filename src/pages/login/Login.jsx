import LoginForm from '../../components/loginform/LoginForm'
import {useNavigate} from 'react-router-dom'
import {loginUser} from '../../services/ApiServices'
function Login (){

    const handleLogin = (formData) => {
        const {name, password} = formData;
        const [error,setError] = useState(false)
        const navigate = useNavigate()
        try{
            const response = loginUser(name,password)
            if(response)
            {
                navigate("/profile")
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

    <LoginForm onSubmit={handleLogin}/>
}
export default Login