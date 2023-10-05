/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

export function Clasificacion({ teams }) {
  const [sortedTeams, setSortedTeams] = useState([]);
  useEffect(() => {
    const sortTeams = [...teams].sort((a, b) => {
      if (a.pts == b.pts && a.ff == b.ff) {
        return a.tf > b.tf ? -1 : 1;
      }
      if (a.pts == b.pts) {
        return a.ff > b.ff ? -1 : 1;
      }
      return a.pts > b.pts ? -1 : 1;
    });
    setSortedTeams(sortTeams);
  }, [teams]);
  return (
    <div>
      <div className="table clasificacion">
        {teams.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th colSpan={7}>Clasificación</th>
              </tr>
              <tr>
                <th>Posición</th>
                <th>Equipo</th>
                <th>Pts</th>
                <th>Pj</th>
                <th>Tf</th>
                <th>Tc</th>
                <th>ff</th>
              </tr>
            </thead>
            <tbody>
              {sortedTeams.map((team, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}º</td>
                    <td>{team.name}</td>
                    <td>{team.pts}</td>
                    <td>{team.pj}</td>
                    <td>{team.tf}</td>
                    <td>{team.tc}</td>
                    <td>{team.ff}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <table>
            <thead>
              <tr>
                <th colSpan={7}>Clasificación</th>
              </tr>
              <tr>
                <th>Posición</th>
                <th>Equipo</th>
                <th>Pts</th>
                <th>Pj</th>
                <th>Tf</th>
                <th>Tc</th>
                <th>ff</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>-----</td>
                <td>-----</td>
                <td>-----</td>
                <td>-----</td>
                <td>-----</td>
                <td>-----</td>
                <td>-----</td>
              </tr>
              <tr>
                <td>-----</td>
                <td>-----</td>
                <td>-----</td>
                <td>-----</td>
                <td>-----</td>
                <td>-----</td>
                <td>-----</td>
              </tr>
              <tr>
                <td>-----</td>
                <td>-----</td>
                <td>-----</td>
                <td>-----</td>
                <td>-----</td>
                <td>-----</td>
                <td>-----</td>
              </tr>
              <tr>
                <td>-----</td>
                <td>-----</td>
                <td>-----</td>
                <td>-----</td>
                <td>-----</td>
                <td>-----</td>
                <td>-----</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
