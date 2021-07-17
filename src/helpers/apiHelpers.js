import axios from "axios";
const SERVER_URL = "https://rickandmortyapi.com/api/";

let cancelToken = axios.CancelToken;
let source = cancelToken.source();

export const axiosRequestHandler = async (
  url,
  method,
  body,
  type = null
) => {
  try {
    if (type === "CANCEL_API_REQUEST") {
      source.cancel("Operation canceled by the user.");
      let CancelToken = axios.CancelToken;
      source = CancelToken.source();
    }
    let headers = {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*"
    };
    headers["Content-Type"] = "application/json";

    const result = await axios({
      url: `${SERVER_URL}${url}`,
      defaults: {
        timeout: 20000
      },
      data: body,
      headers: headers,
      method: method,
      cancelToken: source.token
    });

    return { error: null, response: result.data };
  } catch (error) {
    console.log(error);
  }
};
