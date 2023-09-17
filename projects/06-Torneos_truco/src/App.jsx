import { useState } from 'react'
import './App.css'

function App() {
  const [teams, setTeams] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    const newTeam = { name: event.target.equipo.value, pts: 0, pj: 0, tf: 0, tc: 0, ff: 0};
    console.log(newTeam)
    const newTeams = [...teams,newTeam ]
    setTeams(newTeams)
    console.log(teams)
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
    <div>
      <table>
        <tr>
          <th>Equipos</th>
        </tr>
        {teams.map((team, index)=> {
          return(
            <tr key={index}>
              <td>{team.name}</td>
            </tr>
          )
        })}
      </table>
    </div>
    <div>
      <table>
        <tr>
          <th>Partidos</th>
        </tr>
        <tr>
          <th>Fecha</th>
          <th>Equipo</th>
          <th>Tantos</th>
          <th>vs</th>
          <th>Tantos</th>
          <th>Equipo</th>
        </tr>
        <tr>
          {}
          <td>PARTIDOS</td>
        </tr>
      </table>
    </div>
    <div> {/*envolver en un componentes*/}
      <table>
        <tr>
          <th>
            Clasificación
          </th>
        </tr>
        <tr>
          <th>Posición</th>
          <th>Equiupo</th>
          <th>Puntos</th>
          <th>Partidos jugados</th>
          <th>Tantos a favor</th>
          <th>Tantos en contra</th>
          <th>Factor Fuerza</th>
        </tr>
        {teams.map((team, index)=> {
          return(
            <tr key={index}>
              <td>0</td>
              <td>{team.name}</td>
              <td>{team.pts}</td>
              <td>{team.pj}</td>
              <td>{team.tf}</td>
              <td>{team.tc}</td>
              <td>{team.ff}</td>
            </tr>
          )
        })}
      </table>
    </div>
    </>
  )
}

export default App
