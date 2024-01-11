import { useForm } from 'react-hook-form';
import TypeLoginInput from '../types/loginInputType';
import { emailValidet, passwordValidet } from '../helpers/inputValidtion';
import { Navigate, useSearchParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../../../Graphql/mutation/loginMutate';

const Login = () => {
  const [searchParams] = useSearchParams();
  const userTypeParams = searchParams.get('user');
  const [LoginToken, { data, loading, error }] = useMutation(LOGIN_MUTATION);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<TypeLoginInput>({
    mode: 'onChange',
  });
  console.log(userTypeParams);
  
  const handleClickSubmit = async (payload: TypeLoginInput) => {
    await LoginToken({
      variables: { input: { ...payload, tablename: userTypeParams } },
    });
    localStorage.setItem('TOKEN', data.loginToken.userLoginInfo);
  };
  if (
    userTypeParams !== 'female' &&
    userTypeParams !== 'male' &&
    userTypeParams !== 'matchmakers'
  )
    return <Navigate replace to={'/'} />;
  if (loading) return <div>loading</div>; //hadnle loading...
  if (error) return <div>error</div>; //hadnle error...

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
