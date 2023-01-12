import { useState } from 'react'


const defaultFormFilleds = {
    email: '',
    password: '',
    confirmPassword: ''
}
const FormValidator = () => {
    const [formFields, setFormFields] = useState(defaultFormFilleds);
    const { email, password, confirmPassword } = formFields;

    const changeHandler = (event) => {

        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password does not match");
            return;
        }
        alert("correct inputs");
    }

    return (
        <form onSubmit={submitHandler}>
            <h2>Sign Up!</h2>
            <label>Email</label>
            <input type='email' name='email' onChange={changeHandler} required />
            <label>Password</label>
            <input type='password' name='password' onChange={changeHandler} required minLength={8} />
            <label>Confirm Password </label>
            <input type='password' name='confirmPassword' onChange={changeHandler} required minLength={8} />
            <button type='submit' value='Submit'> submit </button>
        </form>
    )
}
export default FormValidator;