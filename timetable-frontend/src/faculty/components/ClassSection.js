import React from 'react'
import "./table.css"


function ClassSection() {
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
                                                <td className=''><button className='btn bg-warning ml-3'> Report</button></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>234</td>
                                                <td>203</td>
                                                <td>LAB</td>
                                                <td>third</td>
                                                <td>active</td>
                                                <td className=''><button className='btn bg-warning ml-3'> Report</button></td>
                                            </tr>
                                            <tr>
                                                 <td>1</td>
                                                <td>234</td>
                                                <td>203</td>
                                                <td>LAB</td>
                                                <td>third</td>
                                                <td>active</td>
                                                <td className=''><button className='btn bg-warning ml-3'> Report</button></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>234</td>
                                                <td>203</td>
                                                <td>LAB</td>
                                                <td>third</td>
                                                <td>active</td>
                                                <td className=''><button className='btn bg-warning ml-3'> Report</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div> 
        </>
    )
}

export default ClassSection
