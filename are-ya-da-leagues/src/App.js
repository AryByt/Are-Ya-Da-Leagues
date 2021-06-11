import { Route } from "react-router";
import Footer from "./components/Footer";
import Leagues from "./components/Leagues";
import Navbar from "./components/Navbar";
import TeamList from "./components/TeamList";
import Teams from "./components/Teams";
import AddingTeams from "./components/AddingTeams";
import EditTeams from "./components/EditTeams";
import Home from "./components/Home";
import { Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/leagues">
          <Leagues />
        </Route>
        <Route exact path="/teams">
          <TeamList />
        </Route>
        <Route path="/teams/:id">
          <Teams />
        </Route>
        <Route exact path="/team/create">
          <AddingTeams />
        </Route>
        <Route path="/edit/team/:id">
          <EditTeams />
        </Route>
        <Route path="/team/:id"></Route>
        <Home />
        <Route path="/"></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
