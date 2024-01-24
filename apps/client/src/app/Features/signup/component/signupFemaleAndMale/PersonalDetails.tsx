import { Controller, useForm, FieldValues } from 'react-hook-form';
import { requiredValidet } from '../../helpers/inputValidtion';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../style/inputs.css';
import '../../style/signupStepper.css';
import { TypePersonalDetails } from '../../types/userTypes';
import { PersonalInputs } from '../../helpers/inputLists';
import { maritalstatusList } from '../../helpers/selectOptionLists';
import { useAppDispatch } from '../../../../redux/hookStore';
import { updateUserInfoAndStepper } from '../../redux/signupSlice';

const PersonalDetails = () => {
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<TypePersonalDetails>({
    mode: 'onChange',
  });

  const handleClickSubmit = (data: TypePersonalDetails) => {
    dispatch(updateUserInfoAndStepper({ ...data }));
  };

  return (
    <>
      <div className="flex ">
        <form action="/" onSubmit={handleSubmit(handleClickSubmit)}>
          {PersonalInputs.map((item, i) => {
            return (
              <div key={i}>
                <label
                  htmlFor={item.name}
                  className={
                    errors[item.name]?.message ? 'lableError' : 'lableSuccess'
                  }
                >
                  {errors[item.name]?.message
                    ? (errors[item.name]?.message as string)
                    : item.labelName}
                </label>
                <input
                  className={
                    errors[item.name]?.message ? 'inputError' : 'inputSuccess'
                  }
                  type="text"
                  id={item.name}
                  {...register(item.name, item.validatoin)}
                />
              </div>
            );
          })}
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
              className={
                errors.maritalstatus?.message ? 'lableError' : 'lableSuccess'
              }
            >
              {errors.maritalstatus?.message
                ? (errors.maritalstatus?.message as string)
                : 'מצב משפחתי'}
            </label>

            <select
              id="maritalstatus"
              className={
                errors.maritalstatus?.message ? 'inputError' : 'inputSuccess'
              }
              {...register('maritalstatus', requiredValidet)}
            >
              <option className="text-center"> </option>
              {maritalstatusList.map((item, i) => (
                <option value={item.type} className="text-center">
                  {item.hebrew}
                </option>
              ))}
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
