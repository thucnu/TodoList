const initialState = {
  submittedData: [],
};
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_VALUE":
      if (!state.submittedData.includes(action.payload)) {
        return {
          ...state,
          submittedData: [...state.submittedData, action.payload],
        };
      }else{
        return state
      }
    case "REMOVE_VALUE":
      return {
        ...state,
        submittedData: state.submittedData.filter(
          (item) => item !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;
