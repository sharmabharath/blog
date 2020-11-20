import React, {useEffect }from 'react'
import Homepage from '../src/pages/homepage/homepage';
import Loginpage from '../src/pages/loginpage/loginpage';
import SignupPage from '../src/pages/signuppage/signuppage';
import Userprofilepage from '../src/pages/userprofile/userprofile';
import NavbarComponent from '../src/Components/navbar/navbarcomponent';
import Addblogpage from '../src/pages/addnewblogpage/addnewblog'
import Myblogpage from '../src/pages/myblogs/myblogpage'
import Catblogpage from '../src/pages/categoryblogpage/catblog'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import history from '../src/history/history'
function App(props) {

  let usertoken = true;
  

  
  console.log(props)
  return (
    <div >
      <Router>
      <NavbarComponent/>
      <Route path ="/" exact component={Homepage}/>
      <Route
          exact
          path="/signin"
          render={() => (usertoken ? <Redirect to="/" /> : <Loginpage />)}
        />
      <Route path="/signup" exact component={SignupPage} />
      <Route path="/myblogs" exact component={Myblogpage} />
        <Route path="/addnewblog" exact component={Addblogpage} />
        <Route path="/userprofile" exact component={Userprofilepage} />
        <Route path={"/Education"} exact component={Catblogpage} />
        <Route path={  history.location.pathname  } exact component={Catblogpage} />
      </Router>
    </div>
  );
}

export default App;
