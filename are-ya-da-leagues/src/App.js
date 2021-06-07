import { Route, Router } from 'react-router';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

 {/* Adding some routes and creating components */}
      {/* Create a components folder */}
      {/* creating a Footer component*/}
      {/* creating a Form component*/}
      {/* creating a Navbar component*/}
      {/* creating a Team component*/}
      {/* creating a TeamList component*/}
      {/* creating a AddingTeams component*/}
      {/* creating a Leagues component*/}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/">
        <div>Home</div>
      </Route>
      <Route path="/leagues">
        <div>Leagues</div>
      </Route>
      <Route path="/teams">
        <div>Teams</div>
      </Route>
      <Route path="/teams/team:id">
        <div>Team</div>
      </Route>
      <Route exact path="/edit/leagues/team/create">
        <div>AddTeam</div>
      </Route>
      <Footer />
    </div>
  )
}

export default App;
