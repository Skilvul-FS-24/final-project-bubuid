import axios from "axios";

export function getPsikologs(token) {
  return async function (dispatch) {
    dispatch(startFeathing());

    try {
      const {data} = await axios.get("http://localhost:3000/psikolog", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(successGetPsikologs(data.data));
    } catch (error) {
      dispatch(errorFetching(error.message));
    }
  };
}

export function getPsikologById(token, id) {
  return async function (dispatch) {
    dispatch(startFeathing());

    try {
      const {data} = await axios.get(`http://localhost:3000/psikolog/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(successGetPsikologs(data.data));
    } catch (error) {
      dispatch(errorFetching(error.message));
    }
  };
}


function startFeathing() {
  return {
    type: "START_FEATHING",
  };
}

function successGetPsikologs(data) {
  return {
    type: "SUCCESS_GET_DATA",
    payload: data,
  };
}