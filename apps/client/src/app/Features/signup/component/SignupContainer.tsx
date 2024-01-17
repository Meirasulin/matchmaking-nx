import ContactInfo from './ContactInfo';
import JobAndEdu from './JobAndEdu';
import MatchInfo from './MatchInfo';
import Payment from './Payment';
import PersonalDetails from './PersonalDetails';
import '../style/inputs.css';
import '../style/signupStepper.css';

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
    
  }else if (userType === 'matchmakers') {
    return (
      <>
      
      </>
    )
  }
};
export default SignupContainer;
