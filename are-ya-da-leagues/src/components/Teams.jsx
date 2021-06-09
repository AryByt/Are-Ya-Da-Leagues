import React from 'react'
import {getTeam} from "../services/api"
import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
export default function Teams() {
  const [team, setTeam] = useState({})
  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    const fetch = async () => {
      const res = await getTeam(id);
      console.log(res)
      setTeam(res)
    }
    fetch();
  }, []);
  if (!team.fields) {
    return <div>Loading...</div>
  }
  return (
    <div>
      {team.fields?.info}
      <img src={team.fields?.logo} />
      <p>{team.fields?.results}</p>
    </div>
  )
}
