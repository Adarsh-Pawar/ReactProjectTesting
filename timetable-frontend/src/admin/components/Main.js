import React from 'react'
import './Main.css';
import img from '../assets/image/mca.png'
import Cdata from '../assets/array/Cdata'
import Cdata2 from '../assets/array/Cdata2'
import Cdata3 from '../assets/array/Cdata3'
function card1(val) {
    return (
        <div className={val.cols}>
            <div className={val.boxs}>
                <div className="pic"><i className={val.icon} aria-hidden="true"></i></div>
                <div className="box-info">
                    <h4 className="text-center">{val.value}</h4>
                    <h3>{val.name}</h3>
                </div>
            </div>
        </div>
    );
}
function card2(val) {
    return (
        <div className={val.cols}>
            <div className={val.boxs}>
                <div className="pic"><i className={val.icon} aria-hidden="true"></i></div>
                <div className="box-info">
                    <h4 className="text-center">{val.value}</h4>
                    <h3>{val.name}</h3>
                </div>
            </div>
        </div>
    );
}
function card3(val) {
    return (
        <div className="col-5">

            <div className="card">
                <a className="img-card" href="#">
                    <img src={img} />
                </a>
                <div className="card-content">
                    <h4 className="card-title">
                        <a href="#">{val.title} 
                        </a>
                    </h4>
                </div>
                <div className="card-read-more py-4">
                    <a href="#" className="">
                    {val.view} 
                    </a>
                    <a href="#" className="" download>
                    {val.download} 
                    </a>
                </div>

            </div>
        </div>
    );
}
function Main() {
    return (
        <>
            {/* main component start */}
            <section id="data" className="data section-bg">
                <div className="container " id="main">
                    <div className="row d-flex justify-content-center">
                        {Cdata.map(card1)}
                    </div>
                    <div className="row d-flex pt-4  justify-content-center ">
                        {Cdata2.map(card2)}
                    </div>
                </div>
            </section>
            {/* main component end */}

            <div className="section-title">
                <h2>Recent work</h2>

            </div>

            <section>
                <div className="container">
                    <div className="row justify-content-center">
                    {Cdata3.map(card3)}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Main

