import React from 'react';
import { Link } from 'react-router-dom';
import './categorycomponent.css'
const Categorycomponent = (props) => {
    return (
        
        <div className="categorycontainer">
             <div className="categoryimagebox">
                <img  style={{height:'100%',width:'100%'}} src={props.imgsrc} alt="featureimage"></img>
           
            </div>
            <div className="contentbox">
                <Link path to = {props.catname}>
                <button className="categoryreadmorebutton">
                {props.catname}
                </button>
                </Link>
                
            </div>
           
        </div>
    )
}
export default  Categorycomponent;