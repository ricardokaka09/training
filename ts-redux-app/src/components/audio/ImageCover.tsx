import React from "react";
interface Image {
  src: string;
}
export const ImageCover: React.FC<Image> = ({ src }) => {
  return (
    <div className="imageCover">
      <img src={src} alt="img" />
    </div>
  );
};
