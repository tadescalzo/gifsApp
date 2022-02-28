import React, { useState } from "react";
import { AddCategory } from "./components/addCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [cats, setCats] = useState(["Dragon Ball"]);

  return (
    <>
      <h2>Gif search app</h2>
      <hr />
      <AddCategory setCats={setCats} />
      <ol>
        {cats.map((el) => (
          <GifGrid key={el} cat={el} />
        ))}
      </ol>
    </>
  );
};
