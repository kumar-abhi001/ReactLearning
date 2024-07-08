import { useContext } from "react";
import UserContext from "../Context/User.Context";

const ShowUser = () => {
    const { user } = useContext(UserContext);
    if (!user) {
        return <div>User not logged in </div>
    }

    return (
        <div>
            {user.password}
        </div>
    )
}

export default ShowUser;