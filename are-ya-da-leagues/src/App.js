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
      {/* adding links and navbar*/}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <div></div>
      </Route>
      <Route exact path="/leagues">
        <div></div>
      </Route>
      <Route exact path="/teams">
        <div></div>
      </Route>
      <Route path="/teams/team:id">
        <div></div>
      </Route>
      <Route exact path="/create/leagues/team/">
        <div></div>
      </Route>
      <Footer />
    </div>
  )
}

export default App;
