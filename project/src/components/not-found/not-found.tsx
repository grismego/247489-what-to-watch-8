import { Routes } from '../../constants/constants';
import { Link } from 'react-router-dom';

export function NotFound(): JSX.Element {
  return (
    <section>
      <h1>404: Not Found</h1>
      <Link to={Routes.MainPage()}>Back to main page</Link>
    </section>
  );
}
