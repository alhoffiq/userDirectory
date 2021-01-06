import { useState, useEffect } from "react";
import API from "../utils/API";
import UserContext from "../utils/userContext";

function Directory() {
    const [users, setUsers] = useState({});

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = () => {
        API.getEmployees()
            .then(users => {
                setUsers(users);
            });
    }

    return (
        <UserContext.Provider value={{ users }}>
            <h2 className="text-center">Employee Directory</h2>
        </UserContext.Provider>
    )

}

export default Directory;