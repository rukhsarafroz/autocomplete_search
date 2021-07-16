import { combineReducers } from "redux";
import monsterReducer from "./MonsterReducer";

const rootReducer = combineReducers({
  monsterReducer,
});

export default rootReducer;
