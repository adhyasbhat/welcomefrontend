import Input from '../input/Input';
import Button from '../button/Button';

function LoginForm({onSubmit}){
    const [name, Setname] = useState("")
    const [password, Setpassword] = useSate("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = {name,password}
        onSubmit(formData)
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <Input
            type="text"
            placeholder = "Full Name"
            value={name}
            onChange={(e)=> Setname(e.target.value)}
            name="name"
            />
            <Input
            type="password"
            placeholder = "Password"
            value={password}
            onChange={(e)=> Setpassword(e.target.value)}
            name="password"
            />
            <Button type="submit">Login</Button>
        </form>
        </>
    )
}
export default LoginForm