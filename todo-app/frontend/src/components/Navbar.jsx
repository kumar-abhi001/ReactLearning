import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between border-2 p-1">
        <div className="m-2 p-2">TODO</div>
        <div>
                <button className="border-2 m-2 p-2"
                    onClick={() => {
                        navigate("/login");
                    }}
                >Login</button>
                <button className="border-2 m-2 p-2"
                    onClick={() => {
                        navigate("/signin")
                    }}
                >Signin</button>
        </div>
        </div>
    )
}

export { Navbar };