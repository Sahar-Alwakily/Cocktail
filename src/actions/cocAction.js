import { ActionTypes } from "../constants/action-types";

export const SerachNameDrink = (Drinks) => {
  return {
    type: ActionTypes.SERACH_NAME_DRINK,
    payload: Drinks,
  };
};

export const saveDrink = (Svdrink) => {
  return {
    type: ActionTypes.SAVE_DRINK,
    payload: Svdrink,
  };
};
export const displayAllDrink = (Ddrink) => {
  return {
    type: ActionTypes.DISPLAY_ALL_DRINK,
    payload:Ddrink,
  };
};
export const showDrink = (Sdrink) => {
    return {
      type: ActionTypes.SHOW_DRINK,
      payload: Sdrink,
    };
  };
  export const sortByNameData = (Bdrink) => {
    return {
      type: ActionTypes.SORT_BY_NAME_DATA,
      payload : Bdrink,
    };
  };
  export const filterDrinkInput = (Fdrink) => {
    return {
      type: ActionTypes.FILTER_DRINK_INPUT,
      payload: Fdrink , 
    };
  };