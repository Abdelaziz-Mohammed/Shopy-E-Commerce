
import PropTypes from 'prop-types'
import { UsersContext } from './UsersContext';
import { useEffect, useState } from "react"
import bcrypt from 'bcryptjs';

function UsersProvider({ children }) {
  // manage users state
  const [users, setUsers] = useState([
    // users schema
    // { id: 1, name: "John Doe", email: "example@gmail.com", password: "" }
    // users will be added from sign up page
  ]);
  // load users from local storage
  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
        setUsers(JSON.parse(storedUsers));
    }
  }, []);
  // save users to local storage whenever it updates
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  // add a new user with a hashed password
  const addUser = (user) => {
    const hashedPassword = bcrypt.hashSync(user.password, 10);
    const newUser = { ...user, password: hashedPassword };
    setUsers(prevUsers => [...prevUsers, newUser]);
  }
  return (
    <UsersContext.Provider value={{ users, addUser }}>
      {children}
    </UsersContext.Provider>
  )
}

UsersProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default UsersProvider
