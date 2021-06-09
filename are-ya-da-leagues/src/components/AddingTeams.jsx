import React from "react";
import { useState } from "react";
import { addTeams } from "../services/api";

const defaultObj = {
  leagues: "",
  teams: "",
  logo: "",
  info: "",
};

export default function AddingTeams() {
  const [input, setInput] = useState(defaultObj);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await addTeams(input);
    console.log(res);
    return res;
  };

  return (
    <div>
      <h2>Create a new Team</h2>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>League name</label>
        <input type="text" name="leagues" />
        <br />
        <label>Team Name</label>
        <input type="text" name="teams" />
        <br />
        <label>Team logo</label>
        <input type="text" name="logo" />
        <br />
        <label>Team info</label>
        <input type="text" name="info" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
