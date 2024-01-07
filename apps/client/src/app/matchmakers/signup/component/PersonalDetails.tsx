import { useForm } from 'react-hook-form';
import { requiredValidet } from '../helpers/inputValidtion';
const PersonalDetails = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();
  return (
    <>
      <form action="/">
        <input type="text" {...register('firstName'), requiredValidet} />
        <br />
        <input type="text" {...register('lastName')} />
        <br />
        <input type="text" {...register('birthDate')} />
        <br />
        <input type="text" {...register('gender')} />
      </form>
    </>
  );
};

export default PersonalDetails;

// [שם פרטי, שם משפחה, תאריך לידה, מגדר, ]
