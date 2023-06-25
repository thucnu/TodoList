const initialState = {
    submittedData: [],
};
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_VALUE":
            if (!state.submittedData.includes(action.payload)) {
                const data = {
                    value: action.payload,
                    status: false,
                }
                return {
                    ...state,
                    submittedData: [...state.submittedData, data],
                };
            } else {
                return state
            }
        case "REMOVE_VALUE":
            return {
                ...state,
                submittedData: state.submittedData.filter(
                    (item) => item.value !== action.payload
                ),
            };
        case "CHANGE_STATUS":
            return {
                ...state,
                submittedData: state.submittedData.map((item) => {
                    if (item.value === action.payload) {
                        if (item.status) {
                            return item;
                        }
                        return {...item, status: true}
                    }
                    return item;
                })
            }
        default:
            return state;
    }
};

export default taskReducer;
