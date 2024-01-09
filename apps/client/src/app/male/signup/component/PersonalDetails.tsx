import { Controller, useForm, FieldValues } from 'react-hook-form';
import {
  genderValidet,
  nameValidet,
  requiredValidet,
} from '../../../matchmakers/signup/helpers/inputValidtion';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../style/inputs.css';
import { useAtom } from 'jotai';
import { stepAtom, userInfoAtom } from '../helpers/initialAtom';
import { TypePersonalDetails } from '../types/userTypes';

const PersonalDetails = () => {
  const [personalInfo, setPersonalInfo] = useAtom(userInfoAtom);
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
    setPersonalInfo(data);
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
              htmlFor="maritalStatus"
              className={
                errors.maritalStatus?.message ? 'lableError' : 'lableSuccess'
              }
            >
              {errors.maritalStatus?.message
                ? (errors.maritalStatus?.message as string)
                : 'מצב משפחתי'}
            </label>

            <select
              id="countries"
              className={
                errors.maritalStatus?.message ? 'inputError' : 'inputSuccess'
              }
              {...register('maritalStatus', requiredValidet)}
            >
              <option className="font-bold absolute text-center"> </option>
              <option value="single" className="text-center">
                רווק
              </option>
              <option value="divorcee" className="text-center">
                גרוש
              </option>
              <option value="widow" className="text-center">
                אלמן
              </option>
            </select>
          </div>
          <div>
            <label
              htmlFor="fatherName"
              className={
                errors.fatherName?.message ? 'lableError' : 'lableSuccess'
              }
            >
              {errors.fatherName?.message
                ? (errors.fatherName?.message as string)
                : 'שם האב'}
            </label>
            <input
              type="text"
              {...register('fatherName', nameValidet)}
              className={
                errors.fatherName?.message ? 'inputError' : 'inputSuccess'
              }
            />
          </div>
          <div>
            <label
              htmlFor="motherName"
              className={
                errors.motherName?.message ? 'lableError' : 'lableSuccess'
              }
            >
              {errors.motherName?.message
                ? (errors.lastName?.message as string)
                : 'שם האם'}
            </label>
            <input
              type="text"
              id="motherName"
              {...register('motherName', nameValidet)}
              className={
                errors.motherName?.message ? 'inputError' : 'inputSuccess'
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

export default PersonalDetails;
