import { ActionTypes } from "../constants/action-types";
const intialState = {
  Drinks: [],
  Svdrink:[],
  Ddrink:[],
  Sdrink:[],
  Bdrink:[],
  Fdrink:[],
};

export const SerachNameDrinkReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SERACH_NAME_DRINK:
      return { ...state, Drinks: payload };
    default:
      return state;
  }
};

export const saveDrinkReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SERACH_NAME_DRINK:
      return { ...state, SdriSvdrinknk: payload };
    default:
      return state;
  }
};
export const displayAllDrinkReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SERACH_NAME_DRINK:
      return { ...state, Ddrink: payload };
    default:
      return state;
  }
};
export const showDrinkReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SERACH_NAME_DRINK:
      return { ...state, Sdrink: payload };
    default:
      return state;
  }
};
export const sortByNameDataReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SERACH_NAME_DRINK:
      return { ...state, Bdrink: payload };
    default:
      return state;
  }

};

export const filterDrinkInputReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SERACH_NAME_DRINK:
      return { ...state, Fdrink: payload };
    default:
      return state;
  }
  
};