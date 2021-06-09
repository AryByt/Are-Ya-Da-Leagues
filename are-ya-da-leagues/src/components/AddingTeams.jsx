import React from 'react'
import {useState} from "react"


const defaultObj = {
  name: "",
  logo: "",
  info: "",
};

export default function AddingTeams() {
  const [input, setInput] = useState(defaultObj)

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setInput(prevInput => ({
      ...prevInput,
      [name]: value,
    }))
  }

  return (
    <div>
      <h2>Create a new Team</h2>
      <form onChange={handleChange}>
        <label>Team Name</label>
        <input type="text" name="name"/>
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
  )
}
