import React from "react";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { editTeam, getTeam } from "../services/api";

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
  return (
    <div className="min-h-screen lg:text-5xl md:text-2xl sm:text-base">
      <div className="flex justify-center items-center mt-5 mb-5 ">
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
          <br />
          <label className="block text-gray-700 text-lg font-bold mt-3">
            League logo
          </label>
          <input type="url" name="country" value={input.country} />
          <br />
          <label className="block text-gray-700 text-lg font-bold mt-3">
            Team Name
          </label>
          <input type="text" name="team" value={input.team} />
          <br />
          <label className="block text-gray-700 text-lg font-bold mt-3">
            Team logo
          </label>
          <input type="text" name="logo" value={input.logo} />
          <label className="block text-gray-700 text-lg font-bold mt-3">
            Rating
          </label>
          <input
            type="number"
            name="rating"
            placeholder="max is 10"
            value={input.rating}
          />
          <br />
          <label className="block text-gray-700 text-lg font-bold mt-3">
            Team info
          </label>
          <input type="text" name="info" value={input.info} />
          <br />
          <label className="block text-gray-700 text-lg font-bold mt-3">
            Comments
          </label>
          <input type="text" name="info" value={input.info} />
          <br />
          <label className="block text-gray-700 text-lg font-bold  mt-3">
            Results
          </label>
          <input type="text" name="results" value={input.results} />
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
