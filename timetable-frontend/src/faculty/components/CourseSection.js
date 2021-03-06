import React from 'react'
import "./table.css"
import {useState,useEffect} from 'react'

function CourseSection() {
    const [data,setData] = useState([]);
    useEffect( ()=>{
        getData()
      },[])
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
                        <div className="page_title">
                            <h2>Course</h2>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center white_shd1 ">
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
                                                <th className="text-center">#</th>
                                                <th className="text-center">Course Id</th>
                                                <th className="text-center">Course</th>
                                                <th className="text-center">Status</th>
                                                <th className="text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                           {data.map((item)=>
                                            <tr>
                                                <td className="text-center">{item.id}</td>
                                                <td className="text-center">{item.course_id}</td>
                                                <td className="text-center">{item.course_name}</td>
                                                <td className="text-center">{item.status}</td>
                                                <td className="text-center"><button className='btn ml-3 report'>Report</button></td>
                                            </tr>)} 
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div> 
        </>
    )
}

export default CourseSection
