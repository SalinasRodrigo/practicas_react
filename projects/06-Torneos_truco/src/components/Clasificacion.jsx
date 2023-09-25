/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

export function Clasificacion({ teams }) {
  const [sortedTeams, setSortedTeams] = useState([]);
  useEffect(() => {
    const sortTeams = [...teams].sort((a, b) => {
      if (a.pts == b.pts && a.ff == b.ff) {
        return a.tf - a.tc > b.tf - b.tc ? -1 : 1;
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
      <div className="table">
        {teams.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th colSpan={7}>Clasificación</th>
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
                <th>Equiupo</th>
                <th>Puntos</th>
                <th>Partidos jugados</th>
                <th>Tantos a favor</th>
                <th>Tantos en contra</th>
                <th>Factor Fuerza</th>
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
