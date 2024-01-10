import ContactInfo from "./ContactInfo";
import Payment from "./Payment";
import PersonalDetails from "./PersonalDetails"

type Prop = {
    page: number;

}

const SignupContainer = ({page}: Prop) => {

    return (
        <>
        {page === 1 && <PersonalDetails />}
        {page === 2 && <ContactInfo  />}
        {page === 3 && <Payment/>}
        </>
    )
}
export default SignupContainer