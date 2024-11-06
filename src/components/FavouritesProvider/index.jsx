import { createContext, useEffect, useReducer } from "react";

const initialStateKey = "favouritesState";

const initialState = {
  favouritesList: [],
};

const getInitialState = () => {
  const storedState = localStorage.getItem(initialStateKey);
  if (storedState) {
    return JSON.parse(storedState);
  }
  return initialState;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "toggle_item": {
      const existingIndex = state.favouritesList.findIndex(
        (obj) => obj.id === action.newItem.id
      );

      if (existingIndex !== -1) {
        return {
          favouritesList: [
            ...state.favouritesList.slice(0, existingIndex),
            ...state.favouritesList.slice(existingIndex + 1),
          ],
        };
      } else {
        return {
          favouritesList: [...state.favouritesList, action.newItem],
        };
      }
    }
    case "clear": {
      return {
        favouritesList: [],
      };
    }
  }
};
export const FavouritesContext = createContext();

const FavouritesProvider = ({ children }) => {
  const [favouritesState, favouritesDispatch] = useReducer(
    reducer,
    initialState,
    getInitialState
  );

  useEffect(() => {
    localStorage.setItem(initialStateKey, JSON.stringify(favouritesState));
  }, [favouritesState]);

  return (
    <FavouritesContext.Provider value={{ favouritesState, favouritesDispatch }}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesProvider;
