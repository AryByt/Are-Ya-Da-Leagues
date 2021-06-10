import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTeam } from "../services/api";
export default function EditTeams() {
  const [team, setTeam] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getTeam(id);
      setTeam(res);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div>
        <h2>Edit team {team.fields?.team}</h2>
        {team && (
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
