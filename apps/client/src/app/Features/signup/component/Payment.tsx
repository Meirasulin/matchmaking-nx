import { useAtom } from 'jotai';
import { stepAtom, userInfoAtom } from '../helpers/initialAtom';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import {
  SIGNUP_FEMALE,
  SIGNUP_MALE,
} from '../../../Graphql/querys/femaleQuerys';
import '../style/inputs.css';
import '../style/signupStepper.css';
import ButtonLoading from '../../loading/component/ButtonLoading';

const Payment = () => {
  const navigate = useNavigate();
  const [contactInfo] = useAtom(userInfoAtom);
  const [_, setCurrentStep] = useAtom(stepAtom);
  const [searchParams] = useSearchParams();
  const signupTypeParams = searchParams.get('signup');

  const SIGNUP = signupTypeParams === 'male' ? SIGNUP_MALE : SIGNUP_FEMALE;
  const [signupMutation, { data, loading, error }] = useMutation(SIGNUP);

  const handleClickFinish = async () => {
    setCurrentStep((prev) => prev + 1);
    if (signupTypeParams) {
      const testss = await signupMutation({
        variables: { input: { [signupTypeParams]: { ...contactInfo } } },
      });
      console.log('test', testss);
    }

    console.log('data', data);
  };

  if (error) console.log('my error', error);

  return (
    <div className="flex flex-col items-center">
      <div className="block text-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          האתר בהרצה
        </h1>
        <h2 className=" font-normal text-gray-700 dark:text-gray-400">
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
