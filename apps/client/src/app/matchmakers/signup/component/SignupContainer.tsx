import PersonalDetails from "./PersonalDetails"

type Prop = {
    page: number
}

const SignupContainer = ({page}: Prop) => {
    if (page === 0) return <PersonalDetails/>
    else if (page === 1 ) return 
    else if (page === 2) return 
}
export default SignupContainer