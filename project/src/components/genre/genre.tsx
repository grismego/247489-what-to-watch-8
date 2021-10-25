export type GenreType = any

export function Genre({ name }: any): JSX.Element {
  return (
    <li className="catalog__genres-item">
      <a href="#" className="catalog__genres-link">{name}</a>
    </li>
  );
}
