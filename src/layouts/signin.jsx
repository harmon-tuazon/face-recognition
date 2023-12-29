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
         const response = await fetch('http://localhost:3000/signin', {
                                    method: 'post',
                                    headers: {"Content-Type": "application/json"},
                                    body: JSON.stringify({
                                            email: email,
                                            password: password
                                    })})
         const user = await response.json()

         try {
            setIsSignedOut(false)

            if (user) {
                navigate("/")
            }
        } catch(err) {
            throw new Error(err)
        }
    } 

    return (
        <>
        {isSignedOut ? 
        
        <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw8 center shadow-4">
            <main class="pa4 black-80">
                <form class="measure center" action="/signin" method="post">

                    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                        <legend class="f4 fw6 ph0 mh0">Sign In</legend>
                        <div class="mt3">
                            <label class="db fw6 lh-copy f6" for="email">Email</label>
                            <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                   type="email"   
                                   id="email"
                                   name="email"
                                   onInput={handleCredentialChange}/>
                        </div>
                        <div class="mv3">
                            <label class="db fw6 lh-copy f6" for="password">Password</label>
                            <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                   type="password" 
                                   id="password"
                                   name="password"
                                   onInput={handleCredentialChange}/>
                        </div>
                    </fieldset>

                    <div class="">
                        <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                               type="button" 
                               value="Sign in" 
                               onClick={handleSubmitSignIn}/>
                    </div>

                    <div class="lh-copy mt3">
                        <Link to="/register" class="f6 link dim black db">Don't have an account yet? Register</Link>
                    </div>

                </form>
            </main>
        </article> 

        :   
    
        <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw8 center shadow-4">
            <main class="pa4 black-80">
                <form class="measure center">
                    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                        <legend class="f4 fw6 ph0 mh0">We hate to see you leave...</legend>
                        <div class="mt4">
                            <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Sign Out"/>
                        </div>
                    </fieldset>
                </form>
            </main>
        </article> }

        </>
    )
}

export default Signin;