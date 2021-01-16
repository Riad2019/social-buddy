import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import StatusDetails from './Components/StatusDetails/StatusDetails';


function App() {
  return (
    <Router >
            <Header></Header>


       <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/statusDetail/:id">

            <StatusDetails></StatusDetails>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
     
      
      
      
    </Router>
  );
}

export default App;
