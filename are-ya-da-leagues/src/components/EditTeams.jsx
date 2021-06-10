import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addTeams } from "../services/api";
export default function EditTeams() {
  const [team, setTeam] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await addTeams(id);
      setTeam(res);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div>
        <h2>Create a new Team</h2>
        {team.fields && (
          <form>
            <label>League name</label>
            <input type="text" name="leagues" />
            <br />
            <label>Team Name</label>
            <input type="text" name="teams" />
            <br />
            <label>Team logo</label>
            <input type="text" name="logo" />
            <br />
            <label>Team info</label>
            <input type="text" name="info" />
            <br />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}
