import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src, alt, style }) => {
  return <LazyLoadImage src={src} className={style} alt={alt} />;
};

export default Img;
