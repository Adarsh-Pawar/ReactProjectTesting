import React from 'react'
import SideBar from './components/SideBar'
import {useHistory} from 'react-router-dom'
import {useEffect} from 'react'
import CourseSection from './components/CourseSection'
import SubjectSection from './components/SubjectSection'
import FacultySection from './components/FacultySection'
import ClassSection from './components/ClassSection'
import ConstrainSection from './components/ConstrainSection'
import TimetableSection from './components/TimetableSection'
import Main from './components/Main'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function Admin() {
    
    const history = useHistory();
    useEffect(()=> {
      if (!(localStorage.getItem('user_login'))&&!(localStorage.getItem('admin_login')))
      {
         history.push("/")
      }
    }, )
    return (
        <div>
        <Router>
            <SideBar/>
                <Switch>
                    <Route exact path="/admin" component={Main}></Route>
                    <Route exact path="/course" component={CourseSection}></Route>
                    <Route exact path="/subject" component={SubjectSection}></Route>
                    <Route exact path="/faculty" component={FacultySection}></Route>
                    <Route exact path="/class" component={ClassSection}></Route>
                    <Route exact path="/constrain" component={ConstrainSection}></Route>
                    <Route exact path="/timetable" component={TimetableSection}></Route>
                </Switch>
        </Router>
        
        </div>
    )

}


export default Admin
