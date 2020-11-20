import React from 'react';
import history from '../../history/history'
import './userprofile.css'
const Userprofilepage = () => {
  const onclickhabler = () => {
    alert("Signed out")
    history.goBack();
  }
    return (<div className="userprofilecomponent ">
      {
           <div className="profileimage">
           <img className="profileimg" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png"} alt="profileimage"></img>
           
          <h2>{`Hi Bharath Sharma`}</h2>
          <div>
            <button onClick={onclickhabler}>
              signout
            </button>
          </div>
            </div>
           
      }
    </div>)
}
export default Userprofilepage;