import React from 'react';
import './categorycomponent.css'
const Categorycomponent = (props) => {
    return (
        
        <div className="categorycontainer">
             <div className="categoryimagebox">
                <img  style={{height:'100%',width:'100%'}} src={props.imgsrc} alt="featureimage"></img>
           
            </div>
            <div className="contentbox">
               
                <button className="categoryreadmorebutton">
                {props.catname}
                </button>
            </div>
           
        </div>
    )
}
export default  Categorycomponent;