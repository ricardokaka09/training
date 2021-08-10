import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { RootState } from "../../contains";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

export const RepoList: React.FC<{
  name: string;
  avatar: string;
  onClick: () => void;
}> = ({ name, avatar, onClick }) => {
  return (
    <div className="repo">
      <figure className="bg">
        <img src={avatar} alt="Person on a tour" className="bg__img" />
        <div className="bg__hover">
          <PlayCircleOutlineIcon onClick={onClick} />
        </div>
      </figure>
      <div className="repo__title">
        <span className="repo__name">{name}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);
