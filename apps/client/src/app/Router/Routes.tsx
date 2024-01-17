import { Route, Routes } from 'react-router-dom';
import SignupStepperMatch from '../Features/matchmakers/signup/component/SignupStepperMatch';
import HomePage from '../Features/homePage/component/HomePage';
import Login from '../Features/login/component/Login';
import SignupStepperFemale from '../Features/signup/component/SignupStepperFemale';
import InitMatchPage from '../Features/initMatch/component/InitMatchPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignupStepperFemale />} />
      <Route path="/card" element={<InitMatchPage />} />
      {/* <Route path="/signupfemale" element={<SignupStepperFemale />} />
      <Route path="/signupmale" element={<SignupStepperFemale />} /> */}
    </Routes>
  );
};

export default Router;
