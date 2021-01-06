import React from "react";
import UserContext from "../utils/userContext.js";
import ReactHtmlParser from 'react-html-parser';

function tableUsers(userArray) {
    let tableHtml = "";
    for (let i = 0; i < userArray.length; i++) {
        const user = userArray[i];

        tableHtml = tableHtml +
            `
<tr>
    <th scope="row">${i + 1}</th>
    <td>${user.name}</td>
    <td>${user.dob}</td>
    <td>${user.email}</td>
    <td>${user.phone}</td>
</tr>
`
    };
    return tableHtml;
}

function Table() {
    return (
        <UserContext.Consumer>
            {({ users }) => (
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">D.O.B</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ReactHtmlParser(tableUsers(users))}
                    </tbody>
                </table>
            )}
        </UserContext.Consumer>
    );
}

export default Table;
