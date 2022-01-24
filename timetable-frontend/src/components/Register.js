import React from 'react'
import "./Register.css"
import {Link } from 'react-router-dom';
import {useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
function Register() {
   
   useEffect(()=>{
      if(localStorage.getItem('user_info'))
      {
         history.push('/')
      }
   },[]
   )
   const [username,setusername] = useState("")
   const [firstname,setfirstname] = useState("")
   const [lastname,setlastname] = useState("")
   const [email,setemail] = useState("")
   const [password,setpassword] = useState("")
   const history = useHistory();

   const reg = async (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append("UserName",username)
      formData.append("FirstName",firstname)
      formData.append("LastName",lastname)
      formData.append("Email",email)
      formData.append("Password",password)
      let result = await fetch("http://127.0.0.1:8000/api/register",{
        method:'POST',
        body:formData
      });
      let user = {username,firstname,lastname,email}
      localStorage.setItem("user_info",JSON.stringify(user));
      history.push("/");
   }

   
    return (
      <>
         
          <div className="full_container">
         <div className="container">
        
            <div className="center verticle_center full_height">
            <div className="heading text-center">
               <h3>Automatic TimeTable Generator</h3>
            </div>
               <div className="login_section">
                  <div className="logo_login">
                     <div className="text-light text-center">
                        <h1>Register</h1>
                     </div>
                  </div>
                  <div className="login_form ">
                     <form onSubmit={reg}>
                        <fieldset>
                           <div className="field ">
                              <input type="text" name="username" placeholder="User" 
                                 value={username} onChange={(e)=>setusername(e.target.value)}
                              />
                           </div>
                           <div class="field">
                              <input type="text" name="firstname" placeholder="First Name" 
                                 value={firstname} onChange={(e)=>setfirstname(e.target.value)}
                              />
                           </div>
                           <div className="field ">
                              <input type="text" name="lastname" placeholder="Last Name" 
                                 value={lastname} onChange={(e)=>setlastname(e.target.value)}
                              />
                           </div>
                           <div class="field">
                              <input type="email" name="email" placeholder="Email" 
                                 value={email} onChange={(e)=>setemail(e.target.value)}
                              />
                           </div>
                           <div class="field">
                              <input type="password" name="password" placeholder="Password" 
                                 value={password} onChange={(e)=>setpassword(e.target.value)}
                              />
                           </div>
                           <div className="field margin_0">
                              <input type="submit" value="Register" className="btn"/>
                           </div>
                        </fieldset>
                     </form>
                  </div>
               </div>
                <p className="h5 text-center ">Already User? <Link to="/">Login</Link></p>
            </div>
         </div>
      </div>
      </>
    )
}

export default Register
