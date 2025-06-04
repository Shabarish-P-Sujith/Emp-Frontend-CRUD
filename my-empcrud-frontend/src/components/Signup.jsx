import React from 'react'

const auth = getAuth(app);

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then(resp => alert("Success"));
    }

    return (
        <div>
            <input type="email" name="email" id="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} /> <br /><br />
            <input type="password" name="password" id="password" placeholder='Enter Password' value={password} onChange={(e) => setEmail(e.target.value)} /> <br /><br />
            <button onClick={createUser}>Sign Up</button>
        </div>
    );
}
