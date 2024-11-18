import Input from '../input/Input';
import Button from '../button/Button';
import { useState } from 'react';

function LoginForm({onSubmit}){
    const [name, Setname] = useState("")
    const [password, Setpassword] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = {name,password}
        console.log(formData)
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