import { createContext, useReducer } from "react";

const initialState = {
  searchValue: "",
  category: "all",
  sortType: "name",
  order: true,
  skipItems: 0,
};

const reducer = (state, action) => ({ ...state, ...action });
export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(reducer, initialState);

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
