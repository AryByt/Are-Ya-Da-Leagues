import React from "react";
import { deleteTeam, getTeam } from "../services/api";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
//eslint-disable-next-line
import StarPicker from "react-star-picker";

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
  const onChange = (value, name) => {
    setTeam((prevValues) => ({ ...prevValues, [name]: value }));
  };

  if (!team.fields) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" min-h-screen bg-gray-300 ">
      <div className="p-6 hover:bg-gray-600 hover:text-white transition duration-300 ease-in flex-row justify-between items-center">
        {team.fields?.info}
        <img
          className=" mt-4 rounded border shadow-2xl"
          width="400"
          height="500"
          src={team.fields?.logo}
          alt="logo"
          // eslint-disable-next-line react/jsx-no-comment-textnodes
        />
        <StarPicker
          className=""
          onChange={onChange}
          value={team.fields?.rating}
          name="rating"
          numberStars={10}
        />
      </div>
      <div className="text-gray-500 md:mb-5 md:mt-3 md:p-4 lg:mb-0 border bg-gray-200">
        <p className="">
          {team.fields?.standing}
          <br />
          <p className="">{team.fields?.results}</p>
        </p>
        <br />
        <p className="">{team.fields?.players}</p>
        <p className="">{team.fields?.comments}</p>
      </div>

      <div>
        <Link
          to={`/edit/team/${team.id}`}
          className="bg-gray-400 hover:bg-gray-700 text-white font-bold p-3  rounded focus:outline-none focus:shadow-outline justify-between  "
        >
          Fix Your Team
        </Link>

        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold p-5 rounded focus:outline-none focus:shadow-outline"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
