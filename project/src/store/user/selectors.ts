import { createSelector } from 'reselect';
import { AuthorizationStatus, NewComemntStatus } from '../../constants/constants';
import { NameSpace, RootState } from '../root-reducer';

const getAuthStatus = (state: RootState): AuthorizationStatus => state[NameSpace.User].authStatus;
const getAvatar = (state: RootState):string => state[NameSpace.User].userInfo.avatar_url;
const getFormLoadingStatus = createSelector((state: RootState) => state[NameSpace.User].newCommentStatus, (newCommentStatus) => newCommentStatus === NewComemntStatus.Loading);

export {
  getAuthStatus,
  getAvatar,
  getFormLoadingStatus
};
