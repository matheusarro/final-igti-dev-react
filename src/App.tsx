import { AppContainer } from "./components/atoms";
import { ChampionshipStandings } from "./pages";
import { getStandingsInfo } from "./services";

getStandingsInfo(2015);


function App() {

  return (
      <AppContainer>
        <ChampionshipStandings />
      </AppContainer>
  );
}

export default App;
