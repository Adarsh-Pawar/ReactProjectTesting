import React from 'react'
import SideBar from './faculty/components/SideBar'
import CourseSection from './faculty/components/CourseSection'
import SubjectSection from './faculty/components/SubjectSection'
import ClassSection from './faculty/components/ClassSection'
import TimetableSection from './faculty/components/TimetableSection'
import {useHistory} from 'react-router-dom'
import {useEffect,useState} from 'react'

import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';

function Faculty() {

  const [login,setLogin] = useState(false);

    const history = useHistory();
  useEffect(()=> {
    if (!(localStorage.getItem('user_login')))
    {
        setLogin(false)
        history.push("/")
    }
    else
    {   
      setLogin(true)
      history.push("/faculty")
    }
  },[])
    return (
        <div>
            <Router >
            {login?<SideBar/>:""}
          <Switch>
              <Route exact path="/faculty" component={CourseSection}></Route>
              <Route exact path="/fsubject" component={SubjectSection}></Route>
              <Route exact path="/fclass" component={ClassSection}></Route>
              <Route exact path="/ftimetable" component={TimetableSection}></Route>
          </Switch>
          </Router> 
        </div>
    )
}
export default Faculty