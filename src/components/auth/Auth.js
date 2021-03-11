import Login from './Login';
import Register from './Register';
import {
    Switch,
    Route,
    // Redirect,
    useRouteMatch,
    // useParams
  } from "react-router-dom";

const Auth = (props) => {
    let match = useRouteMatch();

    return (
        <div>
           {/* <h1>Auth page</h1> */}
           <Switch>
               <Route path={`${match.url}/login`}>
                   <Login />
               </Route>
               <Route path={`${match.url}/register`}>
                   <Register />
               </Route>
               {/* <Route to={`${match.url}\logout`}></Route> */}
           </Switch>
        </div>

    )
}

export default Auth;