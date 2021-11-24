import { AuthorizationStatus, NewComemntStatus } from '../../constants/constants';
import { Actions, ActionType } from '../../types/actions';
import { UserInfo } from '../../types/user';

type userState = {
  authStatus: AuthorizationStatus,
  userInfo: UserInfo,
  newCommentStatus: NewComemntStatus,
}

const initialState = {
  authStatus: AuthorizationStatus.Unknow,
  userInfo: {} as UserInfo,
  newCommentStatus: NewComemntStatus.Idle,
};

export const userReducer = (state = initialState, action: Actions): userState => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTH:
      return { ...state, authStatus: action.payload };
    case ActionType.LOG_OUT:
      return { ...state, authStatus: AuthorizationStatus.NotAuth };
    case ActionType.SET_USER_INFO:
      return { ...state, userInfo: action.payload.userInfo };
    case ActionType.SET_COMMENT_STATUS:
      return { ...state, newCommentStatus: action.payload };
    default:
      return state;
  }
};
