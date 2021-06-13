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
    <div className="min-h-screen">
      <div className="bg-gray-400 flex justify-between items-center">
        {teams.map((team) => {
          return (
            <div className="" key={team.id}>
              <Link to={`/teams/${team.id}`}>
                {team.fields.team}
                <img src={team.fields.logo} alt="" className="w-screen h-40" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
