import { Route, Router } from 'react-router';
import './App.css';
import Footer from './components/Footer';
import Leagues from './components/Leagues';
import Navbar from './components/Navbar';
import TeamList from './components/TeamList';
import getLeagues  from "./services/api"
import Teams from './components/Teams';
import AddingTeams from './components/AddingTeams';


 {/* Adding some routes and creating components */}
      {/* Create a components folder */}
      {/* creating a Footer component*/}
      {/* creating a Form component*/}
      {/* creating a Navbar component*/}
      {/* creating a Team component*/}
      {/* creating a TeamList component*/}
      {/* creating a AddingTeams component*/}
      {/* creating a Leagues component*/}
      {/* adding links and navbar*/}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <div></div>
      </Route>
      <Route path="/leagues">
        <Leagues/>
      </Route>
      <Route exact path="/teams">
      <TeamList/>
      </Route>
      <Route path="/teams/:id">
        <Teams/>
      </Route>
      <Route exact path="/team/create">
        <AddingTeams/>
      </Route>
      <Route path="/edit/team/:id">
        <div></div>
      </Route>
      <Footer />
    </div>
  )
}

export default App;

