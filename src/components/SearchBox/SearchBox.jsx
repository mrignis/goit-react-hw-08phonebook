import React from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice"; // замінено імпорт на changeFilter

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter({ term: e.target.value })); // замінено setFilter на changeFilter
  };
};

export default SearchBox;
