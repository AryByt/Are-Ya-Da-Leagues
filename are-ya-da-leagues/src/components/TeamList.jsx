import { useEffect, useState } from "react";
import { getLeagues } from "../services/api";
import { Link } from "react-router-dom";
export default function TeamList() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await getLeagues();
      setTeams(res);
    };
    getData();
  }, []);
  return (
    <div>
      {teams.map((team) => {
        return (
          <div key={team.id}>
            <Link to={`/teams/${team.id}`}>{team.fields.team}</Link>
          </div>
        );
      })}
    </div>
  );
}
