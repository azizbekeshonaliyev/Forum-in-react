import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

const TheLayout = React.lazy(() => import('./containers/TheLayout'));

const Login = React.lazy(() => import('./views/Auth/Login'));
const Register = React.lazy(() => import('./views/Auth/Register'));

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

function App() {
  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
          <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
          <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
