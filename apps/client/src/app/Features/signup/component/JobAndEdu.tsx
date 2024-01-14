import { useForm } from 'react-hook-form';
import { TypeJobAndEdu } from '../types/userTypes';
import { useAtom } from 'jotai';
import { stepAtom, userInfoAtom } from '../helpers/initialAtom';
import { useState } from 'react';
import { torahStudyStatusList } from '../helpers/selectOptionLists';
import '../style/inputs.css';
import '../style/signupStepper.css';
import { Navigate, useSearchParams } from 'react-router-dom';
import { JobAndEduLists, maleOrFeamle } from '../helpers/inputLists';

const JobAndEdu = () => {
  const [userInfo, setUserInfo] = useAtom(userInfoAtom);
  const [_, setStep] = useAtom(stepAtom);
  const [searchParams] = useSearchParams();
  const signupTypeParams = searchParams.get('signup');
  const [showOption, setShowOption] = useState<
    | undefined
    | { highereducation?: string | undefined; jobstatus?: string | undefined }
  >(undefined);
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
  if (signupTypeParams !== 'male' && signupTypeParams !== 'female')
    return <Navigate replace to={'/'} />;
  return (
    <>
      <div className="flex ">
        <form onSubmit={handleSubmit(handleClickSubmit)}>
          {maleOrFeamle[signupTypeParams].map((item, i) => (
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
                type="text"
                id={item.name}
                {...register(item.name, item.validatoin)}
                className={
                  errors[item.name]?.message ? 'inputError' : 'inputSuccess'
                }
              />
            </div>
          ))}
          {signupTypeParams === 'male' ? (
            <div>
              <label
                htmlFor="torahstudystatus"
                className={
                  errors.torahstudystatus?.message
                    ? 'lableError'
                    : 'lableSuccess'
                }
              >
                {errors.torahstudystatus?.message
                  ? (errors.torahstudystatus?.message as string)
                  : 'לימוד תורה'}
              </label>
              <select
                id="torahstudystatus"
                className={
                  errors.torahstudystatus?.message
                    ? 'inputError'
                    : 'inputSuccess'
                }
                {...register('torahstudystatus')}
              >
                <option className="text-center"> </option>
                {torahStudyStatusList.map((item, i) => (
                  <option key={i} value={item.type} className="text-center">
                    {item.hebrew}
                  </option>
                ))}
              </select>
            </div>
          ) : null}
          {JobAndEduLists.map((item, i) => (
            <div key={i}>
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
                  onChange={(e) =>
                    setShowOption({ [e.target.name]: e.target.value })
                  }
                >
                  <option className="text-center"> </option>
                  {item.list.map((item, i) => (
                    <option key={i} value={item.type} className="text-center">
                      {item.hebrew}
                    </option>
                  ))}
                </select>
              </div>
              {showOption &&
                showOption[item.name] !== 'no' &&
                showOption[item.name] !== undefined &&
                item.subList.map((item) => (
                  <div key={i}>
                    <label
                      htmlFor={item.name}
                      className={
                        errors[item.name]?.message
                          ? 'lableError'
                          : 'lableSuccess'
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
                        errors[item.name]?.message
                          ? 'inputError'
                          : 'inputSuccess'
                      }
                    />
                  </div>
                ))}
            </div>
          ))}
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
