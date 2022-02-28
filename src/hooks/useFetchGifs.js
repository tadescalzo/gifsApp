import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (cat) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(cat).then((gifs) => {
      setState({ data: gifs, loading: false });
    });
  }, [cat]);

  return state;
};
