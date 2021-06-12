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
      setTeam(res);
    };
    fetch();
  }, [id]);

  const handleDelete = async () => {
    await deleteTeam(id);
    history.push("/teams");
  };

  if (!team.fields) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      {team.fields?.info}
      <img
        className="bg-red-400"
        width="400"
        height="500"
        src={team.fields?.logo}
        alt="logo"
      />
      {team.fields?.standing}
      {team.fields?.players}
      {team.fields?.results}
      {team.fields?.comments}

      <div>
        <Link to={`/edit/team/${team.id}`}>Fix Your Team</Link>
        <br />
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
