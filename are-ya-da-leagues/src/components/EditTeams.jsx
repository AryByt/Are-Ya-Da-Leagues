import React from "react";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { editTeam, getTeam } from "../services/api";
import StarPicker from "react-star-picker";

export default function EditTeams() {
  const history = useHistory();
  const [input, setInput] = useState({
    league: "",
    team: "",
    logo: "",
    info: "",
    comments: "Your comments:",
    standing: "",
    results: "",
    players: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getTeam(id);
      setInput({
        league: res.fields.league,
        team: res.fields.team,
        logo: res.fields.logo,
        info: res.fields.info,
        comments: res.fields.comments,
        results: res.fields.results,
        players: res.fields.players,
        standing: res.fields.standing,
        country: res.fields.country,
      });
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await editTeam(input, id);
    console.log(res);
    history.push("/teams");
  };
  const onChange = (value, name) => {
    setInput((prevValues) => ({ ...prevValues, [name]: value }));
  };
  return (
    <div className="min-h-screen lg:text-4xl md:text-2xl sm:text-base font-mono">
      <div className="text-red-900 flex-shrink md:text-2xl sm:text-lg rounded px-3 pt-3 pb-3 bg-red-300">
        <h2>Edit {input.team}</h2>
      </div>
      <div className="flex justify-center items-center mt-4 ">
        <form
          onChange={handleChange}
          onSubmit={handleSubmit}
          className="bg-gray-100 shadow-2xl rounded px-10 pt-10 pb-10 mb-4 "
        >
          <label className="block text-gray-700 text-lg font-bold mt-3">
            League name
          </label>
          <input type="text" name="league" value={input.league} />
          <label className="block text-gray-700 text-lg font-bold mt-3">
            League logo
          </label>
          <input type="url" name="country" value={input.country} />
          <label className="block text-gray-700 text-lg font-bold mt-3">
            Team Name
          </label>
          <input type="text" name="team" value={input.team} />
          <label className="block text-gray-700 text-lg font-bold mt-3">
            Team logo
          </label>
          <input type="text" name="logo" value={input.logo} />

          <label className="block text-gray-700 text-lg font-bold mt-3">
            Team info
          </label>
          <input type="text" name="info" value={input.info} />
          <label className="block text-gray-700 text-lg font-bold mt-3">
            Comments
          </label>
          <input type="text" name="info" value={input.info} />
          <label className="block text-gray-700 text-lg font-bold  mt-3">
            Results
          </label>
          <input type="text" name="results" value={input.results} />
          <label className="block text-gray-700 font-bold mt-3">Rating:</label>
          <StarPicker
            onChange={onChange}
            value={input.rating}
            name="rating"
            numberStars={10}
          />
          <br />
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold mt-3 py-7 px-7 rounded focus:outline-none focus:shadow-outline"
          >
            edit
          </button>
        </form>
      </div>
    </div>
  );
}
