import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase_app from "../config";
import { firebaseConfig } from '@/app/Firebase/config';
import { redirect } from 'next/navigation';

const auth = getAuth(firebase_app);


export default async function signUp(email, password) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}



// const auth = getAuth(app);

// export const handleSignUp = (event) => {  
//   console.log(process.env.API_KEY);

//   event.preventDefault();
//     const email = event.target.email.value;
//     const password = event.target.password.value;
//     const passwordRepeat = event.target.passwordrepeat.value;
//     if (password !== passwordRepeat) {
//         // Display an error message or handle the password mismatch
//         return;
//     }

//     createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         // Account creation successful
//         console.log("Account Created")
//         const user = userCredential.user;
//         redirect('./page');
//         // nav to Homepage (not done)
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // Handle the error, e.g., display an error message to the user
//     });
// };

