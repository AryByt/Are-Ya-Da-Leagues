import { useEffect, useState } from "react";
import { getLeagues } from "../services/api";
import { Link } from "react-router-dom";
export default function Leagues() {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await getLeagues();
      setLeagues(res);
    };
    getData();
  }, []);
  return (
    <div className="min-h-screen">
      {leagues.map((league) => {
        return (
          <div key={league.id}>
            <Link to={`/teams/${league.id}`}>{league.fields.league}</Link>
          </div>
        );
      })}
    </div>
  );
}
