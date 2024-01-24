import { useForm } from 'react-hook-form';
import { TypeLoginInput } from '../types/loginTypes';
import { emailValidet, passwordValidet } from '../helpers/inputValidtion';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import ButtonLoading from '../../loading/component/ButtonLoading';
import { useAppDispatch, useAppSelector } from '../../../redux/hookStore';
import { TypeLoginResponse, fetchLogin } from '../redux/loginSlice';
import { ApolloCache, DefaultContext, MutationFunctionOptions, OperationVariables, useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../../../Graphql/mutation/loginMutate';

const Login = () => {
  const [searchParams] = useSearchParams();
  const userTypeParams = searchParams.get('login');
  const { logedUser, loading, error } = useAppSelector((state) => state.login);
  const [loginFun] = useMutation(LOGIN_MUTATION)

  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TypeLoginInput>({
    mode: 'onChange',
  });


  const handleClickSubmit = async (payload: TypeLoginInput) => {
    
    await dispatch(fetchLogin({email: payload.email, password: payload.password, tablename: userTypeParams as string, loginFun}))
    
    
    // LoginToken({
    //   variables: { input: { ...payload, tablename: userTypeParams } },
    // }).then(({data}) => {
    //   localStorage.setItem('TOKEN', data.login.loginResponse.jwtToken);
    //   const {userDetails} = data.login.loginResponse
    //   store.dispatch({
    //     type: 'login/update_loged_simple_user_info',
    //     payload: JSON.parse(userDetails),
    //   });
    // console.log(logedUser);
    
      navigate('/initmatchcards');
    // });
  };

  if (
    userTypeParams !== 'female' &&
    userTypeParams !== 'male' &&
    userTypeParams !== 'matchmaker'
  )
    return <Navigate replace to={'/'} />;
  // if (error) console.log(error); // handle errors

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