import { useForm } from 'react-hook-form';
import { TypeJobAndEdu } from '../types/userTypes';
import { useAtom } from 'jotai';
import { stepAtom, userInfoAtom } from '../helpers/initialAtom';
import { requiredValidet } from '../../../matchmakers/signup/helpers/inputValidtion';
import { useState } from 'react';
import { eduList, jobStatusList } from '../helpers/lists';

const JobAndEdu = () => {
  const [personalInfo, setPersonalInfo] = useAtom(userInfoAtom);
  const [matchInfo, setMatchInfo] = useAtom(stepAtom);
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
    setPersonalInfo({ ...personalInfo, ...data });
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
              id="higherEducation"
              className={
                errors.higherEducation?.message ? 'inputError' : 'inputSuccess'
              }
              {...register('higherEducation', requiredValidet)}
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
            <>
              <div>
                <label
                  htmlFor="educationName"
                  className={
                    errors.educationName?.message
                      ? 'lableError'
                      : 'lableSuccess'
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
                    errors.educationName?.message
                      ? 'inputError'
                      : 'inputSuccess'
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="higherEducationAcademy"
                  className={
                    errors.higherEducationAcademy?.message
                      ? 'lableError'
                      : 'lableSuccess'
                  }
                >
                  {errors.higherEducationAcademy?.message
                    ? (errors.higherEducationAcademy?.message as string)
                    : 'שם המוסד להשכלה'}
                </label>
                <input
                  type="text"
                  id="higherEducationAcademy"
                  {...register('higherEducationAcademy', requiredValidet)}
                  className={
                    errors.higherEducationAcademy?.message
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
                errors.jobStatus?.message ? 'lableError' : 'lableSuccess'
              }
            >
              {errors.jobStatus?.message
                ? (errors.jobStatus?.message as string)
                : 'משרה'}
            </label>

            <select
              id="jobStatus"
              className={
                errors.jobStatus?.message ? 'inputError' : 'inputSuccess'
              }
              {...register('jobStatus')}
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
                  errors.jobCompany?.message ? 'lableError' : 'lableSuccess'
                }
              >
                {errors.jobCompany?.message
                  ? (errors.jobCompany?.message as string)
                  : 'שם מקום העבודה'}
              </label>
              <input
                type="text"
                id="jobCompany"
                {...register('jobCompany')}
                className={
                  errors.jobCompany?.message ? 'inputError' : 'inputSuccess'
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
