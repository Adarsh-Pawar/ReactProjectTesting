import React from 'react'
import SideBar from './faculty/components/SideBar'
import CourseSection from './faculty/components/CourseSection'
import SubjectSection from './faculty/components/SubjectSection'
import ClassSection from './faculty/components/ClassSection'
import TimetableSection from './faculty/components/TimetableSection'
import {useHistory} from 'react-router-dom'
import {useEffect} from 'react'

import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';

function Faculty() {
    const history = useHistory();
  useEffect(()=> {
    if (!(localStorage.getItem('user_login')))
    {
       history.push("/")
    }
    else
    {
        history.push("/faculty")
    }
  },[])
    return (
        <div>
            <Router >
            <SideBar/>
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