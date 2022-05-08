import { UserState, UserAction, UserActionTypes } from '../../types/todo';

const initialState: UserState = {
  users: [],
  loading: false,
  error: null
};

export const useReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
      case UserActionTypes.FETCH_USERS: 
        return {
          loading: true,
          users: [],
          error: null
        };
      case UserActionTypes.FETCH_USERS_SUCCESS: 
        return {
          loading: false,
          users: action.payload,
          error: null
        };
      case UserActionTypes.FETCH_USERS_ERROR: 
        return {
          loading: false,
          users: [],
          error: action.payload
        };
      default:
        return state;
    }
}