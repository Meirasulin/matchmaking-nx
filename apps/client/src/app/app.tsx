import SignupForm from './matchmakers/component/signup/SiginupForm';

export const App = () => {
  return (
    <div className="mt-10 mb-">
      <SignupForm />
    </div>
  );
};

export default App;

// const login = trpc.matchmaker.login.query;
// const signup = trpc.matchmaker.signup.mutate;

// const {
//   register,
//   handleSubmit,
//   // reset,
//   // formState: { errors, isValid },
// } = useForm();

// const onSubmit = (formData: FieldValues) => {
//   console.log(formData);
//   signup(formData as MatchmakerType);
//   // reset();
// };
// const handleLoginMatchmakers = async (formData: FieldValues) => {
//   const res = await login(formData as LoginMatchmakerType);
//   console.log(res);
// };

// {
/* <form onSubmit={handleSubmit(onSubmit)} className="form-container">
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
      </form> */
// }
