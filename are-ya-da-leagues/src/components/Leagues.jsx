import { useEffect, useState } from "react";
import { fetchData } from "../services/api";
import { Link } from "react-router-dom";
export default function Leagues() {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetchData();
      setLeagues(res);
    };
    getData();
  }, []);
  return (
    <div className="min-h-screen">
      {leagues.map((league) => {
        return (
          <div
            className=" w-1/3 lg:w-1/12 flex items-center justify-center m-auto p-2"
            key={league.id}
          >
            <Link to={`/teams/${league.id}`}>
              <img src={league.fields.country} alt="" />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
