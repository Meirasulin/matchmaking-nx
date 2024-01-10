import { useForm } from 'react-hook-form';
import { TypeJobAndEdu } from '../types/userTypes';
import { useAtom } from 'jotai';
import { stepAtom, userInfoAtom } from '../helpers/initialAtom';
import { requiredValidet } from '../../../matchmakers/signup/helpers/inputValidtion';
import { useState } from 'react';
import { eduList, jobStatusList } from '../helpers/lists';

const JobAndEdu = () => {
  const [userInfo, setUserInfo] = useAtom(userInfoAtom);
  const [step, setStep] = useAtom(stepAtom);
  const [showEduOption, setShowEduOption] = useState<undefined | string>(
    undefined
  );
  const [showJobOption, setShowJobOption] = useState<undefined | string>(
    undefined
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TypeJobAndEdu>({
    mode: 'onChange',
  });

  const handleClickSubmit = (data: TypeJobAndEdu) => {
    setUserInfo({ ...userInfo, ...data });
    setStep((prev) => prev + 1);
  };
  return (
    <>
      <div className="flex ">
        <form  onSubmit={handleSubmit(handleClickSubmit)}>
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
              htmlFor="highereducation"
              className={
                errors.highereducation?.message ? 'lableError' : 'lableSuccess'
              }
            >
              {errors.highereducation?.message
                ? (errors.highereducation?.message as string)
                : 'השכלה גבוהה'}
            </label>
            <select
              id="highereducation"
              className={
                errors.highereducation?.message ? 'inputError' : 'inputSuccess'
              }
              {...register('highereducation', requiredValidet)}
              onChange={(e) => setShowEduOption(e.target.value)}
            >
              <option className="text-center"> </option>
              {eduList.map((item, i) => (
                <option key={i} value={item.type} className="text-center">
                  {item.hebrew}
                </option>
              ))}
            </select>
          </div>
          {showEduOption && showEduOption !== 'no' && (
            <>
              <div>
                <label
                  htmlFor="educationname"
                  className={
                    errors.educationname?.message
                      ? 'lableError'
                      : 'lableSuccess'
                  }
                >
                  {errors.educationname?.message
                    ? (errors.educationname?.message as string)
                    : 'שם התואר או התעודה'}
                </label>

                <input
                  type="text"
                  id="educationName"
                  {...register('educationname', requiredValidet)}
                  className={
                    errors.educationname?.message
                      ? 'inputError'
                      : 'inputSuccess'
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="higherEducationAcademy"
                  className={
                    errors.highereducationacademy?.message
                      ? 'lableError'
                      : 'lableSuccess'
                  }
                >
                  {errors.highereducationacademy?.message
                    ? (errors.highereducationacademy?.message as string)
                    : 'שם המוסד להשכלה'}
                </label>
                <input
                  type="text"
                  id="higherEducationAcademy"
                  {...register('highereducationacademy', requiredValidet)}
                  className={
                    errors.highereducationacademy?.message
                      ? 'inputError'
                      : 'inputSuccess'
                  }
                />
              </div>
            </>
          )}
          <div>
            <label
              htmlFor="jobStatus"
              className={
                errors.jobstatus?.message ? 'lableError' : 'lableSuccess'
              }
            >
              {errors.jobstatus?.message
                ? (errors.jobstatus?.message as string)
                : 'משרה'}
            </label>

            <select
              id="jobStatus"
              className={
                errors.jobstatus?.message ? 'inputError' : 'inputSuccess'
              }
              {...register('jobstatus')}
              onChange={(e) => setShowJobOption(e.target.value)}
            >
              <option className="text-center"> </option>
              {jobStatusList.map((item, i) => (
                <option value={item.type} className="text-center">
                  {item.hebrew}
                </option>
              ))}
            </select>
          </div>
          {showJobOption && showJobOption !== 'without' && (
            <div>
              <label
                htmlFor="jobCompany"
                className={
                  errors.jobcompany?.message ? 'lableError' : 'lableSuccess'
                }
              >
                {errors.jobcompany?.message
                  ? (errors.jobcompany?.message as string)
                  : 'שם מקום העבודה'}
              </label>
              <input
                type="text"
                id="jobCompany"
                {...register('jobcompany')}
                className={
                  errors.jobcompany?.message ? 'inputError' : 'inputSuccess'
                }
              />
            </div>
          )}

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
