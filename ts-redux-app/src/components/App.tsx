import { Provider } from "react-redux";
import { store } from "../contains";
import { setKindMusic } from "../contains/action-creators";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Audio } from "./audio/Audio";
import MusicItem from "./listMusic/MusicItem";
import RepositoriesList from "./RepositoriesList";
import { RepoList } from "./repository/RepoList";

const App = () => {
  // const music = useTypedSelector((state) => state.musics);
  // const kind = setKindMusic();
  // console.log(kind);
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Kinds of music</h1>
        <RepositoriesList />
        {/* <RepoList /> */}
        <div className="container">
          <Audio />
          <div className="listMusics">
            <MusicItem />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
