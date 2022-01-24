import React from 'react'
import "./table.css"
import {Button,Modal} from 'react-bootstrap'
import {useState,useEffect} from 'react'
// import {useParams} from 'react-router-dom'
import { getDefaultNormalizer } from '@testing-library/react';


function CourseModal(props) {
    const [course_id,setCourse_id] = useState("");
    const [course_name,setCourse_name] = useState("");
    const [status,setStatus] = useState("");


    const addCourse = async (event) => {
      event.preventDefault();

      const formData = new FormData();
      formData.append("course_id",course_id)
      formData.append("course_name",course_name)
      formData.append("status",status)
      let result = await fetch("http://127.0.0.1:8000/api/addCourse",{
        method:'POST',
        body:formData
      });

      alert("Data saved");
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className='head' closeButton>
         <div className="text-light text-center">
            <h1>Course</h1>
         </div>
        </Modal.Header>
        <Modal.Body>
        <div className="full_container ">
        <div className="container justify-content-center ">
          <div className="center verticle_center full_height ">
              <div className="login_form">
                <form className='' onSubmit={addCourse}>
                  <fieldset className=''>
                    <div className="field ">
                      <input
                        type="text"
                        placeholder="Course ID"
                        onChange={(e)=>setCourse_id(e.target.value)}
                      />
                    </div>
                    <div class="field">
                      <input
                        type="text"
                        onChange={(e)=>setCourse_name(e.target.value)}
                        placeholder="Course Name"
                      />
                    </div>
                    <div className='login_radio'>
                      <lable className="title">Status :</lable>
                      <input
                        type="radio"
                        value="Active"
                        onClick={(e)=>setStatus(e.target.value)}/>
                      <lable for="active" className="title">Active</lable>
                      <input
                        type="radio"
                        value="Inactive"
                        onClick={(e)=>setStatus(e.target.value)}
                      />
                      <lable for="inactive" className="title">Inactive</lable>
                    </div>
                    <div className="field pt-4">
                    <input type="submit" value="Add Course" className="btn" />
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
      </div>
        </Modal.Body>
        <Modal.Footer className='head'>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  function UpdateCourseModal(props) {
    const [course_id,setCourse_id] = useState("");
    const [course_name,setCourse_name] = useState("");
    const [status,setStatus] = useState("");
    const [data,setData] = useState([])

    function UpdateCourse(props) {
      // useEffect(async ()=>{
      //   let result = await fetch('http://127.0.0.1:8000/api/update/'+props.match.params.id);
      //   result = await result.json();
      //   setData(result)
      // })
      // console.warn("props",props.id)
    }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className='head' closeButton>
         <div className="text-light text-center">
            <h1>Update Course</h1>
         </div>
        </Modal.Header>
        <Modal.Body>
        <div className="full_container ">
        <div className="container justify-content-center ">
          <div className="center verticle_center full_height ">
              <div className="login_form">
                <form className='' onSubmit={UpdateCourse}>
                  <fieldset className=''>
                    <div className="field ">
                      <input
                        type="text"
                        defaultValue={data.course_id}
                        // onChange={(e)=>setCourse_id(e.target.value)}
                      />
                    </div>
                    <div class="field">
                      <input
                        type="text"
                        defaultValue={data.course_name}
                        onChange={(e)=>setCourse_name(e.target.value)}
                      />
                    </div>
                    <div className='login_radio'>
                      <lable className="title">Status :</lable>
                      <input
                        type="radio"
                        value="Active"
                        onClick={(e)=>setStatus(e.target.value)}/>
                      <lable for="active" className="title">Active</lable>
                      <input
                        type="radio"
                        value="Inactive"
                        onClick={(e)=>setStatus(e.target.value)}
                      />
                      <lable for="inactive" className="title">Inactive</lable>
                    </div>
                    <div className="field pt-4">
                    <input type="submit" value="Add Course" className="btn" />
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
      </div>
        </Modal.Body>
        <Modal.Footer className='head'>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
function CourseSection() {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow1, setModalShow1] = React.useState(false);
    const [data,setData] = useState([]);
    useEffect( ()=>{
      getData()
    },[])

    async function deleteCourse(id) {
      let result = await fetch('http://127.0.0.1:8000/api/delete/'+id,{
        method:'DELETE'
      });
      getData()
    }

    async function getData() {
      let result = await fetch('http://127.0.0.1:8000/api/fetch');
      result = await result.json();
      setData(result)
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-md-12 ">
                        <div className="page_title ">
                            <h2>Course</h2>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center white_shd1 ">

                    <div className="col-md-12  add">
                        <Button variant="success" onClick={() => setModalShow(true)}>
                            Add Course
                        </Button>
                    </div>

                    <div class="col-md-8 adds pt-5">
                        <div class="white_shd2 ">
                            <div className='row'>
                              <div className='col-4'>
                            <div class="">
                                   <p>show <input
                                         type="number"
                                            name="course"
                                     /> entries</p>
                                </div>
                            </div>
                            <div className='col-4 ml-auto'>
                            <div class="">
                                   <p>Search <input
                                         type="text"
                                            name="course"
                                     /></p>
                                </div>
                            </div>
                            </div>
                                
                       
                            <table class="table pl-4">
                                        <thead class="thead-dark ">
                                            <tr>
                                                <th>#</th>
                                                <th>Course Id</th>
                                                <th>Course</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                           {data.map((item)=>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.course_id}</td>
                                                <td>{item.course_name}</td>
                                                <td>{item.status}</td>
                                                <td className=''><button class='btn bg-success ml-3' onClick={() => setModalShow1(true,item.id)}> <i class="fa fa-pencil-square-o" aria-hidden="true"></i></button><button class='btn bg-warning ml-3'> <i class="fa fa-eye" aria-hidden="true"></i></button><button class='btn bg-danger ml-3' onClick={()=>{deleteCourse(item.id)}}><i class="fa fa-trash" aria-hidden="true"></i></button></td>
                                            </tr>)} 
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <CourseModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    <UpdateCourseModal
                        show={modalShow1}
                        onHide={() => setModalShow1(false)}
                    />
        </>
    )
}

export default CourseSection
