import { UPDATE } from "../actions/types";

export default function postReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE:
      return Object.assign(state, action.avp);
    default:
      return state;
  }
}
