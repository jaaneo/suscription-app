import { Link } from 'react-router-dom'
import Button from '../common/Button'

export default function NotFound() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <h1 className="text-center text-2xl font-bold mb-4">404 Not Found</h1>
      <Link to="/" replace>
        <Button fullwidth>
          Volver al home
        </Button>
      </Link>
    </div>
  )
}
