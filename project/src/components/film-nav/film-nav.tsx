type FilmNavPropsType = {
  labels: string[],
  activeTab: string,
  changeTabHandler: (label: string) => void,
}

export function FilmNav({labels, activeTab, changeTabHandler}: FilmNavPropsType): JSX.Element  {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {labels.map((label) => (
          <li className={['film-nav__item', activeTab === label ? 'film-nav__item--active' : ''].join(' ')} key={label}>
            <a href="#" className="film-nav__link"
              onClick={(evt) => {
                evt.preventDefault();
                changeTabHandler(label);
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
