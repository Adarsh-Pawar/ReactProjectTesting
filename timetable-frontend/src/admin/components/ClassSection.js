import React from 'react'
import "./table.css"
import {Button,Modal} from 'react-bootstrap'
import {useState} from 'react'

function classModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className='head' closeButton>
         <div className="text-light text-center">
            <h1>class Room</h1>
         </div>
        </Modal.Header>
        <Modal.Body>
        <div className="full_container ">
        <div className="container justify-content-center ">
          <div className="center verticle_center full_height ">
              <div className="login_form">
                <form className=''>
                  <fieldset className=''>
                    <div className="field ">
                      <input
                        type="text"
                        name="course"
                        placeholder="class ID"
                      />
                    </div>
                    <div className="field">
                      <input
                        type="text"
                        name="course_name"
                        placeholder="class Type"
                      />
                    </div>
                    <div className="field">
                      <input
                        type="text"
                        name="course_name"
                        placeholder="class Number"
                      />
                    </div>
                    <div className="field">
                      <input
                        type="text"
                        name="course_name"
                        placeholder="class Floor"
                      />
                    </div>
                    <div className='login_radio'>
                      <lable className="title">Status :</lable>
                      <input
                        type="radio"
                        name="status"
                        id="active"
                        value="Active"
                      />
                      <lable for="active" className="title">Active</lable>
                      <input
                        type="radio"
                        name="status"
                        id="inactive"
                        value="Inactive"
                      />
                      <lable for="inactive" className="title">Inactive</lable>
                    </div>
                    <div className="field pt-4">
                      <input type="submit" value="Add class Room" className="btn" />
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
function ClassSection() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-md-12 ">
                        <div className="page_title ">
                            <h2>class Room</h2>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center white_shd1 ">

                    <div className="col-md-12  add">
                        <Button variant="success" onClick={() => setModalShow(true)}>
                            Add class Room
                        </Button>
                    </div>

                    <div className="col-md-8 adds pt-5">
                        <div className="white_shd2 ">
                            <div className='row'>
                              <div className='col-4'>
                            <div className="">
                                   <p>show <input
                                         type="number"
                                            name="course"
                                     /> entries</p>
                                </div>
                            </div>
                            <div className='col-4 ml-auto'>
                            <div className="">
                                   <p>Search <input
                                         type="text"
                                            name="course"
                                     /></p>
                                </div>
                            </div>
                            </div>
                                
                       
                            <table className="table pl-4">
                                        <thead className="thead-dark ">
                                            <tr>
                                                <th>#</th>
                                                <th>class ID</th>
                                                <th>class No.</th>
                                                <th>class Type</th>
                                                <th>class Floor</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>234</td>
                                                <td>203</td>
                                                <td>LAB</td>
                                                <td>third</td>
                                                <td>active</td>
                                                <td className=''><button className='btn bg-success ml-3'> <i className="fa fa-pencil-square-o" aria-hidden="true"></i></button><button className='btn bg-warning ml-3'> <i className="fa fa-eye" aria-hidden="true"></i></button><button className='btn bg-danger ml-3'><i className="fa fa-trash" aria-hidden="true"></i></button></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>234</td>
                                                <td>203</td>
                                                <td>LAB</td>
                                                <td>third</td>
                                                <td>active</td>
                                                <td className=''><button className='btn bg-success ml-3'> <i className="fa fa-pencil-square-o" aria-hidden="true"></i></button><button className='btn bg-warning ml-3'> <i className="fa fa-eye" aria-hidden="true"></i></button><button className='btn bg-danger ml-3'><i className="fa fa-trash" aria-hidden="true"></i></button></td>
                                            </tr>
                                            <tr>
                                                 <td>1</td>
                                                <td>234</td>
                                                <td>203</td>
                                                <td>LAB</td>
                                                <td>third</td>
                                                <td>active</td>
                                                <td className=''><button className='btn bg-success ml-3'> <i className="fa fa-pencil-square-o" aria-hidden="true"></i></button><button className='btn bg-warning ml-3'> <i className="fa fa-eye" aria-hidden="true"></i></button><button className='btn bg-danger ml-3'><i className="fa fa-trash" aria-hidden="true"></i></button></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>234</td>
                                                <td>203</td>
                                                <td>LAB</td>
                                                <td>third</td>
                                                <td>active</td>
                                                <td className=''><button className='btn bg-success ml-3'> <i className="fa fa-pencil-square-o" aria-hidden="true"></i></button><button className='btn bg-warning ml-3'> <i className="fa fa-eye" aria-hidden="true"></i></button><button className='btn bg-danger ml-3'><i className="fa fa-trash" aria-hidden="true"></i></button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <classModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
        </>
    )
}

export default ClassSection
