import { createStore } from "redux";

// Define the initial state of the store
const initialState = {
  frameMaterial: "",
  glassType: "",
  frameColor: "",
};

// Define the reducer function that updates the store based on actions
function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_FRAME_MATERIAL":
      return { ...state, frameMaterial: action.payload };
    case "SET_GLASS_TYPE":
      return { ...state, glassType: action.payload };
    case "SET_FRAME_COLOR":
      return { ...state, frameColor: action.payload };
    default:
      return state;
  }
}

// Create the Redux store
const store = createStore(reducer);

export default store;
