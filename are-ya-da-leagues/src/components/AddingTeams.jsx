import React from "react";
import { useState } from "react";
import { addTeams } from "../services/api";
import { useHistory } from "react-router-dom";

const defaultObj = {
  league: "",
  team: "",
  logo: "",
  info: "",
  comments: "Your comments:",
  standing: "",
  results: "",
  players: "",
  rating: "",
};

export default function AddingTeams() {
  const [input, setInput] = useState(defaultObj);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTeams(input);
    history.push("/teams");
  };

  return (
    <div>
      <div className="">
        <h2 className="flex-column justify-items-center">Create a Team!</h2>
        <h1 className="flex text-green-900">That's some team name :</h1>
        <p>{input.team}</p>

        <div className="flex justify-center items-center ">
          <form
            onChange={handleChange}
            onSubmit={handleSubmit}
            className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <label className="block text-gray-700 text-sm font-bold mb-2">
              League name
            </label>
            <input type="text" name="league" />

            <label className="block text-gray-700 text-sm font-bold mb-2">
              Team Name
            </label>
            <input type="text" name="team" />

            <label className="block text-gray-700 text-sm font-bold mb-2">
              Team logo
            </label>
            <input type="text" name="logo" />

            <label className="block text-gray-700 text-sm font-bold mb-2">
              standing
            </label>
            <input type="text" name="standing" />

            <label className="block text-gray-700 text-sm font-bold mb-2">
              Team info
            </label>
            <input type="text" name="info" />

            <label className="block text-gray-700 text-sm font-bold mb-2">
              Who are your Favorite Players?
            </label>
            <input type="text" name="players" />

            <label className="block text-gray-700 text-sm font-bold mb-2">
              Comments:
            </label>
            <textarea type="text" name="comments"></textarea>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              RATE{" "}
            </label>
            <input type="number" name="rating" />
            <br />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
