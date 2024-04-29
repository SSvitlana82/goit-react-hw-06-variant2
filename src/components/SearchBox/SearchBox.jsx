import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtesSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  /* const contact = {
      name: form.elements.name.value,
 */
  const handleChange = (event) => {
    const input = event.target;

    dispatch(changeFilter(input.value));
  };
  return (
    <div>
      <input placeholder="filter name" onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
