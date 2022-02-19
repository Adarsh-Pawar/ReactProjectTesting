import React from 'react'
import {Link,useHistory} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sdata from '../assets/array/Sdata'
import DarkMode from './DarkMode'
import './SideBar.css'

  

  

  

function sidelink(val)
{
  
  return(
<li className={val.lis}>
       <i className={val.icon} aria-hidden="true"></i>
       <Link to={val.link} className={val.slink}>{val.name}</Link>
   </li>
  );
} 



function SideBar() {

  const history = useHistory();
  function logout() {
    localStorage.clear();
    history.push("/");
  }
  
    return (
     <>
     <nav id="sidenav" className="sidenav">
     <p className="logo">Automated Timetable <span className="p-5"> Generator</span></p>
     
    <ul>
       {Sdata.map(sidelink)}
  </ul>
</nav>
     <div className="header pt-2">
     <h2 className="">Dashboard</h2>
     <DarkMode 
     />
     </div>    
   </>
    )
}

export default SideBar

