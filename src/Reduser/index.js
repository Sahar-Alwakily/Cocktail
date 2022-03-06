import { combineReducers } from "redux";
import { SerachNameDrinkReducer, saveDrinkReducer ,
  displayAllDrinkReducer ,showDrinkReducer ,
  sortByNameDataReducer ,filterDrinkInputReducer 
} from "./drinksReducer";
const reducers = combineReducers({

  searchDrinks: SerachNameDrinkReducer,
  Savedrink:saveDrinkReducer,
  Displaydrink:displayAllDrinkReducer,
  Showdrink:showDrinkReducer,
  Bydrink:sortByNameDataReducer,
  Fillterdrink:filterDrinkInputReducer,
});
export default reducers;
