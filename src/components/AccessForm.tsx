import { ReactNode, useState } from "react";

function ContainerInput({ children, flexOrentation }: { children: ReactNode, flexOrentation: string }) {
    return (
        <div className={`w-full flex ${flexOrentation} items-start`}>
            {children}
        </div>
    );
}

export default function AccessForm({ isSigninOpen, isSignupOpen }: { isSigninOpen: boolean, isSignupOpen: boolean }) {

    const [signupEmail, setSignupEmail] = useState('');
    const [signupPass, setSignupPass] = useState('');
    const [signupPassConfirm, setSignupPassConfirm] = useState('');
    const [signupCheckbox, setSignupCheckbox] = useState(false);

    const handleSignup = () => {
        console.log(`Email: ${signupEmail}`);
        console.log(`Password: ${signupPass}`);
        console.log(`Password confirm: ${signupPassConfirm}`);
    }

    function SigninForm() {
        return (
            <form className="w-full md:w-1/2 h-[88svh] md:h-full flex flex-col gap-5 items-center justify-center px-6 md:px-32 bg-gray-100">
                <ContainerInput flexOrentation="flex-col">
                    <h1 className="text-2xl font-bold">Welcome back</h1>
                </ContainerInput>
                <ContainerInput flexOrentation="flex-col">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </ContainerInput>
                <ContainerInput flexOrentation="flex-col">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </ContainerInput>
                <ContainerInput flexOrentation="flex-row">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </ContainerInput>
                <ContainerInput flexOrentation="flex-col">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </ContainerInput>
            </form>
        );
    }

    function SignupForm() {
        return (
            <form className="w-full md:w-1/2 h-[88svh] md:h-full flex flex-col gap-5 items-center justify-center px-6 md:px-32 bg-gray-100">
                <ContainerInput flexOrentation="flex-col">
                    <h1 className="text-2xl font-bold">Your best work start here</h1>
                </ContainerInput>
                <ContainerInput flexOrentation="flex-col">
                    <label htmlFor="input-signup-email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input
                        type="email"
                        id="input-signup-email"
                        name="input-signup-email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="name@flowbite.com"
                        required
                        value={signupEmail}
                        onChange={(event) => setSignupEmail(event.target.value)} />
                </ContainerInput>
                <ContainerInput flexOrentation="flex-col">
                    <label htmlFor="input-signup-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input
                        type="password"
                        id="input-signup-password"
                        name="input-signup-password"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                        value={signupPass}
                        onChange={(event) => setSignupPass(event.target.value)} />
                </ContainerInput>
                <ContainerInput flexOrentation="flex-col">
                    <label htmlFor="input-signup-repet-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
                    <input
                        type="password"
                        id="input-signup-repet-password"
                        name="input-signup-repet-password"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                        value={signupPassConfirm}
                        onChange={(event) => setSignupPassConfirm(event.target.value)} />
                </ContainerInput>
                <ContainerInput flexOrentation="flex-row">
                    <div className="flex items-center h-5">
                        <input onChange={() => setSignupCheckbox(!signupCheckbox)} checked={signupCheckbox} id="terms" type="checkbox" value="" name="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                    </div>
                    <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                </ContainerInput>
                <ContainerInput flexOrentation="flex-col">
                    <button onClick={handleSignup} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register new account</button>
                </ContainerInput>
                <ContainerInput flexOrentation="flex-row">
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account? <a href="#" className="font-medium text-blue-600 hover:underline dark:text-primary-500">Login here</a>
                    </p>
                </ContainerInput>
            </form>
        );
    }

    return (
        <div className="w-full h-auto md:h-[88svh] flex flex-col md:flex-row">
            {isSigninOpen ? (<SigninForm />) : isSignupOpen ? <SignupForm /> : ''}
            {/* Box informazioni */}
            <div className="w-full md:w-1/2 h-auto md:h-full bg-blue-700 flex flex-col items-start justify-center gap-3 px-6 md:px-20 py-10 md:py-0">
                <h1 className="text-white text-xl font-bold">Describify</h1>
                <h1 className="text-white text-5xl font-bold">Explore the world’s leading design portfolios.</h1>
                <p className="text-gray-300 text-md">Millions of designers and agencies around the world showcase their portfolio work on Flowbite - the home to the world’s best design and creative professionals.</p>
            </div>
        </div>
    )
}
