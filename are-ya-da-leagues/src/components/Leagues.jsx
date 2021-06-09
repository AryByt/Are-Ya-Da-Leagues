import { useEffect, useState } from "react"
import { getLeagues } from "../services/api"
import {Link} from "react-router-dom"
export default function Leagues() {

  const [leagues, setLeagues] = useState([])

  useEffect(() => {
    const getData = async () => {
      const res = await getLeagues();
      setLeagues(res)
    }
    getData()
  },[])
  return <div>
    {leagues.map(league => {
      return <div key={league.id}>
        <Link to={`/teams/team${league.id}`}>{league.fields.leagues}</Link>
      </div>
    })}
    </div>
}
