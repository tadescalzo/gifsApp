import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ cat }) => {
  const { data: images, loading } = useFetchGifs(cat);
  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{cat}</h3>
      {loading && (
        <div className="lds-dual-ring animate__animated animate__fadeIn"></div>
      )}
      <div className="card-grid">
        {images.map((image) => (
          <GifGridItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
