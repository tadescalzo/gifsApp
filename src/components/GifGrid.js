import React from "react";
import { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ cat }) => {
  useEffect(() => {
    getGifs();
  }, []);
  const [images, setImages] = useState([]);
  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=Dragon+Ball&limit=10&api_key=TfaExu84r3N0WB35npJKVPiixnep1WJB";
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });
    setImages(gifs);
  };

  return (
    <div>
      <h3>{cat}</h3>
      {images.map((image) => (
        <GifGridItem key={image.id} {...image} />
      ))}
    </div>
  );
};
