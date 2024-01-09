import { useAtom } from 'jotai';
import { stepAtom, userInfoAtom } from '../helpers/initialAtom';
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate()
  const [contactInfo] = useAtom(userInfoAtom);
  const [currentStep, setCurrentStep] = useAtom(stepAtom)
  const handleClickFinish = () => {
    setCurrentStep((prev) => prev+1)
  };
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
      <button
        className="btn m-1 w-max"
        type="button"
        onClick={handleClickFinish}
      >
        Finish
      </button>
    </div>
  );
};

export default Payment;
