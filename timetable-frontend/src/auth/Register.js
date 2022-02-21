import React from 'react'
import "./Register.css"
import {FaEye,FaEyeSlash} from 'react-icons/fa'
import {Link } from 'react-router-dom'
import {useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'

function Register() {

   useEffect(()=>{
      if(localStorage.getItem('user_info'))
      {
         history.push('/')
      }
   },[])
   const [username,setusername] = useState("")
   const [firstname,setfirstname] = useState("")
   const [lastname,setlastname] = useState("")
   const [email,setemail] = useState("")
   const [password,setpassword] = useState("")
   const history = useHistory();

   // show password
   const [state,setstate] = useState(false);
   const toggle = () => {
      setstate(prevState => !prevState);
   }

   const reg = async (event) => {
      event.preventDefault();
      let emailerr = document.getElementById('emailerr');
      let span = document.getElementById('spanerr');

      const regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
      const regexo = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/;
      
      if (regex.test(emailerr.value) || regexo.test(emailerr.value))
      {
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
      else
      {
         span.innerHTML = "Please enter a valid email";
         span.style.color = '#DA1212';
      }
      
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
                              <input type="text" name="username" placeholder="Username" 
                                 value={username} onChange={(e)=>setusername(e.target.value)} required
                              />
                           </div>
                           <div class="field">
                              <input type="text" name="firstname" placeholder="First Name" 
                                 value={firstname} onChange={(e)=>setfirstname(e.target.value)} required
                              />
                           </div>
                           <div className="field ">
                              <input type="text" name="lastname" placeholder="Last Name" 
                                 value={lastname} onChange={(e)=>setlastname(e.target.value)} required
                              />
                           </div>
                           <div class="field" id="email">
                              
                              <input type="email" name="email" placeholder="Email" id="emailerr"
                                 value={email} onChange={(e)=>setemail(e.target.value)} required
                              />
                              
                           </div>
                           <span id="spanerr"></span>
                           <div class="field" id="pass">
                              <input type={state?"text":"password"} name="password" placeholder="Password" 
                                 value={password} onChange={(e)=>setpassword(e.target.value)} required
                              />
                              <span className="showpass" onClick={toggle}>
                                 {state?<FaEye />:<FaEyeSlash />}
                              </span>
                           </div>
                           <div className="field margin_0">
                              <input type="submit" value="Register" className="btn"/>
                           </div>
                        </fieldset>
                     </form>
                  </div>
               </div>
                <p className="h5 text-center ">Already User? <Link to="/">SignIn</Link></p>
            </div>
         </div>
      </div>
      </>
    )
}

export default Register
