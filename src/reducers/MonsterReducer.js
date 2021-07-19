import { isEqual, uniqWith } from "lodash";
import { GET_MONSTERS_FAILURE, GET_MONSTERS_REQUESTING, GET_MONSTERS_SUCCESS } from "../constants/ActionTypes";

  const initialState = {
    getMonstersRequesting: null,
    getMonstersSuccess: null,
    monstersList: [],
    getMonstersErrors: [],
    hasMore: false,
    currentPage: 1,
    totalPages: 1
  };

  export default function MonsterReducer(state = initialState, action) {
    switch (action.type) {
      case GET_MONSTERS_REQUESTING:
        return {
          ...state,
          getMonstersRequesting: true,
          getMonstersSuccess: false,
          projectAreasErrors: null
        };
      case GET_MONSTERS_SUCCESS:
        return {
            ...state,
            getMonstersRequesting: false,
            getMonstersSuccess: true,
            monstersList: state.monstersList && state.monstersList.length  ? uniqWith([...state.monstersList,...action.data], isEqual) : action.data,
            hasMore: action.hasMore,
            currentPage: action.currentPage,
            totalPages: action.totalPages,
            projectAreasErrors: null
          };
      case GET_MONSTERS_FAILURE:
        return {
          ...state,
          getMonstersRequesting: null,
          getMonstersSuccess: false,
          projectAreasList: [],
          projectAreasErrors: action.projectAreaErrors
        };
        default:
            return state;
    }
  }
