import { GET_MONSTERS_FAILURE, GET_MONSTERS_REQUESTING, GET_MONSTERS_SUCCESS } from "../constants/ActionTypes";

  const initialState = {
    getMonstersRequesting: null,
    getMonstersSuccess: null,
    monstersList: [],
    getMonstersErrors: [],
    currentPage: 1,
    totalPages: 1
  };

  export default function MonsterReducer(state = initialState, action) {
    switch (action.type) {
      case GET_MONSTERS_REQUESTING:
        return {
          ...state,
          getMonstersRequesting: true,
          getMonstersSuccess: null,
          projectAreasErrors: null
        };
      case GET_MONSTERS_SUCCESS:
        return {
          ...state,
          getMonstersRequesting: null,
          getMonstersSuccess: true,
          monstersList: action.data,
          totalPages: action.totalPages,
          currentPage: action.currentPage,
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
