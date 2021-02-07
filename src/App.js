import "./App.css";
import LoginPage from "./Components/LoginPage";
import SideBar from "../src/Components/SideBar";
import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/dashboard">
            <SideBar />
            <NavBar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
