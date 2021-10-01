import { Genre } from '../genre/genre';

export type GenreType = {
  name: string,
  isActive?: boolean
}

export type GenresType = {
  genres: GenreType[]
}

export function Genres({ genres }: GenresType): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {
        genres.map(({name, isActive}) => <Genre key={name} name={name} isActive={isActive} />)
      }
    </ul>
  );
}
