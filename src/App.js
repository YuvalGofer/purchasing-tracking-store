import React, { useState } from "react";
import LoginForm from "./Components/LoginForm";
import Navbar from "./Components/Navbar";


function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const login = details => {
    console.log(details);
    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in")
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Details dont match!");
      setError("Details dont match!");
    }
  }
  const logout = () => {
    setUser({ name: "", email: "" });
  }
  return (
    <div className="App">
      <Navbar />
      {/* <h1>Users list</h1> */}
      {/* {Users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))} */}
      {/* {(user.email != "") ? (
        <div className="Welcome">
          <h2>Welcom, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )} */}
    </div>
  );
}

export default App;
