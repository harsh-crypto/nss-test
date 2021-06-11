import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/home';
import Social from './components/Social';
import about from './components/pages/about';
import projects from './components/pages/projects';
/*import portal from './components/pages/portal';*/
import Under_main from './components/pages/Under_main';
function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Social />
        <Switch>
          <Route path = '/' exact component = {Home} ></Route>
          <Route path = '/about' exact component = {about} ></Route>
          <Route path = '/projects' exact component = {projects} ></Route>
          <Route path = '/portal' exact component = {Under_main} ></Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
