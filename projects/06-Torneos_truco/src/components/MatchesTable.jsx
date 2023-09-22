/* eslint-disable react/prop-types */

export function MatchesTable ({teams, setTeams,matches}) {

  const handleMatchClick = (event) => {
    const evento = event.target
    const match = [evento.id[0], evento.id[2]]
    const matchId = evento.id[4]
    const fechaId = evento.id[6]
    const team1Input = document.getElementById(match[0]+","+matchId+","+fechaId)
    const team2Input = document.getElementById(match[1]+","+matchId+","+fechaId)
    if(team1Input.value == ""  || team2Input.value == "" || team1Input.value == team2Input.value){
      return
    }
    const team1Score = parseInt(team1Input.value);
    const team2Score = parseInt(team2Input.value);
    const winerScore = team1Score > team2Score ? team1Score : team2Score
    const loserScore = team1Score < team2Score ? team1Score : team2Score
    const winerId = team1Score > team2Score ? match[0] : match[1]
    const loserId = team1Score < team2Score ? match[0] : match[1]
    const newState = structuredClone(teams);
    
    if (evento.textContent == "O" ){//Aceptar
      evento.textContent = "X"
      team1Input.setAttribute("disabled", "")
      team2Input.setAttribute("disabled", "")
      newState[winerId].tf += winerScore;
      newState[winerId].tc += loserScore;
      newState[winerId].pj += 1;
      newState[winerId].pts += 1;
      newState[winerId].victories.push(loserId);
      newState[loserId].tf += loserScore;
      newState[loserId].tc += winerScore;
      newState[loserId].pj += 1;
    }
    else{//edición
      evento.textContent = "O"
      team1Input.removeAttribute('disabled');
      team2Input.removeAttribute('disabled');
      newState[winerId].tf -= winerScore;
      newState[winerId].tc -= loserScore;
      newState[winerId].pj -= 1;
      newState[winerId].pts -= 1;
      newState[winerId].victories = newState[winerId].victories.filter(e => e !== loserId);
      newState[loserId].tf -= loserScore;
      newState[loserId].tc -= winerScore;
      newState[loserId].pj -= 1;
    }
    newState.forEach((team, index) => {
      let auxFf = 0
      if(team.victories.length>0){
        for (let i = 0; i < team.victories.length; i++) {
          auxFf += newState[team.victories[i]].pts
        }
        newState[index].ff = auxFf
      }else newState[index].ff = 0
    });
    setTeams(newState)
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
                    <tr key={[index,fechaIndex]}>
                      {index%fecha.length== 0 ?<td rowSpan={fecha.length}>Fecha {fechaIndex+1}</td>:null}
                      <td>{teams[match[0]].name}</td>
                      <td>
                        <input 
                        type="number" 
                        name="team1"
                        id={[[match[0]],index,fechaIndex]} 
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
                        id={[[match[1]],index,fechaIndex]} 
                        placeholder={0}
                        min={0}
                        max={30}
                        />
                      </td>
                      <td>{teams[match[1]].name}</td>
                      <td><button onClick={handleMatchClick} id={[match,index,fechaIndex]}>O</button></td>
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
    </div>
  )
}