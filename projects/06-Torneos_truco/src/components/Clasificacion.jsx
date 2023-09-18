/* eslint-disable react/prop-types */

export function Clasificacion ( {teams}) {
  return(
    <div> {/*envolver en un componentes*/}
      <table>
        <thead>
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
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </div>
  )
}