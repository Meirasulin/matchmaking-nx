import ContactInfo from './signupFemaleAndMale/ContactInfo';
import JobAndEdu from './signupFemaleAndMale/JobAndEdu';
import MatchInfo from './signupFemaleAndMale/MatchInfo';
import Payment from './Payment';
import PersonalDetails from './signupFemaleAndMale/PersonalDetails';
import '../style/inputs.css';
import '../style/signupStepper.css';
import MatchmakersPersonalDetails from './signupMatchmakers/MatchmakersPersonalDetails';
import MatchmakersContactInfo from './signupMatchmakers/MatchmakersContactInfo';



type Prop = {
  page: number;
  userType: string;
};

const SignupContainer = ({ page, userType }: Prop) => {

  if (userType === 'male' || userType === 'female') {
    return (
      <>
        {page === 1 && <PersonalDetails />}
        {page === 2 && <MatchInfo />}
        {page === 3 && <JobAndEdu />}
        {page === 4 && <ContactInfo />}
        {page === 5 && <Payment />}
      </>
    );
  } else if (userType === 'matchmaker') {
    return (
      <>
        {page === 1 && <MatchmakersPersonalDetails />}
        {page === 2 && <MatchmakersContactInfo />}
        {page === 3 && <Payment />}
      </>
    );
  }
};
export default SignupContainer;
