import { useState } from "react";
import "./App.css";
import { Clasificacion } from "./components/Clasificacion";
import { TeamTable } from "./components/TeamTable";
import { MatchesTable } from "./components/MatchesTable";
import { NavBar } from "./components/NavBar";

const teamIniciaState = JSON.parse(window.localStorage.getItem('teams')) || [];
const matchesIniciaState = JSON.parse(window.localStorage.getItem('matches')) || null;
const endMatchesIniciaState = JSON.parse(window.localStorage.getItem('endMatches')) || [];

function App() {
  const [teams, setTeams] = useState(teamIniciaState);
  const [matches, setMatches] = useState(matchesIniciaState);
  const [endMatches, setEndMatches] = useState(endMatchesIniciaState);


  return (
    <>
      <header>
        <NavBar teams={teams} matches={matches} setMatches={setMatches} setTeams={setTeams} setEndMatches={setEndMatches} />
      </header>
      <main>
        <div className="container">
          <TeamTable teams={teams} setMatches={setMatches} setTeams={setTeams} />
          <MatchesTable teams={teams} setTeams={setTeams} matches={matches} setMatches={setMatches} endMatches={endMatches} setEndMatches={setEndMatches} />
          <Clasificacion teams={teams} />
        </div>
      </main>
    </>
  );
}

export default App;
