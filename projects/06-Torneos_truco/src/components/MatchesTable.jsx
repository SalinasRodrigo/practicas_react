/* eslint-disable react/prop-types */

import { useState } from "react"
import { matchesGenerator } from "../utility/matchesGenerator"

export function MatchesTable ({teams}) {

  const [matches, setMatches] = useState(null)
  
  const handleClick = () => {
    const aux = matchesGenerator(teams.length)
    setMatches(aux) 
  }
  return(
    <div>
      <table>
        <thead>
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
        </thead>
        <tbody>
          { matches ? 
          matches.map((fecha, index) => {
            const fechaIndex = index
            return(
              <>
                {fecha.map((match, index)=>{
                  return(
                    <tr key={index}>
                      {index%fecha.length== 0 ?<td rowSpan={fecha.length}>Fecha {fechaIndex+1}</td>:null}
                      <td>{teams[match[0]].name}</td>
                      <td>0</td>
                      <td>vs</td>
                      <td>0</td>
                      <td>{teams[match[1]].name}</td>
                    </tr>
                  )
                })}
              </>
            )
          }) :
          <tr>
            <td>AAAAAAAAA</td>
          </tr> 
          }
        </tbody>
      </table>
      <button onClick={handleClick}>Empezar</button>
    </div>
  )
}