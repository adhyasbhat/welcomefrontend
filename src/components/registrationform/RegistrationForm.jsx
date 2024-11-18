import Input from '../input/Input';
import Button from '../button/Button';
import { useState } from 'react';

function RegistrationForm({ onSubmit }) {
    const [name, Setname] = useState("");
    const [email, Setemail] = useState("");
    const [phone, Setphone] = useState("");
    const [dob, Setdob] = useState("");
    const [password, Setpassword] = useState("");
    const [confirmpassword, Setconfirmpassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmpassword) {
            alert("Passwords do not match!");
            return;
        }
        const formData = { name, email, dob,phone, password, confirmpassword };
        onSubmit(formData);
        console.log("here");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => Setname(e.target.value)}
                    name="name"
                />
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => Setemail(e.target.value)}
                    name="email"
                />
                <Input
                    type="date"
                    placeholder="Date of Birth"
                    value={dob}
                    onChange={(e) => Setdob(e.target.value)}
                />
                <Input
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => Setphone(e.target.value)}
                    name="phone"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => Setpassword(e.target.value)}
                    name="password"
                />
                <Input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmpassword}
                    onChange={(e) => Setconfirmpassword(e.target.value)}
                    name="confirmpassword"
                />
                <Button type="submit" className="h-5 w-9">Register</Button>
            </form>
        </>
    );
}

export default RegistrationForm;
