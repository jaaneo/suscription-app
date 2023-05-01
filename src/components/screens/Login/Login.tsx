import { Link } from 'react-router-dom'
import Button from 'src/components/common/Button'
import TextInput from 'src/components/common/TextInput'
import useLoginForm from './hooks/useLoginForm'

export default function Login() {
  const { register, handleSubmit, errors } = useLoginForm()
  return (
    <div className="max-w-md w-full mx-auto flex flex-col justify-center items-center">
      <h1 className="text-2xl mb-4">
        Login
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-stretch p-4 rounded-md bg-gray-700 space-y-4 w-full"
      >
        <TextInput
          name="email"
          label="Email"
          placeholder="myemail@gmail.com"
          register={register}
          error={errors.email}
        />
        <TextInput
          name="password"
          label="Password"
          placeholder="************"
          type="password"
          register={register}
          error={errors.password}
        />
        <Button type="submit">
          Iniciar sesión
        </Button>
        <Link to="/register" className="text-primary-500 hover:text-primary-300 transition text-sm text-center">
          ¿No tienes cuenta? Regístrate
        </Link>
      </form>
    </div>
  )
}
