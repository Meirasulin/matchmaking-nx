import { Route, Routes } from 'react-router-dom';
import SignupStepperMatch from '../Features/matchmakers/signup/component/SignupStepperMatch';
import SignupStepperFemale from '../Features/female/signup/component/SignupStepperFemale';
import SignupStepperMale from '../Features/male/signup/component/SignupStepperMale';
import HomePage from '../Features/homePage/component/HomePage';
import Login from '../Features/login/component/Login';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="/signupmatch" element={<SignupStepperMatch />} />
      <Route path="/signupfemale" element={<SignupStepperFemale />} />
      <Route path="/signupmale" element={<SignupStepperMale />} />
    </Routes>
  );
};

export default Router;
