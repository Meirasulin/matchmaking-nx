import { useState } from 'react';
import '../style/signupStepper.css';
import { TiTick } from 'react-icons/ti';
import SignupContainer from './SignupContainer';
import { atom, useAtom } from 'jotai'
import { page } from '../helpers/inputValidtion';



const SignupStepper = () => {
  const steps = ['פרטיים אישיים', 'דרכי התקשרות', 'תשלום'];
  const [complete, setComplete] = useState(false);
  const [currentStep] = useAtom(page)

  // const handleNextButton = () => {
  //   currentStep === steps.length
  //     ? setComplete(true)
  //     : setCurrentStep((prev) => prev + 1);
  // };
  return (
    <>
      <h1 className="flex justify-center font-bold"> הרשמה למשדכים</h1>
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
        <div className='flex items-center flex-col'>
          <SignupContainer page={currentStep} />
        </div>
      )}
    </>
  );
};
export default SignupStepper;

