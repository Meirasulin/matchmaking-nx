import { Controller, useForm } from 'react-hook-form';
import {
  genderValidet,
  nameValidet,
  requiredValidet,
} from '../../helpers/inputValidtion';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../style/inputs.css';
import { TypePersonalDetailsMatchmakers } from '../../types/userTypes';
import { updateUserInfoAndStepper } from '../../redux/signupSlice';
import { useAppDispatch } from '../../../../redux/hookStore';

const MatchmakersPersonalDetails = () => {
const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<TypePersonalDetailsMatchmakers>({
    mode: 'onChange',
  });

  const handleClickSubmit = (data: TypePersonalDetailsMatchmakers) => {
    dispatch(updateUserInfoAndStepper({ ...data, birthdate: data.birthdate.toDateString()}));
  }
  return (
    <>
      <div className="flex ">
        <form onSubmit={handleSubmit(handleClickSubmit)}>
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
              id="firstName"
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
              htmlFor="birthDate"
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

export default MatchmakersPersonalDetails;
