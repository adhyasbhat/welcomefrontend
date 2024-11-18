import { useLocation } from "react-router-dom";
import QRCode from "react-qr-code";
function Profile() {
    const location = useLocation();
    const user = location.state?.user; // Safely access the passed user data
    console.log(user)
    return (
        <div>
            <h1>Welcome, {user.user?.name}</h1>
            <p>Email: {user.user?.email}</p>
            <p>Phone: {user.user?.phone}</p>
            <QRCode value={JSON.stringify(user.user)} />
        </div>
    );
}

export default Profile;
