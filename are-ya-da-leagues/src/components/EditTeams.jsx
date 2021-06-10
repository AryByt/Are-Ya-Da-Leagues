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
        rating: res.fields.rating,
        comments: res.fields.comments,
      });
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
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
        <h2>Edit team {input.team}</h2>
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
          <input type="text" name="comments" value={input.comments} />
          <br />
          <button type="submit">edit</button>
        </form>
      </div>
    </div>
  );
}
