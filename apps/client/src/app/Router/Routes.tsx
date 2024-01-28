import { Route, Routes } from 'react-router-dom';
import HomePage from '../Features/homePage/component/HomePage';
import Login from '../Features/login/component/Login';
import SignupStepper from '../Features/signup/component/SignupStepper';
import InitMatchPage from '../Features/initMatch/component/InitMatchPage';
import ErrorPage from '../Features/errors/component/ErrorPage';
import Layout from '../layout/component/layout';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupStepper />} />
        <Route path="/initmatchcards" element={<InitMatchPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
