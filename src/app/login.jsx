import React, {useState} from "react"

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <form>
            <label for="email">email</label>
            <input 
            type="email" 
            placeholder="nusnetid@u.nus.edu" 
            value={email} 
            id="email" 
            name="email" 
            />
            <label for="password">password</label>
            <input 
            type="password" 
            placeholder="*********" 
            value={pass} 
            id="password" 
            name="password" 
            />
            <button>Log in</button>
        </form>
    )
}