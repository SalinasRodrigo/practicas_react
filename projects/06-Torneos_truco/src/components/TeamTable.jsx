import { PlusIcon } from "../icons/PlusIcon";

/* eslint-disable react/prop-types */
export function TeamTable({ teams, setTeams, matches }) {


  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.equipo.value == "") {
      return;
    }
    const newTeam = {
      name: event.target.equipo.value,
      pts: 0,
      pj: 0,
      tf: 0,
      tc: 0,
      ff: 0,
      victories: [],
    };
    const newTeams = [...teams, newTeam];
    setTeams(newTeams);
    event.target.equipo.value = ""
    window.localStorage.setItem('teams', JSON.stringify(newTeams))
  };

  return (
    <div>
      <div className="table">
        {matches? <></>:<div className="inputs">
          <form onSubmit={handleSubmit}>
            <label htmlFor="equipo" ><b>Agregas equipo</b></label>
            <div className="team-name-input">
              <input type="text" name="equipo" id="equipo" className="input-team" />
              <button type="submit" className="input-button"><PlusIcon/></button>
            </div>
          </form>
        </div>}
        {teams.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Equipos</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => {
                return (
                  <tr key={index}>
                    <td>{team.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Equipos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>-------</td>
              </tr>
              <tr>
                <td>-------</td>
              </tr>
              <tr>
                <td>-------</td>
              </tr>
              <tr>
                <td>-------</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
