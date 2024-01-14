import ContactInfo from './ContactInfo';
import JobAndEdu from './JobAndEdu';
import MatchInfo from './MatchInfo';
import Payment from './Payment';
import PersonalDetails from './PersonalDetails';
import '../style/inputs.css'
import '../style/signupStepper.css'

type Prop = {
  page: number;
};

const SignupContainer = ({ page }: Prop) => {
  return (
    <>
      {page === 1 && <PersonalDetails />}
      {page === 2 && <MatchInfo />}
      {page === 3 && <JobAndEdu />}
      {page === 4 && <ContactInfo />}
      {page === 5 && <Payment />}
    </>
  );
};
export default SignupContainer;
