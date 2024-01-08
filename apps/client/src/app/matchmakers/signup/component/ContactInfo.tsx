import { useForm, useWatch, FieldValues } from 'react-hook-form';
import {
  emailValidet,
  page,
  passwordValidet,
  phoneValidet,
} from '../helpers/inputValidtion';
import '../style/inputs.css';
import { useAtom } from 'jotai';

const ContactInfo = () => {
  const [currentStep, setCurrentStep] = useAtom(page);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });
  const password = useWatch({
    control,
    name: 'password',
  });

  const handleClickSubmit = (data: FieldValues) => {
    console.log(data);
    setCurrentStep((prev) => prev + 1);
  };
  return (
    <>
      <div className="flex">
        <form action="/" className="flex  flex-col items-center" onSubmit={handleSubmit(handleClickSubmit)}>
          <div>
            <label
              htmlFor="phoneNumber"
              className={
                errors.phoneNumber?.message ? 'lableError' : 'lableSuccess'
              }
            >
              {errors.phoneNumber?.message
                ? (errors.phoneNumber?.message as string)
                : 'מספר נייד/נייח'}
            </label>
            <input
              type="text"
              id="phoneNumber"
              {...register('phoneNumber', phoneValidet)}
              className={
                errors.phoneNumber?.message ? 'inputError' : 'inputSuccess'
              }
            />
          </div>
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
              className={
                errors.password?.message ? 'lableError' : 'lableSuccess'
              }
            >
              {errors.password?.message
                ? (errors.password?.message as string)
                : 'סיסמא'}
            </label>
            <input
              type="text"
              {...register('password', passwordValidet)}
              className={
                errors.password?.message ? 'inputError' : 'inputSuccess'
              }
            />
          </div>
          <div>
            <label
              htmlFor="passwordConfirm"
              className={
                errors.passwordConfirm?.message ? 'lableError' : 'lableSuccess'
              }
            >
              {errors.passwordConfirm?.message
                ? (errors.passwordConfirm?.message as string)
                : 'אימות סיסמא'}
            </label>
            <input
              type="text"
              {...register('passwordConfirm', {
                required: 'שדה נדרש!',
                validate: (value: unknown) => {
                  if (value !== password) return 'יש להזין סיסמא זהה';
                },
              })}
              className={
                errors.passwordConfirm?.message ? 'inputError' : 'inputSuccess'
              }
            />
          </div>
          <button className={!isValid ? 'disableButton' : "btn m-1 w-max"} disabled={!isValid} type="submit">
            Next
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactInfo;
