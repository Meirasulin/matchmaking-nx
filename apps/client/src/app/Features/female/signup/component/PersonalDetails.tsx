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
import { stepAtom , userInfoAtom} from '../helpers/initialAtom';
import { TypePersonalDetails } from '../types/userTypes';

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
              htmlFor="firstname"
              className={
                errors.firstname?.message ? 'lableError' : 'lableSuccess'
              }
            >
              {errors.firstname?.message
                ? (errors.firstname?.message as string)
                : 'שם פרטי'}
            </label>
            <input
              type="text"
              id="firstname"
              {...register('firstname', nameValidet)}
              className={
                errors.firstname?.message ? 'inputError' : 'inputSuccess'
              }
            />
          </div>
          <div>
            <label
              htmlFor="lastname"
              className={
                errors.lastname?.message ? 'lableError' : 'lableSuccess'
              }
            >
              {errors.lastname?.message
                ? (errors.lastname?.message as string)
                : 'שם משפחה'}
            </label>
            <input
              type="text"
              {...register('lastname', nameValidet)}
              className={
                errors.lastname?.message ? 'inputError' : 'inputSuccess'
              }
            />
          </div>
          <div>
            <label
              htmlFor="birthdate"
              className={
                errors.birthdate?.message ? 'lableError' : 'lableSuccess'
              }
            >
              {errors.birthdate?.message
                ? (errors.birthdate?.message as string)
                : 'תאריך לידה'}
            </label>
            <Controller
              control={control}
              render={({ field }) => (
                <ReactDatePicker
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                  className={
                    errors.birthdate?.message ? 'inputError' : 'inputSuccess'
                  }
                />
              )}
              {...register('birthdate', requiredValidet)}
            />
          </div>
          <div>
            <label
              htmlFor="maritalstatus"
              className={errors.maritalstatus?.message ? 'lableError' : 'lableSuccess'}
            >
              {errors.maritalstatus?.message
                ? (errors.maritalstatus?.message as string)
                : 'מצב משפחתי'}
            </label>

            <select
              id="countries"
              className={errors.maritalstatus?.message ? 'inputError' : 'inputSuccess'}
              {...register('maritalstatus', requiredValidet)}
            >
              <option className="font-bold absolute text-center"> </option>
              <option value="single" className="text-center">
                רווקה
              </option>
              <option value="divorcee" className="text-center">
                גרושה
              </option>
              <option value="widow" className="text-center">
                אלמנה
              </option>
            </select>
          </div>
          <div>
            <label
              htmlFor="fathername"
              className={
                errors.fathername?.message ? 'lableError' : 'lableSuccess'
              }
            >
              {errors.fathername?.message
                ? (errors.fathername?.message as string)
                : 'שם האב'}
            </label>
            <input
              type="text"
              {...register('fathername', nameValidet)}
              className={
                errors.fathername?.message ? 'inputError' : 'inputSuccess'
              }
            />
          </div>
          <div>
            <label
              htmlFor="mothername"
              className={
                errors.mothername?.message ? 'lableError' : 'lableSuccess'
              }
            >
              {errors.mothername?.message
                ? (errors.lastname?.message as string)
                : 'שם האם'}
            </label>
            <input
              type="text"
              id='mothername'
              {...register('mothername', nameValidet)}
              className={
                errors.mothername?.message ? 'inputError' : 'inputSuccess'
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
