import { AuthorizationStatus } from '../../constants/constants';
import { Actions, ActionType } from '../../types/actions';

type userState = {
  authStatus: AuthorizationStatus
}

const initialState = {
  authStatus: AuthorizationStatus.Unknow,
};

export const userReducer = (state = initialState, action: Actions): userState => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTH:
      return { ...state, authStatus: action.payload };
    case ActionType.LOG_IN:
      return { ...state, authStatus: action.payload };
    case ActionType.LOG_OUT:
      return { ...state, authStatus: AuthorizationStatus.NotAuth };
    default:
      return state;
  }
};
