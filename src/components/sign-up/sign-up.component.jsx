import './sign-up.styles.scss'
import FormInput from '../form-input/form-input.component'

const Signup = () =>{
    return(
        <div className="signup-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form>
                <FormInput label="Display Name" type="text" required  name="displayName" value = ""/>

                <FormInput label="Email" type="email" required  name ="email" value =""/>

                <FormInput label="Password" type="password" required  name ="password" value =""/>

                <FormInput label="Confirm Password" type= "password" required  name ="confirmPassword" value=""/>
                <button type = "submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Signup