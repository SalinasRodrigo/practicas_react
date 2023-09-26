/* eslint-disable react/prop-types */

import { useEffect } from "react";

export function MatchesTable({ teams, setTeams, matches, setMatches }) {

  useEffect(()=>{
    if(matches){
      matches.forEach((fecha, index)=>{
        const fechaIndex = index
        fecha.forEach((match, index)=>{
          const inputTeam1 = document.getElementById(match[0] + "," + index + "," + fechaIndex)
          const inputTeam2 = document.getElementById(match[1] + "," + index + "," + fechaIndex)
          const buttonMatch = document.getElementById(match[0] + "," + match[1] + "," + index + "," + fechaIndex)
          if(match.length>2 && match[2] != 0 && match[3] != 0){
            inputTeam1.value = match[2]
            inputTeam2.value = match[3]
            inputTeam1.setAttribute("disabled", "");
            inputTeam2.setAttribute("disabled", "");
            buttonMatch.textContent = "X"
          }else{
            inputTeam1.value = ""
            inputTeam2.value = ""
          }
        })
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleMatchClick = (event) => {
    const evento = event.target;
    const match = [evento.id[0], evento.id[2]];
    const matchId = evento.id[4];
    const fechaId = evento.id[6];
    const team1Input = document.getElementById(
      match[0] + "," + matchId + "," + fechaId
    );
    const team2Input = document.getElementById(
      match[1] + "," + matchId + "," + fechaId
    );
    if (
      team1Input.value == "" ||
      team2Input.value == "" ||
      team1Input.value > 30 ||
      team2Input.value > 30 ||
      team1Input.value == team2Input.value
    ) {
      return;
    }
    const team1Score = parseInt(team1Input.value);
    const team2Score = parseInt(team2Input.value);
    const winerScore = team1Score > team2Score ? team1Score : team2Score;
    const loserScore = team1Score < team2Score ? team1Score : team2Score;
    const winerId = team1Score > team2Score ? match[0] : match[1];
    const loserId = team1Score < team2Score ? match[0] : match[1];
    const newState = structuredClone(teams);
    const newMatches = structuredClone(matches);

    if (evento.textContent == "O") {
      //Aceptar
      evento.textContent = "X";
      team1Input.setAttribute("disabled", "");
      team2Input.setAttribute("disabled", "");
      newState[winerId].tf += winerScore;
      newState[winerId].tc += loserScore;
      newState[winerId].pj += 1;
      newState[winerId].pts += 1;
      newState[winerId].victories.push(loserId);
      newState[loserId].tf += loserScore;
      newState[loserId].tc += winerScore;
      newState[loserId].pj += 1;
      newMatches[fechaId][matchId][2]=team1Score
      newMatches[fechaId][matchId][3]=team2Score
      setMatches(newMatches)
    } else {
      //edición
      evento.textContent = "O";
      team1Input.removeAttribute("disabled");
      team2Input.removeAttribute("disabled");
      newState[winerId].tf -= winerScore;
      newState[winerId].tc -= loserScore;
      newState[winerId].pj -= 1;
      newState[winerId].pts -= 1;
      newState[winerId].victories = newState[winerId].victories.filter(
        (e) => e !== loserId
      );
      newState[loserId].tf -= loserScore;
      newState[loserId].tc -= winerScore;
      newState[loserId].pj -= 1;
      newMatches[fechaId][matchId][2]= 0
      newMatches[fechaId][matchId][3]= 0
      setMatches(newMatches)
    }
    newState.forEach((team, index) => {
      let auxFf = 0;
      if (team.victories.length > 0) {
        for (let i = 0; i < team.victories.length; i++) {
          auxFf += newState[team.victories[i]].pts;
        }
        newState[index].ff = auxFf;
      } else newState[index].ff = 0;
    });
    setTeams(newState);
    window.localStorage.setItem('teams', JSON.stringify(newState));
    window.localStorage.setItem('matches', JSON.stringify(newMatches));
  };

  return (
    <div>
      <div className="table maches">
        {matches ? (
          <table>
            <thead>
              <tr className="cabecera">
                <th colSpan={7}>Partidos</th>
              </tr>
              <tr>
                <th>Fecha</th>
                <th>Equipo</th>
                <th>Tantos</th>
                <th>vs</th>
                <th>Tantos</th>
                <th>Equipo</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {matches.map((fecha, index) => {
                const fechaIndex = index;
                return (
                  <>
                    {fecha.map((match, index) => {
                      return (
                        <tr key={[index, fechaIndex]}>
                          {index % fecha.length == 0 ? (
                            <td rowSpan={fecha.length} style={{
                              backgroundColor: (fechaIndex%2 == 0) ? "#12710C" : "#199E11"
                            }}>
                              Fecha {fechaIndex + 1}
                            </td>
                          ) : null}
                          <td>
                            {teams[match[0]].name}</td>
                          <td>
                            <input
                              type="number"
                              name="team1"
                              id={[[match[0]], index, fechaIndex]}
                              placeholder={0}
                              min={0}
                              max={30}
                            />
                          </td>
                          <td>vs</td>
                          <td>
                            <input
                              type="number"
                              name="team1"
                              id={[[match[1]], index, fechaIndex]}
                              placeholder={0}
                              min={0}
                              max={30}
                            />
                          </td>
                          <td>{teams[match[1]].name}</td>
                          <td>
                            <button
                              className="button button-matches"
                              onClick={handleMatchClick}
                              id={[match[0], match[1], index, fechaIndex]}
                            >
                              O
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </>
                );
              })}
            </tbody>
          </table>
        ) : (
          <table>
            <thead>
              <tr className="cabecera">
                <th colSpan={7}>Partidos</th>
              </tr>
              <tr>
                <th>Fecha</th>
                <th>Equipo</th>
                <th>Tantos</th>
                <th>vs</th>
                <th>Tantos</th>
                <th>Equipo</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>----</td>
                <td>----</td>
                <td>----</td>
                <td>----</td>
                <td>----</td>
                <td>----</td>
                <td>----</td>
              </tr>
              <tr>
                <td>----</td>
                <td>----</td>
                <td>----</td>
                <td>----</td>
                <td>----</td>
                <td>----</td>
                <td>----</td>
              </tr>
              <tr>
                <td>----</td>
                <td>----</td>
                <td>----</td>
                <td>----</td>
                <td>----</td>
                <td>----</td>
                <td>----</td>
              </tr>
              <tr>
                <td>----</td>
                <td>----</td>
                <td>----</td>
                <td>----</td>
                <td>----</td>
                <td>----</td>
                <td>----</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
