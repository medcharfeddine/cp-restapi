import { ADDUSERS, DELETEUSERS, EDITUSERS, GETUSERS } from "./actionTypes";

const init = {
  loading: true,
  users: null,
};

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case GETUSERS:
      return {
        ...state,
        loading: false,
        users: payload,
      };
    case ADDUSERS:
      return {
        ...state,
        users: [...state.users, payload],
      };
    case DELETEUSERS:
        return {
            ...state,
            users: state.users.filter((el) => el.id !== payload)
            }
    case EDITUSERS:
        return {
            ...state,
            users: state.users.map(el => el.id===payload._id? payload : el)}

    default:
      return state;
  }
};
export default reducer;
