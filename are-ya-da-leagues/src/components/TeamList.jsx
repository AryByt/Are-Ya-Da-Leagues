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
    <div className="bg-gray-400">
      {teams.map((team) => {
        return (
          <div
            className="font-bold flex-row p-9 justify-between items-center"
            key={team.id}
          >
            <Link to={`/teams/${team.id}`}>
              {team.fields.team}
              <img
                src={team.fields.logo}
                alt=""
                className="object-contain h-48 w-full ..."
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
