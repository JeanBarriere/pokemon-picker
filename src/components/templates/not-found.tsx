import { Link } from 'react-router-dom'

interface NotFoundProps {
  currentLocation: string
}

export function NotFoundTpl({ currentLocation } : NotFoundProps) {
  return (
    <>
      <main>
        <h2>Looks like you lost your way</h2>
        <h2>The page <code>{ currentLocation }</code> is not available</h2>
      </main>
      <nav>
        <Link to="/">&larr; Go back home</Link>
        <Link to="/pokemon/random">Random Pokemon</Link>
      </nav>
    </>
  );
}
