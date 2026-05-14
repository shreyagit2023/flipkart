import { Link, useNavigate} from "react-router-dom";
import "./SignUp.css";
import { useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import React from "react";

export default function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const{user,setuser}=React.useContext(UserContext);

  useEffect(() => {
  console.log("User updated:", user);
}, [user]);



  const navigate = useNavigate();

    const handleSignup = async () => {

  if (!name.trim()) {
    alert("Enter name");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    alert("Signup successful");

    const newUser = { name };
    localStorage.setItem("user", JSON.stringify(newUser));

    setuser(newUser);   //imp

    navigate("/login");

  } catch (error) {
    alert("Something went wrong");
  }
};

  return (
    <div className="signup">
      <div className="left">
        <div className="signup-text">
          <h2>Looks like you're new here!</h2>
          <p>Sign up with your email to get started</p>
        </div>
      </div>

      <div className="right">
        <div className="form">
          <div className="field">
            <label>Enter Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>

          <div className="field">
            <label>Enter Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>

          <div className="field">
            <label>Enter Password</label>
            <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)} />
          </div>

          <div className="field">
            <label>Confirm Password</label>
            <input type="password" value={confirmPassword} onChange={ (e)=>setConfirmPassword(e.target.value)}/>
          </div>

          <button className="button3" onClick={handleSignup}>Sign Up</button>

          <Link to="/login" className="login-link">
            Existing user? Log in
          </Link>
        </div>
      </div>
    </div>
  );
};
