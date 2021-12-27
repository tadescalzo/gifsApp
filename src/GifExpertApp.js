import React, { useState } from "react";

export const GifExpertApp = () => {
  const [cats, setCats] = useState(["Dragon Ball", "Pokemon", "Digimon"]);
  const handleAdd = () => {
    setCats([...cats, "Naruto"]);
  };
  return (
    <>
      <h2>Version 6</h2>
      <hr />
      <button onClick={handleAdd}></button>
      <ol>
        {cats.map((el) => {
          return <li key={el}>{el}</li>;
        })}
      </ol>
    </>
  );
};
