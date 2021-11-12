import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Explore from './Pages/Explore/Explore';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route exact to="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
