import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useAction } from "../hooks/useAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMusic, setKindMusic } from "../contains/action-creators";
import "./style.css";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RootState } from "../contains";
import { Audio } from "./audio/Audio";
import RepoList from "./repository/RepoList";

const RepositoriesList: React.FC = () => {
  // const { data } = musics;
  const [term, setTerm] = useState("");
  const [kind, setKind] = useState("Nhạc Trẻ");
  const [songs, setSongs] = useState([]);

  const [repo, setRepo] = useState<string[]>();

  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [src, setSrc] = useState<string>();
  const { getMusic, playingSong, setKindMusic } = useAction();
  const user = useTypedSelector((state) => state.user);
  const musics = useTypedSelector((state) => state.musics);

  // setSongs(musics.data);
  // console.log(songs);
  useEffect(() => {
    getMusic("Nhạc Trẻ");
    const getkindMusic = async () => {
      const kind: any = await setKindMusic();
      setRepo(kind);
      console.log(kind);
    };
    getkindMusic();
    // playingSong(musics.data[0]);
  }, []);
  const onSubmit = (name: string) => {
    getMusic(name);
  };
  const onChangMusicType = (name: string) => {
    setKind(name);
  };
  // const handleRef = () => {
  //   playing ? audioRef.current?.pause() : audioRef.current?.play();
  //   setPlaying(!playing);
  // };
  useEffect(() => {
    let link: any = musics.data[0];
    setSrc(link?.music);
    console.log(musics.data[0]);
    console.log(audioRef.current?.duration);
    console.log(audioRef.current?.currentTime);
  }, [musics.data[0]]);
  return (
    <div className="optionKinds">
      {repo?.map((item: any) => (
        <RepoList
          name={item.name}
          avatar={item.songs[0].coverImage}
          onClick={() => onSubmit(item.name)}
        />
      ))}
      {/* <form onSubmit={onSubmit}>
        <select value={kind} onChange={onChangMusicType}>
          <option value="Nhạc Trẻ">Nhạc Trẻ</option>
          <option value="Trữ Tình">Trữ Tình</option>
          <option value="Tiền Chiến">Tiền Chiến</option>
          <option value="Rap Việt">Rap Viet</option>
        </select>
        <button>Get Music</button>
      </form> */}
    </div>
  );
};
RepositoriesList.propTypes = {
  user: PropTypes.object.isRequired,
  musics: PropTypes.object.isRequired,
  getMusic: PropTypes.func.isRequired,
};
const mapStateToProps = (state: RootState) => ({
  user: state.user,
  musics: state.musics,
});

export default connect(mapStateToProps, { getMusic })(RepositoriesList);
