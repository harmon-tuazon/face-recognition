import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const defaultCredentials = {
                            email: '',
                            password: '', 
                                    }
 

const Signin = () => {
    const navigate = useNavigate();
    const [isSignedOut, setIsSignedOut] = useState(true);
    const [logInCredentials, setLogInCredentials] = useState(defaultCredentials);

    const handleCredentialChange = (event) => {
        const {name, value} = event.target
    
        setLogInCredentials({
          ...logInCredentials,
          [name]:value
        });
    }
    
    const handleSubmitSignIn = async () => {
        const {email, password} = logInCredentials

         try {
            const response = await fetch('http://localhost:3000/signin', {
                                    method: 'post',
                                    headers: {"Content-Type": "application/json"},
                                    body: JSON.stringify({
                                                          email: email,
                                                          password: password                                   
                                                                             })
                                })
            const user = await response.json()

            if (user.id) {
                setIsSignedOut(false)
                navigate("/", { state: {user}})
            }
        } catch(err) {
           console.log(err)
        }
    } 

    return (
        <>
        {isSignedOut ? 
        
        <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw8 center shadow-4">
            <main className="pa4 black-80">
                <form className="measure center" action="/signin" method="post">

                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
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
                               onClick={handleSubmitSignIn}/>
                    </div>

                    <div className="lh-copy mt3">
                        <Link to="/register" className="f6 link dim black db">Don't have an account yet? Register</Link>
                    </div>

                </form>
            </main>
        </article> 

        :   
    
        <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw8 center shadow-4">
            <main className="pa4 black-80">
                <form className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">We hate to see you leave...</legend>
                        <div className="mt4">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Sign Out"/>
                        </div>
                    </fieldset>
                </form>
            </main>
        </article> }

        </>
    )
}

export default Signin;