import React, { useState } from "react";
import { AddCategory } from "./components/addCategory";

export const GifExpertApp = () => {
  const [cats, setCats] = useState(["Dragon Ball", "Pokemon", "Digimon"]);
  const handleAdd = () => {
    setCats((cats) => [...cats, "Naruto"]);
  };
  return (
    <>
      <h2>Version 6</h2>
      <hr />
      <button onClick={handleAdd}>Agregar item</button>
      <ol>
        {cats.map((el) => {
          return <li key={el}>{el}</li>;
        })}
      </ol>
      <AddCategory />
    </>
  );
};
