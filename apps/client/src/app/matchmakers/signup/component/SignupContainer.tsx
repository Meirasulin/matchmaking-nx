import PersonalDetails from "./PersonalDetails"

type Prop = {
    page: number
}

const SignupContainer = ({page}: Prop) => {

    return (
        <>
        {page === 1 && <PersonalDetails/>}
        </>
    )
}
export default SignupContainer