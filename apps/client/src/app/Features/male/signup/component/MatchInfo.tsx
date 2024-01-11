import { useForm } from 'react-hook-form';
import { TypeMatchInfo } from '../types/userTypes';
import { useAtom } from 'jotai';
import { stepAtom, userInfoAtom } from '../helpers/initialAtom';
import {
  nameValidet,
  requiredValidet,
} from '../../../matchmakers/signup/helpers/inputValidtion';
import { headwearList, pelKoshersList } from '../helpers/lists';
import citysListJSON from '../../../../utils/citysList';

const MatchInfo = () => {
  const [personalInfo, setPersonalInfo] = useAtom(userInfoAtom);
  const [matchInfo, setMatchInfo] = useAtom(stepAtom);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<TypeMatchInfo>({
    mode: 'onChange',
  });

  const handleClickSubmit = (data: TypeMatchInfo) => {
    setPersonalInfo({ ...personalInfo, ...data });
    setMatchInfo((prev) => prev + 1);
  };
  return (
    <>
      <div className="flex ">
        <form action="/" onSubmit={handleSubmit(handleClickSubmit)}>
          <div>
            <label
              htmlFor="origin"
              className={errors.origin?.message ? 'lableError' : 'lableSuccess'}
            >
              {errors.origin?.message
                ? (errors.origin?.message as string)
                : 'מוצא'}
            </label>
            <input
              type="text"
              id="origin"
              {...register('origin', nameValidet)}
              className={errors.origin?.message ? 'inputError' : 'inputSuccess'}
            />
          </div>
          <div>
            <label
              htmlFor="height"
              className={errors.height?.message ? 'lableError' : 'lableSuccess'}
            >
              {errors.height?.message
                ? (errors.height?.message as string)
                : 'גובה'}
            </label>
            <input
              type="text"
              id="height"
              {...register('height', requiredValidet)}
              className={errors.height?.message ? 'inputError' : 'inputSuccess'}
            />
          </div>
          <div>
            <label
              htmlFor="headwear"
              className={
                errors.headwear?.message ? 'lableError' : 'lableSuccess'
              }
            >
              {errors.headwear?.message
                ? (errors.headwear?.message as string)
                : 'כיסוי ראש מועדף'}
            </label>

            <select
              id="headwear"
              className={
                errors.headwear?.message ? 'inputError' : 'inputSuccess'
              }
              {...register('headwear', requiredValidet)}
            >
              <option className="text-center"> </option>
              {headwearList.map((item, i) => (
                <option value={item.type} className="text-center">
                  {item.hebrew}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="pelKoshers"
              className={
                errors.pelKoshers?.message ? 'lableError' : 'lableSuccess'
              }
            >
              {errors.pelKoshers?.message
                ? (errors.pelKoshers?.message as string)
                : 'אופי פלאפון'}
            </label>

            <select
              id="pelKoshers"
              className={
                errors.pelKoshers?.message ? 'inputError' : 'inputSuccess'
              }
              {...register('pelKoshers', requiredValidet)}
            >
              <option className="text-center"> </option>
              {pelKoshersList.map((item, i) => (
                <option value={item.type} className="text-center">
                  {item.hebrew}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="currentAddress"
              className={
                errors.currentAddress?.message ? 'lableError' : 'lableSuccess'
              }
            >
              {errors.currentAddress?.message
                ? (errors.currentAddress?.message as string)
                : 'עיר מגורים'}
            </label>

            <select
              id="currentAddress"
              className={
                errors.currentAddress?.message ? 'inputError' : 'inputSuccess'
              }
              {...register('currentAddress', requiredValidet)}
            >
              <option className="font-bold absolute text-center"> </option>
              {citysListJSON.map((item, i) => (
                <option value={item.english_name} className="text-center">
                  {item.hebrew_name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="imgLink"
              className={
                errors.imgLink?.message ? 'lableError' : 'lableSuccess'
              }
            >
              {errors.imgLink?.message
                ? (errors.imgLink?.message as string)
                : 'תמונה'}
            </label>
            <input
              type="text"
              id="imgLink"
              {...register('imgLink', { required: false })}
              className={
                errors.imgLink?.message ? 'inputError' : 'inputSuccess'
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

export default MatchInfo;
