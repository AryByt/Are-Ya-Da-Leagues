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
    <div className="min-h-screen">
      <h1 className="text-red-900 flex-shrink md:text-2xl sm:text-lg justify-start shadow-2xl rounded px-5 pt-5 pb-5 mb-8 bg-red-300">
        create your team! add it to the list!
      </h1>
      <div className="flex items-center justify-center">
        <p> Name: {input.team}</p>
      </div>

      <div className="flex justify-center items-center ">
        <form
          onChange={handleChange}
          onSubmit={handleSubmit}
          className="bg-gray-100 shadow-2xl rounded px-10 pt-10 pb-10 mb-4 "
        >
          <label className="block text-gray-700 text-lg font-bold mb-2">
            League name
          </label>
          <input type="text" name="league" />

          <label className="block text-gray-700 text-lg font-bold mb-2 mt-2">
            Team Name
          </label>
          <input type="text" name="team" />

          <label className="block text-gray-700 text-lg font-bold mb-2 mt-2">
            Team logo
          </label>
          <input type="text" name="logo" />

          <label className="block text-gray-700 text-lg font-bold mb-2 mt-2">
            standing
          </label>
          <input type="text" name="standing" />

          <label className="block text-gray-700 text-lg font-bold mb-2 mt-2">
            Team info
          </label>
          <input type="text" name="info" />

          <label className="block text-gray-700 text-lg font-bold mb-2 mt-2">
            Who are your Favorite Players?
          </label>
          <input type="text" name="players" />

          <label className="block text-gray-700 text-lg font-bold mb-2 mt-2">
            Comments:
          </label>
          <textarea type="text" name="comments"></textarea>
          <label className="block text-gray-700 text-lg font-bold mb-2">
            RATE
          </label>
          <input type="number" name="rating" />
          <br />
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold mt-3 py-7 px-7 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
