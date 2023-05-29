import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { redirect } from 'next/navigation';

// `app/page.tsx` is the UI for the `/` URL

const page = () => {
 


  
    return (
        <div>Hello!</div>
    )
}

export default page;