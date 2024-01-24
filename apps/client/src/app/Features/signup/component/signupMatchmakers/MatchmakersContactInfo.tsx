import { useForm, useWatch, FieldValues } from 'react-hook-form';
import {
  emailValidet,
  passwordValidet,
  phoneValidet,
} from '../../helpers/inputValidtion';
import '../../style/inputs.css';
import { TypeContactInfoMatchmakers } from '../../types/userTypes';
import {
  useAppDispatch,
} from '../../../../redux/hookStore';
import { updateUserInfoAndStepper } from '../../redux/signupSlice';

const MatchmakersContactInfo = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<TypeContactInfoMatchmakers>({
    mode: 'onChange',
  });
  const password = useWatch({
    control,
    name: 'password',
  });

  const handleClickSubmit = (data: TypeContactInfoMatchmakers) => {
    const { passwordconfirm, ...filteredData } = data;
    dispatch(updateUserInfoAndStepper({ ...filteredData }));
  };
  return (
    <>
      <div className="flex">
        <form
          className="flex flex-col items-center"
          onSubmit={handleSubmit(handleClickSubmit)}
        >
          <div>
            <label
              htmlFor="phoneNumber"
              className={
                errors.phonenumber?.message ? 'lableError' : 'lableSuccess'
              }
            >
              {errors.phonenumber?.message
                ? (errors.phonenumber?.message as string)
                : 'מספר נייד/נייח'}
            </label>
            <input
              type="text"
              id="phoneNumber"
              {...register('phonenumber', phoneValidet)}
              className={
                errors.phonenumber?.message ? 'inputError' : 'inputSuccess'
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
                errors.passwordconfirm?.message ? 'lableError' : 'lableSuccess'
              }
            >
              {errors.passwordconfirm?.message
                ? (errors.passwordconfirm?.message as string)
                : 'אימות סיסמא'}
            </label>
            <input
              type="text"
              {...register('passwordconfirm', {
                required: 'שדה נדרש!',
                validate: (value: unknown) => {
                  if (value !== password) return 'יש להזין סיסמא זהה';
                },
              })}
              className={
                errors.passwordconfirm?.message ? 'inputError' : 'inputSuccess'
              }
            />
          </div>
          <button
            className={!isValid ? 'disableButton' : 'btn m-1 w-max'}
            disabled={!isValid}
            type="submit"
          >
            Next
          </button>
        </form>
      </div>
    </>
  );
};

export default MatchmakersContactInfo;
