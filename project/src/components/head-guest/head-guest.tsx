import {Header} from '../header/header';

export function HeadGuest(): JSX.Element {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        {/* <!-- <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" /> --> */}
        <img src="img/bg-header.jpg" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header />

    </section>
  );
}
