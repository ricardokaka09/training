import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { RootState } from "../../contains";
import { ProgressBar } from "./ProgressBar";
import { ButtonControl } from "../button/ButtonControl";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useEffect, useRef, useState } from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PauseIcon from "@material-ui/icons/Pause";
import { ImageCover } from "./ImageCover";
// import { playingSong } from "../../contains/action-creators";
import { useAction } from "../../hooks/useAction";

export const Audio: React.FC = () => {
  const musics = useTypedSelector((state) => state.musics);
  const { song }: any = useTypedSelector((state) => state.playing);

  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState<number>();
  const [duration, setduration] = useState<number>();
  const [src, setSrc] = useState<string>("");
  const [index, setIndex] = useState<number>(song?.id);
  // console.log(index);

  const { playingSong } = useAction();

  useEffect(() => {
    // setSrc(audio?.music);
    setSrc(song?.music);
    setIndex(song?.id);
    // console.log(song?.id);
  }, [song]);

  const loadedDataAudio = () => {
    setduration(audioRef.current?.duration);
    setCurrentTime(audioRef.current?.currentTime);
    // audioRef.current?.play();
  };

  const handleRef = () => {
    playing ? audioRef.current?.pause() : audioRef.current?.play();
    setPlaying(!playing);
  };
  const handlePre = () => {
    playingSong(musics?.data[index - 1], index - 1);
  };
  const handleNext = () => {
    console.log(index);
    playingSong(musics?.data[index + 1], index + 1);
  };
  return (
    <div className="player">
      <ImageCover src={song?.avatar} />
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime)}
        onLoadedData={loadedDataAudio}
        onEnded={() => setPlaying(false)}
      >
        Your browser does not support the <code>audio</code> element.
      </audio>
      <div className="info">
        <h3>Song : {song?.title}</h3>
        <span>Singer: {song?.creator}</span>
      </div>
      <div className="controls">
        <ProgressBar
          duration={duration}
          currentTime={currentTime}
          bgImage={song?.bgImage}
        />
        <div className="controls__button">
          <ButtonControl
            Icon={SkipPreviousIcon}
            title="pre"
            onClick={() => handlePre()}
          />
          {!playing ? (
            <ButtonControl
              Icon={PlayArrowIcon}
              title="play"
              onClick={() => handleRef()}
            />
          ) : (
            <ButtonControl
              Icon={PauseIcon}
              title="pause"
              onClick={() => handleRef()}
            />
          )}
          <ButtonControl
            Icon={SkipNextIcon}
            title="next"
            onClick={() => handleNext()}
          />
        </div>
      </div>
    </div>
  );
};

Audio.propTypes = {
  musics: PropTypes.object.isRequired,
};

const mapStateToProps = (state: RootState) => ({
  musics: state.musics,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Audio);
