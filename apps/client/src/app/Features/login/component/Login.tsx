import { useForm } from 'react-hook-form';
import TypeLoginInput from '../types/loginInputType';
import { emailValidet, passwordValidet } from '../helpers/inputValidtion';
import { Navigate, useSearchParams } from 'react-router-dom';

const Login = () => {
  const [searchParams] = useSearchParams();
  const userTypeParams = searchParams.get('user');

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<TypeLoginInput>({
    mode: 'onChange',
  });

  const handleClickSubmit = (data: TypeLoginInput) => {
    console.log(data);
    
    return;
  };
  if (!userTypeParams) return <Navigate replace to={'/'} />;

  return (
    <div>
      <form
        className="flex  flex-col items-center"
        onSubmit={handleSubmit(handleClickSubmit)}
      >
        <div>
          <label
            htmlFor="email"
            className={errors.email?.message ? 'lableError' : 'lableSuccess'}
          >
            {errors.email?.message
              ? (errors.email?.message as string)
              : 'דוא"ל'}
          </label>
          <input
            type="text"
            {...register('email', emailValidet)}
            className={errors.email?.message ? 'inputError' : 'inputSuccess'}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className={errors.password?.message ? 'lableError' : 'lableSuccess'}
          >
            {errors.password?.message
              ? (errors.password?.message as string)
              : 'סיסמא'}
          </label>
          <input
            type="text"
            {...register('password', passwordValidet)}
            className={errors.password?.message ? 'inputError' : 'inputSuccess'}
          />
        </div>
        <button
          className={!isValid ? 'disableButton' : 'btn m-1 w-max'}
          disabled={!isValid}
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
