import React from 'react'
import Homepage from '../src/pages/homepage/homepage';
import Loginpage from '../src/pages/loginpage/loginpage';
import SignupPage from '../src/pages/signuppage/signuppage';
import Userprofilepage from '../src/pages/userprofile/userprofile';
import NavbarComponent from '../src/Components/navbar/navbarcomponent';
import Addblogpage from '../src/pages/addnewblogpage/addnewblog'
import Myblogpage from '../src/pages/myblogs/myblogpage'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
function App() {
  return (
    <div >
      <Router>
      <NavbarComponent/>
      <Route path ="/" exact component={Homepage}/>
      <Route path ="/signin" exact component={Loginpage}/>
      <Route path="/signup" exact component={SignupPage} />
      <Route path="/myblogs" exact component={Myblogpage} />
      <Route path="/addnewblog" exact component={Addblogpage} />
      </Router>
    </div>
  );
}

export default App;
