import { Link } from 'react-router-dom'
import Button from '../common/Button'

export default function NotFound() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <Link to="/" replace>
        <Button fullwidth>
          Volver al home
        </Button>
      </Link>
    </div>
  )
}
