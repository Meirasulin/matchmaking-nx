import { useForm } from 'react-hook-form';
import { TypeJobAndEdu } from '../types/userTypes';
import { useAtom } from 'jotai';
import { stepAtom, userInfoAtom } from '../helpers/initialAtom';
import { requiredValidet } from '../../../matchmakers/signup/helpers/inputValidtion';
import { useState } from 'react';
import { eduList } from '../helpers/lists';

const JobAndEdu = () => {
  const [personalInfo, setPersonalInfo] = useAtom(userInfoAtom);
  const [matchInfo, setMatchInfo] = useAtom(stepAtom);
  const [showEduOption, setShowEduOption] = useState<undefined | string>(
    undefined
  );

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<TypeJobAndEdu>({
    mode: 'onChange',
  });

  const handleClickSubmit = (data: TypeJobAndEdu) => {
    setPersonalInfo(data);
    setMatchInfo((prev) => prev + 1);
  };
  return (
    <>
      <div className="flex ">
        <form action="/" onSubmit={handleSubmit(handleClickSubmit)}>
          <div>
            <label
              htmlFor="seminar"
              className={
                errors.seminar?.message ? 'lableError' : 'lableSuccess'
              }
            >
              {errors.seminar?.message
                ? (errors.seminar?.message as string)
                : 'סמינר'}
            </label>
            <input
              type="text"
              id="seminar"
              {...register('seminar', requiredValidet)}
              className={
                errors.seminar?.message ? 'inputError' : 'inputSuccess'
              }
            />
          </div>

          <div>
            <label
              htmlFor="higherEducation"
              className={
                errors.higherEducation?.message ? 'lableError' : 'lableSuccess'
              }
            >
              {errors.higherEducation?.message
                ? (errors.higherEducation?.message as string)
                : 'השכלה גבוהה'}
            </label>
            <select
              id="headwear"
              className={
                errors.higherEducation?.message ? 'inputError' : 'inputSuccess'
              }
              {...register('higherEducation')}
              onChange={(e) => setShowEduOption(e.target.value)}
            >
              <option className="text-center"> </option>
              {eduList.map((item, i) => (
                <option value={item.type} className="text-center">
                  {item.hebrew}
                </option>
              ))}
            </select>
          </div>
          {showEduOption && showEduOption !== 'no' && (
            <div>
              <label
                htmlFor="educationName"
                className={
                  errors.educationName?.message ? 'lableError' : 'lableSuccess'
                }
              >
                {errors.educationName?.message
                  ? (errors.educationName?.message as string)
                  : 'שם התואר או התעודה'}
              </label>

              <input
              type="text"
              id="educationName"
              {...register('educationName', requiredValidet)}
              className={
                errors.educationName?.message ? 'inputError' : 'inputSuccess'
              }
            />
            </div>
          )}

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
              {...register('headwear')}
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
              {...register('pelKoshers')}
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

export default JobAndEdu;
