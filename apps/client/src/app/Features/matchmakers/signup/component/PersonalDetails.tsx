import { Controller, useForm, FieldValues } from 'react-hook-form';
import {
  genderValidet,
  nameValidet,
  requiredValidet,
} from '../helpers/inputValidtion';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../style/inputs.css';
import { useAtom } from 'jotai';
import { stepAtom , userInfoAtom} from '../helpers/initalAtom';
import { TypePersonalDetails } from '../types/userInfoType';

const PersonalDetails = () => {
  const [personalInfo, setPersonalInfo] = useAtom(userInfoAtom)
  const [currentStep, setCurrentStep] = useAtom(stepAtom);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<TypePersonalDetails>({
    mode: 'onChange',
  });

  const handleClickSubmit = (data: TypePersonalDetails) => {
    setPersonalInfo(data)
    setCurrentStep((prev) => prev + 1);
  };
  return (
    <>
      <div className="flex ">
        <form action="/" onSubmit={handleSubmit(handleClickSubmit)}>
          <div>
            <label
              htmlFor="firstName"
              className={
                errors.firstName?.message ? 'lableError' : 'lableSuccess'
              }
            >
              {errors.firstName?.message
                ? (errors.firstName?.message as string)
                : 'שם פרטי'}
            </label>
            <input
              type="text"
              id="firstName"
              {...register('firstName', nameValidet)}
              className={
                errors.firstName?.message ? 'inputError' : 'inputSuccess'
              }
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className={
                errors.lastName?.message ? 'lableError' : 'lableSuccess'
              }
            >
              {errors.lastName?.message
                ? (errors.lastName?.message as string)
                : 'שם משפחה'}
            </label>
            <input
              type="text"
              {...register('lastName', nameValidet)}
              className={
                errors.lastName?.message ? 'inputError' : 'inputSuccess'
              }
            />
          </div>
          <div>
            <label
              htmlFor="birthDate"
              className={
                errors.birthDate?.message ? 'lableError' : 'lableSuccess'
              }
            >
              {errors.birthDate?.message
                ? (errors.birthDate?.message as string)
                : 'תאריך לידה'}
            </label>
            <Controller
              control={control}
              render={({ field }) => (
                <ReactDatePicker
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                  className={
                    errors.birthDate?.message ? 'inputError' : 'inputSuccess'
                  }
                />
              )}
              {...register('birthDate', requiredValidet)}
            />
          </div>
          <div>
            <label
              htmlFor="specialty"
              className={
                errors.specialty?.message ? 'lableError' : 'lableSuccess'
              }
            >
              {errors.specialty?.message
                ? (errors.specialty?.message as string)
                : 'תחום התמחות'}
            </label>
            <input
              type="text"
              {...register('specialty', requiredValidet)}
              className={
                errors.specialty?.message ? 'inputError' : 'inputSuccess'
              }
            />
          </div>
          <div>
            <label
              htmlFor="gender"
              className={errors.gender?.message ? 'lableError' : 'lableSuccess'}
            >
              {errors.gender?.message
                ? (errors.gender?.message as string)
                : 'מגדר'}
            </label>

            <select
              id="countries"
              className={errors.gender?.message ? 'inputError' : 'inputSuccess'}
              // className="col-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register('gender', genderValidet)}
            >
              <option className="font-bold absolute text-center"> </option>
              <option value="male" className="text-center">
                גבר
              </option>
              <option value="female" className="text-center">
                אישה
              </option>
            </select>
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

export default PersonalDetails;
