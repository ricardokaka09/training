import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { RootState } from "../../contains";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import { useAction } from "../../hooks/useAction";

interface InfoSong {
  title: string;
  creator: string;
  url: string;
  bgImage: string;
}

const MusicItem: React.FC = () => {
  const music = useTypedSelector((state) => state.musics);
  const { getMusic, playingSong } = useAction();
  const songs = music.data;

  const songPlaying = (item: any, key: number) => {
    const { title, bgImage, creator, music, avatar } = item;
    playingSong({ title, bgImage, creator, music, avatar, id: key });
    // playingSong()
  };
  return (
    <>
      {songs?.map((item: any, key: number) => (
        <div className="song" onClick={() => songPlaying(item, key)}>
          <div className="song__avatar">
            <img src={item.bgImage} alt="" />
          </div>
          <div className="song__info">
            <span className="song__info__title">{item.title}</span>
            <span className="song__info__author">{item.creator}</span>
          </div>
        </div>
      ))}
    </>
  );
};

MusicItem.propTypes = {};

const mapStateToProps = (state: RootState) => ({
  musics: state.musics,
});

export default connect(mapStateToProps)(MusicItem);
