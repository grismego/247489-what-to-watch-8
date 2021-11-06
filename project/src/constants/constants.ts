export enum Routes {
  MAIN = '/',
  SIGN_IN = '/login',
  MY_LIST = '/mylist',
  FILM = '/films/:id',
  ADD_REVIEW = '/films/:id/review',
  PLAYER = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NotAuth = 'NOT_AUTH',
  Unknow = 'UNKNOW'
}

export enum ApiRoute {
  Movies = '/films',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export const DEFAULT_GENRE = 'All Genres';
