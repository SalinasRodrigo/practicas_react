import {matchesGenerator} from "../utility/matchesGenerator"
/* eslint-disable react/prop-types */

export function NavBar ( {teams, setTeams, setMatches, matches}) {
  const reset = () => {
    setTeams([]);
    setMatches(null);
  };

  const handleClick = () => {
    const aux = matchesGenerator(teams.length);
    setMatches(aux);
  };

  return (
    <div className="nav-bar">
      <div className="nav-buttons">
        <button className="button" onClick={handleClick} disabled={teams.length < 2 || matches}>Empezar</button>
        <button className="button"onClick={reset} disabled={teams.length < 1}>Reiniciar</button>
      </div>
    </div>
  )
}