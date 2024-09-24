const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 nx-auto ">
            <div className=" w-full p-6 shadow-md rounded-lg bg-blue-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100">
                <h1 className="text-3xl front-semibold text-center text-gray-300">
                    Login
                    <span className="text-blue-500"> ChatApp</span>
                </h1>
                <form >
                    <div>
                        <label className="label p-2">
                            <span className="text-base  text-gray-300 label-text">
                                Username
                            </span>
                        </label>
                        <input type="text" placeholder="enter username" className="w-full input input-bordered h-10" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base  text-gray-300 label-text">
                                Password
                            </span>
                        </label>
                        <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
                    </div>
                    <a href="#" className="text-sm text-gray-300 hover:underline hover:text-blue-600 mt-2 inline-block">{"Don't"} have an account?</a>
                    <div>
                        <button className="btn btn-block btn-sm mt-2">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login