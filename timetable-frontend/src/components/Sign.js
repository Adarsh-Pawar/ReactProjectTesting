import React from 'react'
import "./Sign.css"
import {Link,useHistory} from 'react-router-dom'
import {useState,useEffect} from 'react'

function Sign() {
   const [username,setusername] = useState("")
   const [password,setpassword] = useState("")
  

   const history = useHistory();
   useEffect(()=> {
      if (localStorage.getItem('user_login')||localStorage.getItem('admin_login'))
      {
         history.push("/admin")
      }
   }, [])
   
   const signin = async (event)=> {
      event.preventDefault();
      const formData = new FormData();
      formData.append("UserName",username)
      formData.append("Password",password)
      // let item = {username,password}
      let result = await fetch('http://127.0.0.1:8000/api/login',{
         method:'POST',
         // headers:{
         //    "Content-type":"application/json",
         //    "Accept":"application/json"
         // },
      body:formData
      
      });
      
      result = await result.json();
      
      
      if(result.response==="LoggedIn")
      {
         localStorage.setItem('user_login',JSON.stringify(username));
         history.push("/admin")
      }
      else
      {
         alert("Bhak bsdk")
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
                        <h1>Login</h1>
                     </div>
                  </div>
                  <div className="login_form ">
                     <form onSubmit={signin}>
                        <fieldset>
                           <div className="field ">
                              <input type="text" name="username" placeholder="Username" 
                                 onChange={(e)=>setusername(e.target.value)}
                              />
                           </div>
                           <div class="field">
                              <input type="password" name="password" placeholder="Password" 
                                 onChange={(e)=>setpassword(e.target.value)}
                              />
                           </div>
                           <div class="field">
                              <a className="forgot" href="">Forgotten Password?</a>
                           </div>
                           <div className="field margin_0">
                              <input type="submit" value="login" className="btn"/>
                           </div>
                        </fieldset>
                     </form>
                  </div>
               </div>
                <p className="h5 text-center ">New User? <Link to="/register">Register</Link> | <Link to="/login"> Admin</Link></p>
            </div>
         </div>
      </div>
      </>
    )
}

export default Sign