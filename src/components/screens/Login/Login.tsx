import Button from 'src/components/common/Button'
import TextInput from 'src/components/common/TextInput'
import useLoginForm from './hooks/useLoginForm'

export default function Login() {
  const { register, handleSubmit, errors } = useLoginForm()
  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <h1 className="text-2xl mb-4">
        Login
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center p-4 rounded-md border border-gray-700"
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
          type="password"
          register={register}
          error={errors.password}
        />
        <Button type="submit">
          Iniciar sesión
        </Button>
      </form>
    </div>
  )
}
