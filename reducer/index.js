import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { actionGetImages } from "../actions";

function imagesReducer(state = {}, { type, payload }) {
  if (type === "FETCH_IMAGES") {
    return {
      ...state,
      images: payload
    }
  }

  return state;
}

const store = createStore(combineReducers({ images: imagesReducer }), applyMiddleware(thunk));
store.dispatch(actionGetImages())
store.subscribe(() => console.log(store.getState()));
export default store;


