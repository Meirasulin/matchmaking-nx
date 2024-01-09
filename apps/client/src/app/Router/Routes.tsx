import { Route, Routes } from 'react-router-dom';
import SignupStepperMatch from '../matchmakers/signup/component/SignupStepperMatch';
import SignupStepperFemale from '../female/signup/component/SignupStepperFemale';

const Router = () => {
  return (
    <Routes>
      <Route path="/signupmatch" element={<SignupStepperMatch />} />
      <Route path="/signupfemale" element={<SignupStepperFemale />} />
    </Routes>
  );
};

export default Router;
