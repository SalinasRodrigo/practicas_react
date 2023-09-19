import { useState } from 'react'
import './App.css'
import { Clasificacion } from './components/Clasificacion'
import { TablaEquipos } from './components/TablaEquipos'
import { MatchesTable } from './components/MatchesTable'

function App() {
  const [teams, setTeams] = useState([])
  

  const handleSubmit = (event) => {
    event.preventDefault()
    const newTeam = { name: event.target.equipo.value, pts: 0, pj: 0, tf: 0, tc: 0, ff: 0, victories:[]};
    const newTeams = [...teams,newTeam ]
    setTeams(newTeams)
  }

  

  return (
    <>
    <div >
      <form onSubmit={handleSubmit}>
        <label htmlFor="equipo">Agregas equipo</label>
        <input type="text" name="equipo" id="equipo" />
        <input type="submit" value="+"/>
      </form>
    </div>
    <TablaEquipos teams={teams}/>
    <MatchesTable teams={teams} setTeams={setTeams} />
    <Clasificacion teams={teams}/>
    </>
  )
}

export default App
