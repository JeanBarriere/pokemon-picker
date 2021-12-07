import { useLocation } from 'react-router-dom'
import { NotFoundTpl } from '@templates/not-found'

export function NotFoundView() {
  const location = useLocation()

  return (
    <NotFoundTpl currentLocation={location.pathname} />
  );
}