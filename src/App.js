import React from 'react';
import { Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute.js';
import Unfound from './pages/errors/404.jsx';
import Home from './pages/Home';
import Admin from './pages/Admin.jsx';
import Auth from './pages/auth/Auth.jsx';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <PrivateRoute exact path='/admin/:id' component={Admin}/>
      {/**Authentications Routes */}
      <Route path="/login" component={Auth} />
      {/**NotFound Router */}
      <Route path="*" component={Unfound} />
    </Switch>
  );
}

export default App;
