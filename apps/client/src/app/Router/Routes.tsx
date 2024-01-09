import { Route, Routes } from 'react-router-dom';
import SignupStepperMatch from '../matchmakers/signup/component/SignupStepperMatch';
import SignupStepperFemale from '../female/signup/component/SignupStepperFemale';
import SignupStepperMale from '../male/signup/component/SignupStepperMale';

const Router = () => {
  return (
    <Routes>
      <Route path="/signupmatch" element={<SignupStepperMatch />} />
      <Route path="/signupfemale" element={<SignupStepperFemale />} />
      <Route path="/signupmale" element={<SignupStepperMale />} />
    </Routes>
  );
};

export default Router;
