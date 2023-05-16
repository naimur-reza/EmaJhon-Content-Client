import React, { createContext, useEffect, useState } from "react";

export const SearchContext = createContext();
const SearchProvider = ({ children }) => {
  const [value, setValue] = useState("");
  const handleSearch = (e) => {
    // useEffect(() => {
    //   fetch("")
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //     });
    // }, []);
    setValue(e.target.value);
    console.log(e.target.value);
  };
  const info = {
    handleSearch,
    value,
  };
  return (
    <SearchContext.Provider value={info}>{children}</SearchContext.Provider>
  );
};

export default SearchProvider;
