import GenderCheckbox from "./genderCheckbox"

const SignUp = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 nx-auto ">
            <div className=" w-full p-6 shadow-md rounded-lg bg-blue-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100">
                <h1 className="text-3xl front-semibold text-center text-gray-300">
                    SignUp
                    <span className="text-blue-500"> ChatApp</span>
                </h1>
                <form >
                    <div>
                        <label className="label p-2">
                            <span className="text-base  text-gray-300 label-text">
                                Full name
                            </span>
                        </label>
                        <input type="text" placeholder="Enter Full Name" className="w-full input input-bordered h-10" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base  text-gray-300 label-text">
                                Username
                            </span>
                        </label>
                        <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base  text-gray-300 label-text">
                                Password
                            </span>
                        </label>
                        <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base  text-gray-300 label-text">
                                Confirm password
                            </span>
                        </label>
                        <input type="password" placeholder="Enter Confirm Password" className="w-full input mb-3 input-bordered h-10" />
                    </div>
                    {/* CHECK BOX HERE */}
                    <GenderCheckbox />
                    <a href="#" className="text-sm text-gray-300 hover:underline hover:text-blue-600 mt-2 inline-block">Already have an account?</a>
                    <div>
                        <button className="btn btn-block btn-sm mt-2">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp