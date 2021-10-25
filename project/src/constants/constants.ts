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
}

export const DEFAULT_GENRE = 'All Genres';
