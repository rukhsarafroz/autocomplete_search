import { GET_MONSTERS_FAILURE, GET_MONSTERS_REQUESTING, GET_MONSTERS_SUCCESS } from "../constants/ActionTypes";
import { GetMonsters } from "../services/MonstersService";

export const getMonsters = requestParameter => async dispatch => {
    try {
      dispatch({ type: GET_MONSTERS_REQUESTING });
      let apiResponse = await GetMonsters(requestParameter);
      if (apiResponse && apiResponse.response && apiResponse.response.results) {
        let data = apiResponse.response.results;
        dispatch({
          type: GET_MONSTERS_SUCCESS,
          data: data,
          currentPage: requestParameter.page,
          totalPages: apiResponse.response.info.pages,
          hasMore: apiResponse.response.info.next !== null ? true : false,
          message: "Monsters fetched successfully"
        });
      } else {
        dispatch({
          type: GET_MONSTERS_FAILURE,
          error: apiResponse.response.error
        });
      }
    } catch (error) {
      dispatch({ type: GET_MONSTERS_FAILURE });
    }
  };