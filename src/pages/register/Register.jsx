import RegistrationForm from '../../components/registrationform/RegistrationForm';
import {useNavigate} from 'react-router-dom'
import{registerUser} from '../../services/ApiServices'
function Register (){

    const handleLogin = (formData) => {
        const {username, password} = formData;
        const [error,setError] = useState(false)
        const navigate = useNavigate()
        try{
            const response = registerUser(username,password)
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
return(
    <>
    <div>hello</div>
    <RegistrationForm onSubmit={handleLogin}/>
    </>
)
}
export default Register