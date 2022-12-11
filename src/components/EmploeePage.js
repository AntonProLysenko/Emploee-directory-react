import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";
import contactArr from "../data"
// import contacArr from "../data"

import HomePage from "./HomePage"


export default function EmploeePage({contact}){
    
    const {id} = useParams()
    const param = parseInt(id)

    const thiscontact = contactArr.find(element=>{
        return element.id === param
    })



    return (
        <div className="personalInfo">
            
            <div className="return">
                <Link to="/" element = {<HomePage/>}>
                        <h2><i className="arrow left"></i> Back  </h2>
                </Link>
            </div>

            <div className="card">
                <div className="personalTitle">
                    
                    <img src = {thiscontact.img} alt= 'Profile Picture' style={{ height: "150px", borderRadius: "100px" }} />
                    <div >
                        <p className="personalName">{thiscontact.name}
                            <br/>
                        <span className="position"> {thiscontact.position}</span>
                        </p>
                    </div>
                </div>

                <div className="personalContact">
                    <div>
                        <span className="action">Call Ofiice</span>
                        <br/>
                        <span className="number">{thiscontact.office}</span>
                    </div>
                    
                    <div className="arrow"><i className="right"></i></div>
                    
                </div>

                <div className="personalContact">
                    <div>
                        <span className="action">Call Mobile</span>
                        <br/>
                        <span className="number">{thiscontact.mobile}</span>
                    </div>
                    
                    <div className="arrow"><i className="right"></i></div>
                    
                </div>

                <div className="personalContact">
                    <div>
                        <span className="action">SMS</span>
                        <br/>
                        <span className="number">{thiscontact.mobile}</span>
                    </div>
                    
                    <div className="arrow"><i className="right"></i></div>
                    
                </div>

                <div className="personalContact">
                    <div>
                        <span className="action">Email</span>
                        <br/>
                        <span className="number">{thiscontact.email}</span>
                    </div>
                    
                    <div className="arrow"><i className="right"></i></div>
                    
                </div>

            </div>
        

        </div>
  
    )
}