import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Favorites = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.countries.isLoading);
  const fav = useSelector((state) => state.countries.fav);
};

export default Favorites;
