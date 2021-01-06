import axios from "axios";

const obj = {
    getEmployees: function () {
        return new Promise((resolve, reject) => {
            axios
                .get("https://randomuser.me/api/?results=10&nat=us")
                .then(res => {
                    const users = res.data.results // users is an array of random users
                    //console.log(users[0]);
                    const results = users.map(user => {
                        return {
                            name: `${user.name.title}. ${user.name.first} ${user.name.last}`,
                            dob: user.dob.date,
                            email: user.email,
                            phone: user.cell,
                        };
                    });
                    resolve(results);
                })
                .catch(err => reject(err));
        });
    }
}

export default obj;