import React from "react";
import { deleteTeam, getTeam } from "../services/api";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

export default function Teams() {
  const history = useHistory();
  const [team, setTeam] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetch = async () => {
      const res = await getTeam(id);
      console.log(res);
      setTeam(res);
    };
    fetch();
  }, []);

  const handleDelete = async () => {
    const res = await deleteTeam(id);
    console.log(res);
    history.push("/teams");
  };

  if (!team.fields) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Rating:</h2>
      <p>{team.fields?.rating}</p>
      <h1>Here's the Team</h1>
      {team.fields?.info}
      <img src={team.fields?.logo} />
      <h3 className="text-blue-600 text-2xl">{team.fields?.standing}</h3>
      <h4>Star Players : {team.fields?.players}</h4>
      <p>{team.fields?.results}</p>
      <h1>Comments:</h1>
      <p>{team.fields?.comments}</p>
      <h2>Rating:</h2>
      <p>{team.fields?.rating}</p>

      <Link to={`/edit/team/${team.id}`}>
        <br />
        Fix Your Team
      </Link>
      <br />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
