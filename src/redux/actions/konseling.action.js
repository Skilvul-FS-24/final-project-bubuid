import axios from "axios";

export function submitKonselingForm(token, id, formData) {
  return async function (dispatch) {
    dispatch(startFeathing());

    try {
      const {data} = await axios.post("http://localhost:3000/konseling", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(successGetKonseling(data.data));
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

function successGetKonseling(data) {
  return {
    type: "SUCCESS_GET_DATA",
    payload: data,
  };
}