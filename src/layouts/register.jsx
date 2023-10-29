import { Link } from "react-router-dom";

const Register = () => {

    return (
        <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw8 center shadow-4">
            <main class="pa4 black-80">
                <form class="measure center">

                    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                        <legend class="f4 fw6 ph0 mh0">Register</legend>
                        <div class="mt3">
                            <label class="db fw6 lh-copy f6" for="fullname">Full Name</label>
                            <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" id="fullname"/>
                        </div>
                        <div class="mt3">
                            <label class="db fw6 lh-copy f6" for="email-address">Email</label>
                            <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" id="email-address"/>
                        </div>
                        <div class="mv3">
                            <label class="db fw6 lh-copy f6" for="password">Password</label>
                            <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" id="password"/>
                        </div>
                    </fieldset>

                    <div class="">
                        <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Sign in"/>
                    </div>

                    <div class="lh-copy mt3">
                        <Link to="/sign-in" class="f6 link dim black db">Already have an account? Sign-in</Link>
                    </div>
                    
                </form>
            </main>
        </article>

    )
}

export default Register;