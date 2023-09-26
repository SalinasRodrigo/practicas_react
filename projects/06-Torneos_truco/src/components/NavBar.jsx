import {matchesGenerator} from "../utility/matchesGenerator"
/* eslint-disable react/prop-types */

export function NavBar ( {teams, setTeams, setMatches, matches}) {
  const reset = () => {
    setTeams([]);
    setMatches(null);
    window.localStorage.setItem('teams', JSON.stringify([]))
    window.localStorage.setItem('matches', JSON.stringify(null))
  };

  const handleClick = () => {
    const aux = matchesGenerator(teams.length);
    setMatches(aux);
    window.localStorage.setItem('matches', JSON.stringify(aux))
  };

  return (
    <div className="nav-bar">
      <div className="titulo">
        <h1>Sistema Aldo 2.0</h1>
      </div>
      <div className="nav-buttons">
        <button className="button" onClick={handleClick} disabled={teams.length < 2 || matches}>Empezar</button>
        <button className="button"onClick={reset} disabled={teams.length < 1}>Reiniciar</button>
      </div>
    </div>
  )
}