import React from "react";
import { deleteTeam, getTeam } from "../services/api";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import StarPicker from "react-star-picker";

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
  }, [id]);

  const handleDelete = async () => {
    const res = await deleteTeam(id);
    console.log(res);
    history.push("/teams");
  };
  const onChange = (value, name) => {
    setTeam((prevValues) => ({ ...prevValues, [name]: value }));
  };

  if (!team.fields) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-red-600 ">
      <div>
        <h1>
          Here's the Team
          {team.fields?.info}
          <img className="bg-yellow-50" src={team.fields?.logo} alt="logo" />
          <div>
            <StarPicker
              className=""
              onChange={onChange}
              value={team.fields?.rating}
              name="rating"
              numberStars={10}
            />
          </div>
        </h1>
        <p>{team.fields?.standing}</p>
      </div>
      <h1>Star Players : {team.fields?.players}</h1>
      <p>{team.fields?.results}</p>
      <h1>Comments:</h1>
      <p>{team.fields?.comments}</p>
      <Link to={`/edit/team/${team.id}`}>
        <br />
        Fix Your Team
      </Link>
      <br />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
