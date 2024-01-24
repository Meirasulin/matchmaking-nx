import { useForm } from 'react-hook-form';
import { TypeMatchInfo } from '../../types/userTypes';
import {  requiredValidet } from '../../helpers/inputValidtion';
import citysListJSON from '../../helpers/citysList';
import { MatchinfoInputs, MatchinfoLists } from '../../helpers/inputLists';
import '../../style/inputs.css';
import '../../style/signupStepper.css';
import { useAppDispatch } from '../../../../redux/hookStore';
import { updateUserInfoAndStepper } from '../../redux/signupSlice';

const MatchInfo = () => {
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TypeMatchInfo>({
    mode: 'onChange',
  });

  const handleClickSubmit = (data: TypeMatchInfo) => {
    data.height = parseInt(data.height as unknown as string);
    dispatch(updateUserInfoAndStepper({ ...data, height: data.height }));
  };
  return (
    <>
      <div className="flex ">
        <form action="/" onSubmit={handleSubmit(handleClickSubmit)}>
          {MatchinfoLists.map((item, i) => (
            <div>
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

              <select
                id={item.name}
                className={
                  errors[item.name]?.message ? 'inputError' : 'inputSuccess'
                }
                {...register(item.name, item.validatoin)}
              >
                <option className="text-center"> </option>
                {item.list.map((item, i) => (
                  <option key={i} value={item.type} className="text-center">
                    {item.hebrew}
                  </option>
                ))}
              </select>
            </div>
          ))}
          {MatchinfoInputs.map((item, i) => (
            <div>
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
                type="text"
                id={item.name}
                {...register(item.name, item.validatoin)}
                className={
                  errors[item.name]?.message ? 'inputError' : 'inputSuccess'
                }
              />
            </div>
          ))}
          <div>
            <label
              htmlFor="currentaddress"
              className={
                errors.currentaddress?.message ? 'lableError' : 'lableSuccess'
              }
            >
              {errors.currentaddress?.message
                ? (errors.currentaddress?.message as string)
                : 'עיר מגורים'}
            </label>

            <select
              id="currentaddress"
              className={
                errors.currentaddress?.message ? 'inputError' : 'inputSuccess'
              }
              {...register('currentaddress', requiredValidet)}
            >
              <option className="font-bold absolute text-center"> </option>
              {citysListJSON.map((item, i) => (
                <option value={item.english_name} className="text-center">
                  {item.hebrew_name}
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

export default MatchInfo;
