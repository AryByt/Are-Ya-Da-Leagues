import { useEffect, useState } from "react";
import { fetchData } from "../services/api";
import { Link } from "react-router-dom";
export default function TeamList() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetchData();
      setTeams(res);
    };
    getData();
  }, []);
  return (
    <div className="min-h-screen ">
      <div className="max-w-md mx-auto bg-gray-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        {teams.map((team) => {
          return (
            <div
              className=" w-1/12 flex items-center justify-center m-auto p-2"
              key={team.id}
            >
              <Link to={`/teams/${team.id}`}>
                {team.fields.team}
                <img src={team.fields.logo} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
