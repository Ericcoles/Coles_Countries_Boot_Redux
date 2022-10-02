import React from "react";
import { Button } from "bootstrap";

import { useSelector } from "react-redux";

const Favorites = () => {
  // const dispatch = useDispatch();

  const loading = useSelector((state) => state.countries.isLoading);
  const fav = useSelector((state) => state.countries.fav);
  const favoritesList = useSelector((state) => state.favorites.favorites);

  console.log(favoritesList);
  // console.log(fav);
  return (
    <div>
      <h3>In progress</h3>
    </div>
  );
};

export default Favorites;
