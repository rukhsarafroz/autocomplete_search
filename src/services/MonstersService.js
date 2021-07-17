import { axiosRequestHandler } from "../helpers/apiHelpers";

export const GetMonsters = async requestParameter => {
    try {
      let response = await axiosRequestHandler(
        `character/?name=${requestParameter.name}&page=${requestParameter.page}`,
        "get",
        null,
        requestParameter.type
      );
      return response;
    } catch (error) {
      throw new Error({ error: true, message: "Something went wrong..!!" });
    }
  };