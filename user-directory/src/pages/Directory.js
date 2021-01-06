import { useState, useEffect } from "react";
import API from "../utils/API";
import UserContext from "../utils/userContext";
import Table from "../components/table.js";

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
            <Table />
        </UserContext.Provider>
    )

}

export default Directory;