import { useState, useContext } from "react";
import UserContextProvider from "../Context/UserContextProvider";
import UserContext from "../Context/User.Context";
import ShowUser from "./ShowUser";

const User = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(UserContext);

    function handleSubmit() {
        setUser({ name, password });
        setName("");
        setPassword("");
    }

    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value) } />
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default User;