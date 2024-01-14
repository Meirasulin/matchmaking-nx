import { useAtom } from 'jotai';
import { useState } from 'react';
import { stepAtom } from '../helpers/initialAtom';
import SignupContainer from './SignupContainer.js';
import { TiTick } from 'react-icons/ti';
import { Navigate, useSearchParams } from 'react-router-dom';
import '../style/inputs.css';
import '../style/signupStepper.css';

const SignupStepperFemale = () => {
  const steps = [
    'פרטיים אישיים',
    'שאלון התאמות',
    'עבודה ולימודים',
    'דרכי התקשרות',
    'תשלום',
  ];
  const [complete, setComplete] = useState(false);
  const [currentStep] = useAtom(stepAtom);
  const [searchParams] = useSearchParams();
  const signupTypeParams = searchParams.get('signup');
  const userTypeName =
    signupTypeParams === 'female'
      ? 'משודכות'
      : signupTypeParams === 'male'
      ? 'משודכים'
      : null;

  if (signupTypeParams !== 'male' && signupTypeParams !== 'female')
    return <Navigate replace to={'/'} />;
  return (
    <>
      <h1 className="text-center font-bold">הרשמה ל{userTypeName}</h1>
      <div className="flex justify-between mt-1">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && 'active'} ${
              (i + 1 < currentStep || complete) && 'complete'
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
      {!complete && (
        <div className="flex items-center flex-col">
          <SignupContainer page={currentStep} />
        </div>
      )}
    </>
  );
};

export default SignupStepperFemale;
