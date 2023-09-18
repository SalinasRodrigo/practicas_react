/* eslint-disable react/prop-types */
export function TablaEquipos ({teams}) {
  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>Equipos</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index)=> {
            return(
              <tr key={index}>
                <td>{team.name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}