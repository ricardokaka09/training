// import Icon from "@material-ui/core/Icon";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import React from "react";
import { JsxElement } from "typescript";

interface Button {
  title: string;
  Icon: any;
  children?: any;
  onClick: () => void;
}
export const ButtonControl: React.FC<Button> = ({
  title,
  Icon,
  onClick,
  ...children
}) => {
  return (
    <div className="button">
      <Icon onClick={onClick} />
    </div>
  );
};
