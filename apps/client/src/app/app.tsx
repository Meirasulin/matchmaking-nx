// import { Route, Routes, Link } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
// eslint-disable-next-line @nx/enforce-module-boundaries
import trpc from '../trpc/trpcClient';
// import { SyntheticEvent, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  LoginMatchmakerType,
  MatchmakerType,
} from 'apps/server/src/matchmaker/types/matchmakerType';

export const App = () => {
  const login = trpc.matchmaker.login.query;
  const signup = trpc.matchmaker.signup.mutate;

  const {
    register,
    handleSubmit,
    // reset,
    // formState: { errors, isValid },
  } = useForm();

  const onSubmit = (formData: FieldValues) => {
    console.log(formData);
    signup(formData as MatchmakerType);
    // reset();
  };
  const handleLoginMatchmakers = async (formData: FieldValues) => {
    const res = await login(formData as LoginMatchmakerType);
    console.log(res);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <h4>SignUp</h4>
        <label htmlFor="fname"></label>
        <br />
        <input type="text" {...register('firstName')} />
        <br />
        <label htmlFor="lastName"></label>
        <br />
        <input type="text" {...register('lastName')} />
        <br />
        <label htmlFor="birthDate"></label>
        <br />
        <input type="text" {...register('birthDate')} />
        <br />
        <label htmlFor="phoneNumber"></label>
        <br />
        <input type="text" {...register('phoneNumber')} />
        <br />
        <label htmlFor="email"></label>
        <br />
        <input type="text" {...register('email')} />
        <br />
        <label htmlFor="gender"></label>
        <br />
        <input type="text" {...register('gender')} placeholder="male" />
        <br />
        <label htmlFor="specialization"></label>
        <br />
        <input type="text" {...register('specialization')} />
        <br />
        <label htmlFor="password"></label>
        <br />
        <input type="text" {...register('password')} />
        <br />
        <button type="submit">SignUp</button>
      </form>
      <form onSubmit={handleSubmit(handleLoginMatchmakers)}>
        <h4>LogIn</h4>
        <label htmlFor="email"></label>
        <br />
        <input type="text" {...register('email')} />
        <br />
        <label htmlFor="password"></label>
        <br />
        <input type="text" {...register('password')} />
        <button type="submit">LogIn</button>
      </form>
    </div>
  );
};

export default App;
