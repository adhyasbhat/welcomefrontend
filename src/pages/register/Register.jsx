import RegistrationForm from '../../components/registrationform/RegistrationForm';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/ApiServices';
import { useState } from 'react';

function Register() {
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (formData) => {
        const { name, email,dob,phone,password,confirmpassword } = formData;
        console.log(formData);
        try {
            const response = await registerUser(name, email,dob,phone,password,confirmpassword);
            console.log(response);
            if (response) {
                navigate("/profile",{ state: { user: response.data } });
                setError(false);
            } else {
                setError(true);
            }
        } catch (error) {
            console.log("Register error", error);
            setError(true);
        }
    };

    return (
        <>
            <RegistrationForm onSubmit={handleRegister} />
        </>
    );
}

export default Register;
