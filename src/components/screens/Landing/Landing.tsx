import { Link } from 'react-router-dom'
import Button from 'src/components/common/Button'

export default function Landing() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center space-y-4">
      <h1 className="text-4xl font-bold">
        My Suscription App
      </h1>
      <p>
        My Suscription App a simple suscription manager app.
      </p>
      <Link to="/login" replace>
        <Button>
          Iniciar sesión
        </Button>
      </Link>
    </div>
  )
}
