import React from "react";
import './Login.css'
import { Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import UserContext from "../../context/UserContext";


export default function Login() 
{
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const { setuser } = React.useContext(UserContext);

    setTimeout(() => {
  console.log("FINAL STORAGE:", localStorage.getItem("user"));
}, 500);


    const navigate= useNavigate();
    const handleLogin= async ()=>{
        try{
            const res= await fetch("http://localhost:5000/api/auth/login",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email,password
            })
        });

        const data= await res.json();

       if (data.token) {
  localStorage.setItem("token", data.token);

  const newUser = { name: data.name };

  localStorage.setItem("user", JSON.stringify(newUser)); // ✅ SAVE HERE
  setuser(newUser); // ✅ CONTEXT

  alert("Login successful");
  navigate("/profile");
}
        else{
            alert(data.message);
            return;
        }
    }
        catch(error)
        {
            alert("Something went wrong");
        }

        
    };
    return(
        <>
        <div className="login">
            <div className="left">
                <div className="img"><img src="{null}" alt=""/></div>
            </div>
            <div className="right">
                <div className="login-text">
                    <h2>Login</h2>
                    <div className="text-gray">Get access to your Orders,Wishlist and Recommendations</div>
                </div>
                <div className="email">
  <div className="text">Enter Email</div>
  <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
</div>

                <div className="email">
  <div className="text">Enter Password</div>
  <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
</div>
                <div className="join">
                                    <div className="button1" onClick={handleLogin}>Login</div>
                <div className="button2"><Link to="/signup">Sign Up</Link></div>
                </div>
                <div className="text">We no longer support login via Social accounts. To recover your old accounts</div>
            </div>
        </div>
        </>
    );

};