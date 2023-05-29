import Link from "next/link";
import css from "styled-jsx/css";


// `app/page.tsx` is the UI for the `/` URL

const page = () => {
    return (
        <p>
            <Link href="/Login" passHref>
                <button>
                    Go To Login Page →{' '}
                </button>
            </Link>
            <Link href="/SignUp" passHref>
                <button>
                    Go To Sign Up Page →{' '}
                </button>
            </Link>
        </p>
    )
}

export default page;