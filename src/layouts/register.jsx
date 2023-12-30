import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const defaultCredentials = {
                            fullname: '',
                            email: '',
                            password: '', 
                                         }

const Register = () => {
    const navigate = useNavigate()
    const [regCredentials, setRegCredentials] = useState(defaultCredentials)

    const handleCredentialChange = (event) => {
        const {name, value} = event.target
    
        setRegCredentials({
          ...regCredentials,
          [name]:value
        });
    }

    const handleSubmitReg = async () => {
        const {fullname, email, password} = regCredentials

        try {
           const response = await fetch('http://localhost:3000/register', {
                                   method: 'post',
                                   headers: {"Content-Type": "application/json"},
                                   body: JSON.stringify({
                                           fullname: fullname, 
                                           email: email,
                                           password: password
                                   })})
           const data = await response.json()
           
           if (data.status === 201) {
               navigate("/")
           }
       } catch(err) {
           console.log(err)
       }
   } 
    

    return (
        <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw8 center shadow-4">
            <main className="pa4 black-80">
                <form className="measure center"  action="/register" method="post">

                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="fullname">Full Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                   type="text" 
                                   id="fullname"
                                   name="fullname"
                                   onInput={handleCredentialChange}/>
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                   type="email" 
                                   id="email"
                                   name="email"
                                   onInput={handleCredentialChange}/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                   type="password" 
                                   id="password"
                                   name="password"
                                   onInput={handleCredentialChange}/>
                        </div>
                    </fieldset>

                    <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                               type="button" 
                               value="Sign in"
                               onClick={handleSubmitReg}/>
                    </div>

                    <div className="lh-copy mt3">
                        <Link to="/sign-in" className="f6 link dim black db">Already have an account? Sign-in</Link>
                    </div>
                    
                </form>
            </main>
        </article>

    )
}

export default Register;