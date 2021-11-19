export const Routes = {
  MainPage: (): string => '/',
  SignIn: (): string => '/login',
  MyList: (): string => '/mylist',
  Movie: (id: string | number = ':id'): string => `/films/${id}`,
  AddReview: (id: string | number = ':id'): string => `/films/${id}/review`,
  Player: (id: string | number = ':id'): string => `/player/${id}`,
  NotFound: (): string => '/404',
} as const;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NotAuth = 'NOT_AUTH',
  Unknow = 'UNKNOW'
}

export const ApiRoute = {
  Movie: (id: string | number): string => `/films/${id}`,
  Movies: (): string => '/films',
  Comments: (id: string | number): string => `/comments/${id}`,
  Favorite: (): string => '/favorite',
  FavouriteStatus: (id: string | number, status: number): string => `/favorite/${id}/${status}`,
  Promo: (): string => '/promo',
  Login: (): string => '/login',
  Logout: (): string => '/logout',
  Similar: (id: string | number): string => `/films/${id}/similar`,
};

export enum NewComemntStatus {
  Idle = 'Idle',
  Loading = 'Loading',
}

export const DEFAULT_GENRE = 'All Genres';
