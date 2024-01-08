import ContactInfo from "./ContactInfo";
import PersonalDetails from "./PersonalDetails"

type Prop = {
    page: number;

}

const SignupContainer = ({page}: Prop) => {
console.log(page);

    return (
        <>
        {page === 1 && <PersonalDetails />}
        {page === 2 && <ContactInfo  />}
        </>
    )
}
export default SignupContainer