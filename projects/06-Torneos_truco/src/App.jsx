import { useState } from 'react'
import './App.css'
import { Clasificacion } from './components/Clasificacion'
import { TablaEquipos } from './components/TablaEquipos'
import { MatchesTable } from './components/MatchesTable'
import { matchesGenerator } from './utility/matchesGenerator'

function App() {
  const [teams, setTeams] = useState([])
  const [matches, setMatches] = useState(null)
  
  const handleClick = (event) => {
    if (teams.length>1){
      event.target.style.display = 'none';
    }
    else{
      return
    }
    const aux = matchesGenerator(teams.length)
    setMatches(aux)
  }
  

  const handleSubmit = (event) => {
    event.preventDefault()
    if(event.target.equipo.value==""){
      return
    }
    const newTeam = { name: event.target.equipo.value, pts: 0, pj: 0, tf: 0, tc: 0, ff: 0, victories:[]};
    const newTeams = [...teams,newTeam ]
    setTeams(newTeams)
  }

  const reset = () => {
    setTeams([])
    setMatches(null)
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
    {!matches && teams.length > 1 ? <button onClick={handleClick}>Empezar</button> : <></>}
    {teams.length > 0 ? <button onClick={reset}>Reiniciar</button> : <></>}
    {teams.length > 0 ? <TablaEquipos teams={teams}/>: <></>}
    {matches ? <MatchesTable teams={teams} setTeams={setTeams} matches={matches} /> : <></>}
    {teams.length > 0 ? <Clasificacion teams={teams}/> : <></>}
    </>
  )
}

export default App
