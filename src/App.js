import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Chat from "./pages/chatEngine/ChatEngine";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import Messenger from "./pages/messenger/Messenger.jsx";
import Tasks from "./pages/tasks/Tasks";



function App() {

  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Login />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Login />}
        </Route>

        <Route path="/messenger">
          {!user ? <Redirect to="/" /> : <Chat />}
        </Route>

        <Route path="/tasks">
          <Tasks />
        </Route>


        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;