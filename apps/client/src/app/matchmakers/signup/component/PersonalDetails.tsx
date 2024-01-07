import { Controller, useForm } from 'react-hook-form';
import {  nameValidet } from '../helpers/inputValidtion';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const PersonalDetails = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm();
  return (
    <>
      <form action="/">
        <input type="text" {...register('firstName', nameValidet)} />
        <br />
        <input type="text" {...register('lastName', nameValidet)} />
        <br />
        <Controller
          control={control}
          name="ReactDatepicker"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <ReactDatePicker
              onChange={onChange}
              onBlur={onBlur}
              selected={value}
            />
          )}
        />
        <input type="text" {...register('birthDate')} />
        <br />
        <input type="text" {...register('gender')} />
      </form>
    </>
  );
};

export default PersonalDetails