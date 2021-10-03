export type GenreType = {
  name: string,
  isActive?: boolean
}

export function Genre({name, isActive = false}: GenreType): JSX.Element {
  return (
    <li className={
      isActive
        ? 'catalog__genres-item catalog__genres-item--active'
        : 'catalog__genres-item'
    }
    >
      <a href="#" className="catalog__genres-link">{name}</a>
    </li>
  );
}
