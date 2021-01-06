import { useState } from "react";
import API from "../utils/API";
import UserContext from "../utils/userContext";

function Directory() {
    const [users, setUsers] = useState({});

    API.getEmployees()
        .then(users => {
            setUsers(users);
            console.log(users)
        });

    return (
        <UserContext.Provider value={{ users }}>
            <h2 className="text-center">Employee Directory</h2>
        </UserContext.Provider>
    )

}

export default Directory;