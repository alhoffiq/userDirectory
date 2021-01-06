import React from "react";
import UserContext from "../utils/userContext.js";

function Table() {
    return (
        <UserContext.Consumer>
            {({ user }) => (
                <div>
                    <h4>Name: {}</h4>
                </div>
            )}
        </UserContext.Consumer>
    );
}

export default Table;
