import { Link } from 'react-router-dom'
import Button from 'src/components/common/Button'
import TextInput from 'src/components/common/TextInput'
import useRegisterForm from './hooks/useRegisterForm'

export default function Register() {
  const { register, handleSubmit, errors } = useRegisterForm()
  return (
    <div className="max-w-md w-full mx-auto flex flex-col justify-center items-center">
      <h1 className="text-2xl mb-4">
        Register
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-stretch p-4 rounded-md bg-gray-700 space-y-4 w-full"
      >
        <TextInput
          name="firstName"
          label="First name"
          placeholder="First name"
          register={register}
          error={errors.firstName}
        />
        <TextInput
          name="lastName"
          label="Last name"
          placeholder="Last name"
          register={register}
          error={errors.lastName}
        />
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
        <TextInput
          name="passwordConfirm"
          label="Password Confirmation"
          placeholder="************"
          type="password"
          register={register}
          error={errors.passwordConfirm}
        />
        <Button type="submit">
          Registrate
        </Button>
        <Link to="/login" replace className="text-primary-500 hover:text-primary-300 transition text-sm text-center">
          ¿Ya tienes cuenta? Inicia sesión
        </Link>
      </form>
    </div>
  )
}
