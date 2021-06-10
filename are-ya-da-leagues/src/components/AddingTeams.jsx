import React from "react";
import { useState } from "react";
import { addTeams } from "../services/api";
import { useHistory } from "react-router-dom";

const defaultObj = {
  league: "",
  team: "",
  logo: "",
  info: "",
  rating: "",
  comments: "Your comments:",
  standing: "",
  results: "",
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
      <h2>Create a new {input.team}</h2>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>League name</label>
        <input type="text" name="league" />
        <br />
        <label>Team Name</label>
        <input type="text" name="team" />
        <br />
        <label>Team logo</label>
        <input type="text" name="logo" />
        <br />
        <label>Team info</label>
        <input type="text" name="info" />
        <br />
        <label>
          comments
          <textarea name="comments" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
