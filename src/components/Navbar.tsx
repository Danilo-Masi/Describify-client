export default function Navbar({ onSignin, onSignup }: { onSignin: () => void, onSignup: () => void }) {
    return (
        <div className="w-full h-[12svh] flex items-center justify-center bg-gray-200">
            <div className="w-[90%] md:w-[80%] flex items-center">
                {/* Logo */}
                <div className="w-1/2 md:w-1/4">
                    <h1 className="text-2xl">Describify</h1>
                </div>
                {/* Lista elementi menu */}
                <div className="md:w-2/4 hidden md:flex items-center justify-center gap-3">
                    <p>Home</p>
                    <p>Services</p>
                    <p>About</p>
                    <p>Prices</p>
                </div>
                {/* Button Login/Signup */}
                <div className="md:w-1/4 hidden md:flex items-center justify-end gap-2">
                    <button
                        onClick={onSignin}
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                        Login
                    </button>
                    <button
                        onClick={onSignup}
                        type="button"
                        className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                        Signup
                    </button>
                </div>
                {/* Button Menu mobile */}
                <div className="w-1/2 flex md:hidden items-center justify-end">
                    <button
                        type="button"
                        className="text-gray-700 border border-gray-700 hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-2.5 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <span className="sr-only">menu icon</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
