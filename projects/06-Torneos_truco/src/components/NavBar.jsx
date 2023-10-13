import {matchesGenerator} from "../utility/matchesGenerator"
import logo from "../assets/cartas-espanolas.png"
/* eslint-disable react/prop-types */

export function NavBar ( {teams, setTeams, setMatches, matches, setEndMatches}) {
  const reset = () => {
    setTeams([]);
    setMatches(null);
    window.localStorage.setItem('teams', JSON.stringify([]))
    window.localStorage.setItem('matches', JSON.stringify(null))
  };

  const handleClick = () => {
    const aux_1 = matchesGenerator(teams.length);
    setMatches(aux_1);
    window.localStorage.setItem('matches', JSON.stringify(aux_1))
    const totalMatches = (aux_1.length) * (aux_1[0].length)
    const aux_2 = Array.from(Array(parseInt(totalMatches)), ( ) => false)
    setEndMatches(aux_2);
    window.localStorage.setItem('endMatches', JSON.stringify(aux_2))
  };

  return (
    <nav className="nav-bar">
      <div className="titulo">
        <img src={logo} alt="" />
        <h1>Sistema Aldo 2.0</h1>
      </div>
      <div className="nav-buttons">
        <button className="button" onClick={handleClick} disabled={teams.length < 2 || matches}>Empezar</button>
        <button className="button"onClick={reset} disabled={teams.length < 1}>Reiniciar</button>
      </div>
    </nav>
  )
}