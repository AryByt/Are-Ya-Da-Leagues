import React from "react";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { editTeam, getTeam } from "../services/api";

export default function EditTeams() {
  const history = useHistory();
  const [input, setInput] = useState({
    league: "",
    team: "",
    logo: "",
    info: "",
    comments: "Your comments:",
    standing: "",
    results: "",
    players: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getTeam(id);
      setInput({
        league: res.fields.league,
        team: res.fields.team,
        logo: res.fields.logo,
        info: res.fields.info,
        comments: res.fields.comments,
        results: res.fields.results,
        players: res.fields.players,
        standing: res.fields.standing,
      });
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await editTeam(input, id);
    console.log(res);
    history.push("/teams");
  };
  return (
    <div>
      <div>
        <h2 class="bg-gradient-to-r from-green-400 to-blue-500 focus:from-pink-500 focus:to-yellow-500">
          Edit team {input.team}
        </h2>
        <form onChange={handleChange} onSubmit={handleSubmit}>
          <label>League name</label>
          <input type="text" name="league" value={input.league} />
          <br />
          <label>Team Name</label>
          <input type="text" name="team" value={input.team} />
          <br />
          <label>Team logo</label>
          <input type="text" name="logo" value={input.logo} />
          <label>Rating</label>
          <input type="text" name="rating" value={input.rating} />
          <br />
          <label>Team info</label>
          <input type="text" name="info" value={input.info} />
          <br />
          <label>Comments</label>
          <input type="text" name="info" value={input.info} />
          <br />
          <label>Results</label>
          <input type="text" name="results" value={input.results} />
          <br />
          <button
            type="submit"
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
          >
            edit
          </button>
        </form>
      </div>
    </div>
  );
}
