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
  }, []);

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
    <div>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <h1>
          Here's the Team
          {team.fields?.info}
          <img className="bg-yellow-50" src={team.fields?.logo} alt="logo" />
        </h1>
        <p className="p-6 max-w-sm mx-auto bg-red-300 rounded-xl shadow-md flex items-center space-x-4">
          {team.fields?.standing}
        </p>
      </div>
      <h4 className="p-6 max-w-sm mx-auto bg-pink-300 rounded-xl shadow-md flex items-center space-x-4">
        Star Players : {team.fields?.players}
      </h4>
      <p>{team.fields?.results}</p>
      <h1>Comments:</h1>
      <p>{team.fields?.comments}</p>
      <h2>Rating:</h2>
      <div>
        <StarPicker
          className=""
          onChange={onChange}
          value={team.fields?.rating}
          name="rating"
          numberStars={10}
        />
      </div>
      <Link to={`/edit/team/${team.id}`}>
        <br />
        Fix Your Team
      </Link>
      <br />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
