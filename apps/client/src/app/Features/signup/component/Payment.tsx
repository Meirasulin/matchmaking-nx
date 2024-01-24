import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { allSignupMutation } from '../../../Graphql/mutation/signupMutate';
import '../style/inputs.css';
import '../style/signupStepper.css';
import ButtonLoading from '../../loading/component/ButtonLoading';
import { useAppDispatch, useAppSelector } from '../../../redux/hookStore';
import { plusstepper, reststepper } from '../redux/signupSlice';


const Payment = () => {
  const currentInfo = useAppSelector((state)=> state.signup.inputsValue)
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const signupTypeParams = searchParams.get('signup');
  const dispatch = useAppDispatch()
  if (
    signupTypeParams !== 'male' &&
    signupTypeParams !== 'female' &&
    signupTypeParams !== 'matchmaker'
  )
    return <Navigate replace to={'/'} />;

  const variables =
    signupTypeParams === 'male' || signupTypeParams === 'female'
      ? {
          input: {
            [signupTypeParams]: { ...currentInfo, gender: signupTypeParams },
          },
        }
      : { input: { [signupTypeParams]: { ...currentInfo } } };

  const SIGNUP = allSignupMutation[signupTypeParams];
  const [signupMutation, { data, loading, error }] = useMutation(SIGNUP);

  const handleClickFinish = async () => {
    
    if (signupTypeParams) {
      await signupMutation({
        variables,
      }).then(() => {
        navigate(`/login?login=${signupTypeParams}`);
        dispatch(reststepper());
      });
    }
  };
  console.log(currentInfo);

  if (error) return <Navigate replace to={'/errorAlert'} />;

  return (
    <div className="flex flex-col items-center">
      <div className="block text-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          האתר בהרצה
        </h1>
        <h2 className="font-normal text-gray-700 dark:text-gray-400">
          כעת ניתן להירשם ללא תשלום
        </h2>
      </div>

      {loading ? (
        <ButtonLoading />
      ) : (
        <button
          className="btn m-1 w-max"
          type="button"
          onClick={handleClickFinish}
        >
          Finish
        </button>
      )}
    </div>
  );
};

export default Payment;
