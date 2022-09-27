import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';

const Signin = () =>{
    return(
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form className='sign-in-form'>
                <FormInput label = "Email" type ="email" required name = "email" value= ""/>
                <FormInput label="Password" type="password" required  name ="password" value =""/>
                <div className='submit-container'>
                    <button type="submit">Sign In</button>
                    <button type="button">Google Sign In</button>
                </div>
            </form>
        </div>
    )
}

export default Signin;