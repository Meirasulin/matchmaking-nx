import ContactInfo from './ContactInfo';
import MatchInfo from './MatchInfo';
import Payment from './Payment';
import PersonalDetails from './PersonalDetails';

type Prop = {
  page: number;
};

const SignupContainer = ({ page }: Prop) => {
  return (
    <>
      {page === 1 && <PersonalDetails />}
      {page === 2 && <MatchInfo />}
      {page === 3 && <></>}
      {page === 4 && <ContactInfo />}
      {page === 5 && <Payment />}
    </>
  );
};
export default SignupContainer;
