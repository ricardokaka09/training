import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useAction } from "../hooks/useAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMusic } from "../contains/action-creators";
import "./style.css";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RootState } from "../contains";

const RepositoriesList: React.FC = (user) => {
  const [term, setTerm] = useState("");
  const [kind, setKind] = useState("Nhạc Trẻ");
  const audioRef = useRef(null);
  const { getMusic } = useAction();
  const state = useTypedSelector((state) => state.user);
  console.log(user);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    getMusic(kind);
    // console.log();
  };
  const onChangMusicType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setKind(event.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <select value={kind} onChange={onChangMusicType}>
          <option value="Nhạc Trẻ">Nhạc Trẻ</option>
          <option value="Trữ Tình">Trữ Tình</option>
          <option value="Tiền Chiến">Tiền Chiến</option>
          <option value="Rap Việt">Rap Viet</option>
        </select>
        {/* <input value={term} onChange={(e) => setTerm(e.target.value)} /> */}
        <button>Get Music</button>
      </form>
      <div className="card">
        <div className="card__top"></div>
        <audio
          ref={audioRef}
          src="abc.mmm"
          className="card__audio"
          controls
        ></audio>
        <div className="card__button">
          <div className="button">
            <span>Pre</span>
          </div>
          <div className="button">
            <span>Play</span>
          </div>
          <div className="button">
            <span>Next</span>
          </div>
        </div>
      </div>
    </div>
  );
};
RepositoriesList.propTypes = {
  user: PropTypes.object.isRequired,
  getMusic: PropTypes.func.isRequired,
};
const mapStateToProps = (state: RootState) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getMusic })(RepositoriesList);
