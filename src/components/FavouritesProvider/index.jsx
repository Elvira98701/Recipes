import { createContext, useReducer } from "react";

const initialState = {
  favouritesList: [],
  favouritesIdList: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "toggle_item": {
      const existingIndex = state.favouritesList.findIndex(
        (obj) => obj.id === action.newItem.id
      );

      const idList = state.favouritesList.map((obj) => obj.id);

      if (existingIndex !== -1) {
        return {
          favouritesList: [
            ...state.favouritesList.slice(0, existingIndex),
            ...state.favouritesList.slice(existingIndex + 1),
          ],
          favouritesIdList: [
            ...idList.slice(0, existingIndex),
            ...idList.slice(existingIndex + 1),
          ],
        };
      } else {
        return {
          favouritesList: [...state.favouritesList, action.newItem],
          favouritesIdList: [...idList, action.newItem.id],
        };
      }
    }
    case "clear": {
      return {
        favouritesList: [],
        favouritesIdList: [],
      };
    }
  }
};
export const FavouritesContext = createContext();

const FavouritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FavouritesContext.Provider value={{ state, dispatch }}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesProvider;
