import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTeam } from "../services/api";
export default function EditTeams() {
  // const [team, setTeam] = useState({});
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
      // setTeam(res);
      setInput({
        league: res.fields.league,
        team: res.fields.team,
        logo: res.fields.logo,
        info: res.fields.info,
      });
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // being able to change the value of a typed in field.
    setInput((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  return (
    <div>
      <div>
        <h2>Edit team {input.team}</h2>
        <form onChange={handleChange}>
          <label>League name</label>
          <input type="text" name="league" value={input.league} />
          <br />
          <label>Team Name</label>
          <input type="text" name="team" value={input.team} />
          <br />
          <label>Team logo</label>
          <input type="text" name="logo" value={input.logo} />
          <br />
          <label>Team info</label>
          <input type="text" name="info" value={input.info} />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
