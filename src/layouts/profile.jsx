import { Context } from "./navigation";
import { useContext, useState } from "react";

const Profile = () => {
    const [userData, setUserData] = useContext(Context)
    const [userCredentials, setUserCredentials] = useState()

    const handleCredentialChange = (event) => {
        const {name, value} = event.target
    
        setUserCredentials({
          ...userCredentials,
          [name]:value
        });
    }

    const handleUpdateCredential = async () => {
        const {name, email} = userCredentials

        try {
           const response = await fetch('http://localhost:3000/register', {
                                   method: 'post',
                                   headers: {"Content-Type": "application/json"},
                                   body: JSON.stringify({
                                           name: name, 
                                           email: email,
                                   })})
           const data = await response.json()
           
           if (data.status === 201) {
            console.log("update success")
           }
       } catch(err) {
           console.log(err)
       }
   } 

    const {name, email, entries, joined } = userData;

    return (
        <>
            <div>
                <div class="text-center mt-3">
                    <h1>User Profile</h1>
                </div>
                <div>
                    <input type="text"
                           id="name" 
                           name="name" 
                           value={name}
                           onInput={handleCredentialChange} />
                    <span>Username</span>
                </div>
                <div>
                    <input type="email" 
                           id="username" 
                           name="username" 
                           value={email}  
                           onInput={handleCredentialChange} />
                    <span>Email</span>
                </div>
                <div>
                    <h2 type="number" 
                        id="entries" 
                        name="entries" 
                        value={entries} />
                    <span>Entries</span>
                </div>
                <div>
                    <h2 type="date" 
                        id="joined" 
                        name="joined" 
                        value={joined} />
                    <span>Date Joined</span>
                </div>
                <div>
                    <button type="button" id="update" onClick={handleUpdateCredential}>Save Changes</button>
                </div>
            </div>
        </>
    )
}

export default Profile;