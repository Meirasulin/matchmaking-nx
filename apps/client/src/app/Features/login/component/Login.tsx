import { useForm } from 'react-hook-form';
import TypeLoginInput from '../types/loginInputType';
import { emailValidet, passwordValidet } from '../helpers/inputValidtion';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../../../Graphql/mutation/loginMutate';
import ButtonLoading from '../../loading/component/ButtonLoading';
import { logedUserInfo } from '../../../helpers/logedUserInfo';
import { useAtom } from 'jotai';
import '../style/inputs.css'


const Login = () => {
  const [searchParams] = useSearchParams();
  const userTypeParams = searchParams.get('login');
  const [LoginToken, { data, loading, error }] = useMutation(LOGIN_MUTATION);
  const navigate = useNavigate();
  const [_, setLogedUser] = useAtom(logedUserInfo)
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<TypeLoginInput>({
    mode: 'onChange',
  });

  const handleClickSubmit = (payload: TypeLoginInput) => {
    LoginToken({
      variables: { input: { ...payload, tablename: userTypeParams } },
    }).then((res) => {
      localStorage.setItem('TOKEN', res.data.login.loginResponse.jwtToken);
      setLogedUser(JSON.parse(res.data.login.loginResponse.userDetails))      
      navigate('/initmatchcards');
    });
  };
  if (
    userTypeParams !== 'female' &&
    userTypeParams !== 'male' &&
    userTypeParams !== 'matchmaker'
  )
    return <Navigate replace to={'/'} />;
  if (error) console.log(error); // handle errors

  return (
    <div className='min-h-[100vh] flex justify-center'>
    <form
        className="flex  flex-col items-center justify-center"
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
        {loading ? (
          <ButtonLoading />
        ) : (
          <button
            className={!isValid ? 'disableButton' : 'btn m-1 w-max'}
            disabled={!isValid}
            type="submit"
          >
            Login
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;
