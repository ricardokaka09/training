import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { RootState } from "../../contains";
import moment from "moment";
// import momentDurationFormatSetup from "moment-duration-format";
// import { Duration } from "@material-ui/core";

interface Progress {
  duration: number | undefined;
  currentTime: number | undefined;
  bgImage: string;
}
export const ProgressBar: React.FC<Progress> = ({
  duration = 0,
  currentTime = 0,
  bgImage,
}) => {
  const curPercentage: number = (currentTime / duration) * 100;
  const formatDuration = (duration: number) => {
    // console.log(moment.duration(200, "seconds"));

    return (
      "" +
      `${moment.duration(duration, "seconds").minutes()}`.padStart(2, "0") +
      ":" +
      `${moment.duration(duration, "seconds").seconds()}`.padStart(2, "0")
    );
  };
  // useEffect(() => {
  //   formatDuration(duration);
  // });

  return (
    <div className="bar">
      {bgImage && <img src={bgImage} alt="" className="bar__bgImg" />}
      <div className="bar__time">
        {currentTime ? formatDuration(currentTime) : formatDuration(0)}
      </div>
      <div
        className="bar__progress"
        style={{
          background: `linear-gradient(to right, #98ea69 ${curPercentage}%, white 0)`,
        }}
        onMouseDown={() => console.log("avtive")}
        // onMouseMove={() => console.log("mouse move")}
        onMouseUp={() => console.log("mouse up")}
      >
        <span
          className="bar__progress__circle"
          style={{
            left: `${curPercentage - 1}%`,
          }}
        ></span>
      </div>
      <div className="bar__timeEnd">{duration && formatDuration(duration)}</div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar);
