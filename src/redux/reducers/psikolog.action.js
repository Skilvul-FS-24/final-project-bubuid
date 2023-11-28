const initialValue = {
  psikologs: [],
  isLoading: false,
  err: "",
};

function psikologReducer(state = initialValue, action) {
  switch (action.type) {
    case "START_FEATHING":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS_GET_DATA":
      return {
        ...state,
        isLoading: false,
        psikologs: action.payload,
      };
    default:
      return state;
  }
}

export default psikologReducer;
